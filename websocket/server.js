const http = require('http');
const io = require('socket.io');

let httpServer = http.createServer((res,req)=>{

})
httpServer.listen(8080);

let wsServer = io.listen(httpServer);

let aSock = [];
wsServer.on('connection',sock=>{
    console.log('1');
    
    aSock.push(sock);
    sock.on('msg',(str,st,se)=>{
        // aSock.forEach(s=>{
        //     if(s !=sock){
            console.log(str);
            
                 sock.emit('msg',str,st,se)
        //     }
        // })
    })
})