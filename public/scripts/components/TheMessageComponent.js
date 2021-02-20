export default {
    props: ['msg', 'socketid'],
    
    template:
    `
    <article class="newmessage" :class="{ 'usermessage' : matchID }">
        <h4>{{msg.message.name}} says:</h4>
        <p>{{msg.message.content}}</p>
    </article>
    `,

    data: function() {

        return {
        matchID: this.socketid == this.msg.id
        }
    }
}