import axios from './index'    //进行了二次封装


export const login =()=>{
    return axios.get('/homeApi')
} 
export const login1=(phone,captcha)=>{
    return axios.post('login_code',{
        phone,
        captcha
    })
}
export const login2=(phone,captcha)=>{
    return axios.post('/login_code',{params:{phone,captcha}})
}
export const getSpecial=()=>{
    return axios.get('/homeApi/specialZone')
}

export const getCategory=()=>{
   return axios.get('homeApi/categories')
}

export const categoriesDetail=(params)=>{
    return axios.get('homeApi/categoriesdetail'+params)
}

export const goodsDetail=(id)=>{
    return axios.get()
}

export const getGuessYouLike=()=>{
    return axios.get('cart/youlike')
}

export const getCaptcha=(phonenumber)=>{
    return axios.get('/send_code',{params:{phonenumber}})
}