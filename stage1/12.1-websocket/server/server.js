const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 3000
})

wss.on('connection', (ws) => {
    console.log('one client has been connected')
    ws.on('message', function (msg) {
        console.log('message from client to server: ' + msg)

        // broadcast to each client apart from self
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN && ws !== client) {
                client.send(msg);
            }
        });
    })
})
