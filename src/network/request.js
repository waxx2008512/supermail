import axios from 'axios'
export function request(config) {
    //1、创建axios的实例
    const instance = new axios.create({
        baseURL: 'http://152.136.185.210:8000/api/h8',
        timeout: 5000
    })
    //2、axios拦截器
    instance.interceptors.request.use(config => {
        //1、当config的一些信息不符合服务器的要求，要做修改
        //2、比如每次发送请求时，希望在界面显示一些图标
        //3、某些网络请求必须携带一些特殊信息（登录：token）
        return config
    }, err => {
        Console.log(err)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}