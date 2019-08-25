//开启进程
const cluster=requrie('cluster')
const os = require('os')
const process = require('process')
//只有主进程才成开子进程
if(cluster.isMaster){
    //os.cpus 电脑cpu数，有多少cpu开多少线程，性能最高
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
        
    }
}else{
    //查看进程ID
    console.log(proccess.pid);
    
}