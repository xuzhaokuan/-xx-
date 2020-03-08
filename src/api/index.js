import axios from 'axios'

let service = axios.create({
    baseURL:'/api',   //所有的请求都会带上/api
    "content-type":'application/json',
    timeout:5000   //超时选项
})
//请求拦截器
service.interceptors.request.use((config)=>{  
    // if(sessionStorage.getItem('token')){
    //     config.headers['token']=sessionStorage.getItem('token')
    // }
    return config;
})

//响应拦截器
service.interceptors.response.use((res)=>{
    // console.log(res)
    // if(res.data.status===-1){  //token验证失败了
    //     // 跳转到登录页面
    //     console.log(1)
    //     window.location.href='/login'
        
    // }
    return res
})

export default service;