const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client.html')
})

io.on('connection', function (socket) {
    console.log('socket is connected')
    socket.on('chatEvent', function (msg) {
        console.log(msg)
        // socket.send('server send back: ' + msg)
        socket.broadcast.emit('serverBroadcast', 'server send back: ' + msg); // everyone gets it but the sender
    })
})

http.listen(3000, function () {
    console.log('server is running on: 3000')
})
