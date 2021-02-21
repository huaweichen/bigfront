const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3000 })
// const jwt = require('jsonwebtoken')

const timeInterval = 30000
// 多聊天室的功能
// roomid -> 对应相同的roomid进行广播消息
let group = {}

wss.on('connection', function connection (ws) {
  // 初始的心跳连接状态
  ws.isAlive = true

  console.log('one client is connected');
  // 接收客户端的消息
  ws.on('message', function(msg) {
    const msgObj = JSON.parse(msg)
    if (msgObj.event === 'enter') {
      ws.name = msgObj.message
      ws.roomid = msgObj.roomid
      if (typeof group[ws.roomid] === 'undefined') {
        group[ws.roomid] = 1
      } else {
        group[ws.roomid] ++
      }
    }
    // // 鉴权
    // if (msgObj.event === 'auth') {
    //   jwt.verify(msgObj.message, 'secret', (err, decode) => {
    //     if (err) {
    //       // websocket返回前台鉴权失败消息
    //       ws.send(JSON.stringify({
    //         event: 'noauth',
    //         message: 'please auth again'
    //       })) 
    //       console.log('auth error');
    //       return
    //     } else {
    //       // 鉴权通过
    //       console.log(decode);
    //       ws.isAuth = true
    //       return 
    //     }
    //   })
    //   return
    // }
    // // 拦截非鉴权的请求
    // if (!ws.isAuth) {
    //   return
    // }
    // 心跳检测
    if (msgObj.event === 'heartbeat' && msgObj.message === 'pong') {
      ws.isAlive = true
      return
    }

    // 主动发送消息给客户端
    // ws.send('server:' + msg)
    // 广播消息
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      if (client.readyState === WebSocket.OPEN && client.roomid === ws.roomid) {
        msgObj.name = ws.name
        msgObj.num = group[ws.roomid]
        client.send(JSON.stringify(msgObj))
      }
    })
  })

  // 当ws客户端断开链接的时候
  ws.on('close', function() {
    if (ws.name) {
      group[ws.roomid] --
    }
    let msgObj = {}
    // 广播消息
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      if (client.readyState === WebSocket.OPEN && ws.roomid === client.roomid) {
        msgObj.name = ws.name
        msgObj.num = group[ws.roomid]
        msgObj.event = 'out'
        client.send(JSON.stringify(msgObj))
      }
    })
  })
})

setInterval(()=> {
  wss.clients.forEach((ws) => {
    if (!ws.isAlive && ws.roomid) {
      group[ws.roomid] --  
      delete ws['roomid']
      return ws.terminate()
    }
    // 主动发送心跳检测请求
    // 当客户端返回了消息之后，主动设置flag为在线
    ws.isAlive = false
    ws.send(JSON.stringify({
      event: 'heartbeat',
      message: 'ping',
      num: group[ws.roomid]
    }))
  })
}, timeInterval)