# slwyyang.github.io
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

## axaj cors跨域

