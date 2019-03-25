const WebSocket=require('ws');
const ws=new WebSocket.Server({port:8080},()=>{
    console.log('ws 服务器启动')
})
let  clients=[] // 保存所有的客户端连接对象
ws.on('connection',(client)=>{
    clients.push(client)
    //client连接的客户端对象 和客户端进行对应
    console.log('客户端连接')
    client.on('message',(msg)=>{
        console.log('客户端发送消息',msg)
        console.log(msg)
        let msgdata=JSON.parse(msg)
        if(msgdata.type=='reword'){
            //要发送中奖消息
            sendAll()
        }
    })
    setTimeout(()=>{
        client.send('欢迎光临')  
    },3000)
    client.on('close',()=>{
        // 客户端断开连接主动的删除
        clients.filter((item)=>{
            if(item===client){
                return false
            }else{
                return true 
            }
        })
        console.log('客户端断开连接')
    })
})

function sendAll(){
    for (let index = 0; index < clients.length; index++) {
        const element = clients[index];
        element.send('恭喜中奖')
        
    } 
}