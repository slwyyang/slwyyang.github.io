const express = require('express') // 主体
const body = require('body-parser') //接收普通POST数据
const multer = require('multer')  //接收文件OST数据

let server = express();
server.listen('8080');
server.use(body.urlencoded({extended:false}))
let multerObj = multer({dest:'./upload/'})

server.get('/api',(req,res)=>{
    res.send('OK')
})

server.use(express.static('./www'));