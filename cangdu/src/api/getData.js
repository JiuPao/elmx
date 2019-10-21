import { Request } from '../assets/request'

/*
获取城市
*/
export const guess = data => Request.getData({
    url: `/api/v1/cities`,
    method: 'get',
    data,
})

/*
所选城市
*/
export const cities = (data,id) => Request.getData({
    url: '/api/v1/cities/'+id,
    method: 'get',
    data,
})

/*
搜索地址
*/
export const search = data => Request.getData({
    url: `/api/v1/pois`,
    method: 'get',
    data,
})

/*
经纬度详细定位
*/
export const search2 = (data,geohash) => Request.getData({
    url: '/api/v2/pois/'+geohash,
    method: 'get',
    data,
})

/*
食品分类列表
*/
export const indexentry = data => Request.getData({
    url: '/api/v2/index_entry',
    method: 'get',
    data,
})

/*
获取商铺列表
*/
export const shopping = data => Request.getData({
    url: '/api/shopping/restaurants',
    method: 'get',
    data,
})

/*
搜索餐馆
*/
export const restaurants = data => Request.getData({
    url: '/api/v4/restaurants',
    method: 'get',
    data,
})