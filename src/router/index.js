// 1、引入Vue
import Vue from 'vue'
// 2、引入路由工具
import VueRouter from 'vue-router'
// 3、判断是否已经登录
import auth from '@util/auth'

// 3、全局注册
Vue.use(VueRouter)

// 7、引入路由组件
import AppHome from '@pages/home/AppHome'
import AppOrder from '@pages/order/AppOrder'
import AppMine from '@pages/mine/AppMine'
import AppNotFound from '@pages/not-found/AppNotFound'
import AppMeal from '@pages/meal/AppMeal'
import AppPayment from '@pages/payment/AppPayment'
import AppLogin from '@pages/login/AppLogin'
import AppCity from '@pages/cities/AppCity' 
import AppRecord from '@pages/record/AppRecord'  
 
// 4、路由表
const routes= [
//    8、配置路由表
    {
        path:'/',                   
        redirect : {name:'home'}      //路由重定向
    },
    {
        path:'/home',
        name:'home',                //命名路由
        component:AppHome           //对应的组件

    },
    {
        path:'/order/:url',    //路由组件传参
        name:'order',
        component:AppOrder,
        props:true    
    },
    {
        path:'/mine',
        name:'mine',
        component:AppMine,
        beforeEnter:(to,from,next)=>{
            let res = auth.authLogin()
            next(res.phone ? true : { name:'login' })
        }

    },
    {
        path:'/meal/:id',
        name:'meal',
        component:AppMeal,
        props:true    
    },
    {
        path: '/payment',
        name: 'payment',
        component: AppPayment 
    },
    {
        path: '/rerord',
        name: 'rerord',
        component: AppRecord 
    },
    {
        path:'/login',
        name:'login',
        component:AppLogin    
    },
    {
        path:'/cities',
        name:'cities',
        component:AppCity    
    },
    {
        path:'/not-found',
        name:'not-found',
        component:AppNotFound    
    },
    {
        path:'**',
        redirect : {name:'not-found'}  
    }
]

// 5、实例化路由工具
const router  = new VueRouter({
    // 1、选择路由模式
    mode:'history',
    // 2、引入路由表
    routes
})


// 6、暴露路由工具
export default router