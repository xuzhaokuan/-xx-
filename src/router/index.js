
import React, { Component } from 'react'
import loadable from 'react-loadable'
let Home=loadable({
    loader:()=>import('../component/home'),
    loading:()=><div>loading</div>
})

let Category=loadable({
    loader:()=>import('../component/category'),
    loading:()=><div>loading</div>
})

let Eat=loadable({
    loader:()=>import('../component/eat'),
    loading:()=><div>loading</div>
})

let Cart=loadable({
    loader:()=>import('../component/cart'),
    loading:()=><div>loading</div>
})

let Mine=loadable({
    loader:()=>import('../component/login'),
    loading:()=><div>loading</div>
})

let NotFound=loadable({
    loader:()=>import('../component/404'),
    loading:()=><div>loading</div>
})

let Detail=loadable({
    loader:()=>import('../component/detailgoods'),
    loading:()=><div>loading</div>
})

export const routes =[{
    path:'/home',
    component:Home
},{
    path:'/category',
    component:Category
},{
    path:'/eat',
    component:Eat
},{
    path:'/cart',
    component:Cart
},{
    path:'/mine',
    component:Mine
},{
    path:'/404',
    component:NotFound
}]

export const subRoutes =[{
    path:'/detail',
    component:Detail
}]