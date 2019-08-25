//先引用http模块，使用http api
const http=require('http')
//createServer 开启服务
//req - request 请求 接收的数据（客户端传过来的）
//res - response 请求 接收的数据（服务端传过来的）
let server = http.createServer((req,res)=>{
    //返回数据以res.write开始，res.end结束
    res.write('success9999999999')
    res.end()
    
})
//默认80
server.listen(8080)