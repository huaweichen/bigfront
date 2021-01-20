const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 3000
})

wss.on('connection', (ws) => {
    console.log('one client has been connected')

    ws.on('message', function (msg) {
        console.log('message from client to server: ' + msg)
    })

    ws.send('message from server to client')
})
