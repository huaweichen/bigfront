const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 3000
})

wss.on('connection', (ws) => {
    console.log('One client connected')
    ws.on('message', function (msg) {

    })
})
