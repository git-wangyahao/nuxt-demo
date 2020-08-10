import axios from "axios";// 创建一个axios实例
const service = axios.create({
    baseURL: "http://mengxuegu.com:7300/mock/5e96c2c62a2f716419f88ac4/example", // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000, // request timeout 10s
});

// 请求拦截器
service.interceptors.request.use(config => {
    // do something before request is sent
    return config;
},error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response => {
    //do something before response
    if (response.status >= 200 && response.status <= 210) {
        return response.data;
    } else if(response.status == 404){
        console.error(response.data.errmsg);
    }else{
        // 不走
    }
},
error => {
    console.log('err' + error); // for debugreturn Promise.reject(error);
})

export default service;