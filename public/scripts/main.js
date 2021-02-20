import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log("fire");

    //load the socket library and make a connection
    const socket = io();


    //messenger service event handling -->incomig from the manager\
    function setUserId({sID, message}) {
        //incoming connecte event with data
        //debugger;
        vm.socketID = sID;
    }

    function appendMessage(message) {
        vm.messages.push(message);
    }
 
    const vm = new Vue({
        data: {
            messages: [],
            nickname: "",
            username: "",
            socketID: "",
            message: ""
        },

        created: function() {
            console.log('its alive!');
        },

        methods: {
            dispatchMessage() {
                socket.emit('chatmessage', {content: this.message, name: this.nickname || "Anonymous" })
            }
        },

        components: {
            newmessage: ChatMessage
        }
    

    }).$mount("#app");

    socket.addEventListener("connected", setUserId);
    socket.addEventListener('message', appendMessage);
})();