const wsc = require('ws');

let gameWebSocketClient = new wsc.WebSocket('ws://127.0.0.1:9149');

const id = process.argv[2]
const nick = process.argv[3] || "";

console.log("Sending 'activate-specific-effect' with id: " + id);

gameWebSocketClient.on('open', () => {

    gameWebSocketClient.on('message', async (data) =>{
        const msg = data.toString();
		console.log(msg);
    });

    gameWebSocketClient.send(JSON.stringify({ 
        type: "activate-specific-effect", 
        index: parseInt(id),
        cause: nick
    }), (err)=> {
        if(err) {
            console.error(err);
        } else {
            gameWebSocketClient.close();
        }
    });    
});

