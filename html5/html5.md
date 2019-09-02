## 介绍一些你可能不知道的HTML5

### geolocation -- 定位
如app弹出提示，是否允许定位等功能

1.原理：

    PC端：IP地址 （IP地址不准，导致定位错误） 精度差
    移动端：GPS   精度高

2.使用

    调用window.navigator.geolacation/navigator.geolacation

    geolacation下有3个方法

    getCurrentPosition  获取位置（一次）

    ```
    window.navigator.geolocation.getCurrentPosition(function (res){
        console.log('成功',res)
        //位置信息在res.coords里面
    },function(re){
        console.log('失败')
    })
    ```

    watchPosition       不断获取位置（如在导航中使用）

    clearWatch          关闭


### localStorage

localStorage:特点，储存大（5M，一个域名下），浏览器独享，服务器不能访问（可以用来存草稿，或防止浏览器崩溃，经行数据恢复）

localStorage.xxx = xx 存

localStorage.xxx 访问

delete localStorage.xxx 删


### WebWorker-web多进程（简单介绍，使用率低）

多进程一般用于处理复杂计算，而前台一般不需要处理复杂计算，所以现在基本没用

主进程-UI进程

子进程-工作进程

```
demo
index.html

<script>
    let oW = new Worker('1.js')
    oW.postMessage({n1:25,n2:99})
    ow.onmessage=function(ev){
        consolse.log(ev.data)
    }
</script>

1.js

this.onmessage=function(ev){
    let { n1,n2 } = ev.data
    let result = n1+n2
    this.postMessage(result)
}
```

原理：通过new Worker('js文件')创建一个子进程，主/子进程通过postMessage发送消息，主/子进程通过onmessage接受信息

### 画图

canvas（位图-放大失真） 

SVG（矢量图-无限缩放 不是html5东西，是一个独立标准）

VML (矢量图-无限缩放 IE的矢量图）


