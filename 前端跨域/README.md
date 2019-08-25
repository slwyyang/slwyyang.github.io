# 前端跨域
## jsonp跨域
### 使用方法：使用script标签，src引用跨域链接
demo(引用百度搜索引擎，用li在页面显示)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=sr, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        function show(json) {
            let oUL = document.getElementById('oul')
            oUL.innerHTML=''
            json.s.forEach(element => {
                let oli = document.createElement('li')
                oli.innerHTML=element
                oUL.appendChild(oli)
            })
        }
        window.onload=function(){
            let oTxt = document.getElementById('txt')
            oTxt.oninput=function(){
                let oS = document.createElement('script')
                oS.src = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${oTxt.value}&cb=show`
                document.head.appendChild(oS)
            }
        }
    </script>
</head>
<body>
    <input type="text" id='txt'>
    <ul id="oul"></ul>
</body>
</html>
```
### 缺点
现在jsonp越用越少，主要因其安全性问题，请求接口过于开放（完全开放），导致所有网站都能调用

## document.domain + iframe (只有在主域相同的时候才能使用该方法)
demo
1) 在www.a.com/a.html中：
```
document.domain = 'a.com';
var ifr = document.createElement('iframe');
ifr.src = 'http://www.script.a.com/b.html';
ifr.display = none;
document.body.appendChild(ifr);
ifr.onload = function(){
    var doc = ifr.contentDocument || ifr.contentWindow.document;
    //在这里操作doc，也就是b.html
    ifr.onload = null;
};
```
2) 在www.script.a.com/b.html中：
```
document.domain = 'a.com';
```

## axaj cors跨域

后端接口返回response Herder:"Access-ontrol-Alow-Origin":"*"
res.setHeader('Access-ontrol-Alow-Origin','*') --node

Access-ontrol-Alow-Origin,设置为*表示所有网站都可以访问，设置为某个域名时，只有该域名下的网页可以访问。
多域名时，Access-ontrol-Alow-Origin对应值不能以逗号分开来设置，而设置为*又不安全，所以一般先判断请求头中的origin，查看当前网站下的域名是否允许其跨域。可以请求的域名用数组储存，判断请求头中的origin的值是否在改数组下，或者用正则判断。
注：前端开发时，若是直接以打开文件的方式请求，origin值为null,
若以端口形式请求，origin值为http://localhost:XXXX,

demo -- node下开启的后端服务
```
const http=require('http')
let server = http.createServer((req,res)=>{
    
    const webOrigin = req.headers['origin']
    //if(webOrigin == 'null' || /^https?:\/\/(\w+\.)+xxx\.com/.test(webOrigin))
    if(webOrigin == 'null' || webOrigin.startWith('http://localhost)){
        res.setHeader('Access-ontrol-Alow-Origin','*')
    }
    
    
    //const webOriginArr = ['null','http://localhost:8080',//'https:abc.com']
   
    if(webOriginArr.indexOf(webOrigin) !== -1){
    //    res.setHeader('Access-ontrol-Alow-Origin','*')
    //}



    res.write('success')
    res.end()
    
})
//默认80
server.listen(8080)
```

## WebSocket协议跨域
WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。(直接使用，无需解决跨域问题)

## 本地开发情况下，前端可以用prox代理来解决跨域问题

https://www.cnblogs.com/dujunfeng/p/8004273.html
https://www.jianshu.com/p/8876dfa56668
