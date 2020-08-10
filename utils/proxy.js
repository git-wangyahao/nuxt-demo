const onlineIP = "http://182.92.xxx.xxx:8xxx"


//全局变量
let lipeng = "";
if(process.server){
  // 服务端不用走本地代理
  lipeng = process.env.NODE_ENV === "production" ? onlineIP + "/qiantai" : "http://182.92.xxx.xxx:8xxx";
}

if(process.client){
  //客户端走本地代理
  lipeng = process.env.NODE_ENV === "production" ? onlineIP + "/qiantai" : "/test";
}
  
export default {
  lipeng
}