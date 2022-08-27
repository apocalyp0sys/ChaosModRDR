const wsc = require('ws');

let gameWebSocketClient = new wsc.WebSocket('ws://127.0.0.1:9149');

const nick = process.argv[2] || "";

console.log("Sending 'activate-random-effect'");

gameWebSocketClient.on('open', () => {

    gameWebSocketClient.on('message', async (data) =>{
        const msg = data.toString();
		console.log(msg);
    });

    gameWebSocketClient.send(JSON.stringify({ 
        type: "activate-random-effect", 
        cause: nick
    }), (err)=> {
        if(err) {
            console.error(err);
        } else {
            gameWebSocketClient.close();
        }
    });    
});

