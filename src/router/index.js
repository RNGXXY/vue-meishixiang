// 1、引入Vue
import Vue from 'vue'
// 2、引入路由工具
import VueRouter from 'vue-router'

// 3、全局注册
Vue.use(VueRouter)

// 7、引入路由组件
import AppHome from '@pages/home/AppHome'
import AppOrder from '@pages/order/AppOrder'
import AppMine from '@pages/mine/AppMine'
import AppNotFound from '@pages/not-found/AppNotFound'
import AppMeal from '@pages/meal/AppMeal'


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
        path:'/order',
        name:'order',
        component:AppOrder    
    },
    {
        path:'/mine',
        name:'mine',
        component:AppMine    
    },
    {
        path:'/meal',
        name:'meal',
        component:AppMeal    
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