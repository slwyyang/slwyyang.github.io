## webSocket 简单使用

服务端安装 socket.io,开启ws服务
```
let httpServer = http.createServer((res,req)=>{

})
httpServer.listen(8080);

let wsServer = io.listen(httpServer);
```
服务端监听用户连接
```
wsServer.on('connection',sock=>{
    
})
```
客户端安装引用socket.io.js包，然后进行链接
```
<script src="xxx/socket.io.js"></script>
//ws://localhost:8080为客户端开启的连接地址
let sock = io.connect('ws://localhost:8080/')
```
客户端和服务端都有emit和on的方法,都是用sock.emit和sock.on进行消息的发送和接收

第一个参相当于方法名字，接收方要与发送方相同才能接收到信息，第二个参数为发送内容

```
sock.emit('msg',value)
sock.on('msg',value=>{
    
})
```

sock.emit可加多个value值
```
sock.emit('msg',value,value2,value3)
sock.on('msg',(value,value2,value3)=>{

})
或
sock.on('msg',(...args)=>{

})
```

服务端和客户端监听连接和断开连接的方法

服务端
```
sock.on('connection',()=>{console.log('已连接')})
sock.on('disconnent',()=>{console.log('已断开')})

//作用:可以对上下线用户进行处理，方便给在线用户发信息
```

客户端
```
sock.on('connect',()=>{console.log('已连接')})
sock.on('disconnent',()=>{console.log('已断开')})

//客户端监听连接的是connect，与服务端不一样，监听断开连接可以对用户操作进行提示，不能发送信息
```

sock.once 第一次接收信息时触发,参数与sock.on一样,适用于客户端和服务端