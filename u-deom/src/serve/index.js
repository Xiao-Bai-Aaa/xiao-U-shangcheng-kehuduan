import {
    getData,
    postData
} from "./config.js"
//登录
export const reqLogin = (params) => { return postData('/api/login', params) }


// 1.-----------------------------首页-------------------------------
//获取轮播图
export const reqBanner = (params) => { return getData('/api/getbanner', params) }
//获取首页商品分类
export const reqCates = (params) => { return getData('/api/getcates', params) }
//获取首页商品秒杀
export const reqSekill = (params) => { return getData('/api/getseckill', params) }
//获取首页商品推荐
export const reqHortGoods = (params) => { return getData('/api/gethortgoods', params) }


// 2.-----------------------------分类-------------------------------
//获取分类












// 2.-----------------------------get-------------------------------
export const get = (params) => { return getData('', params) }