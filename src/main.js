// 入口文件
import Vue from 'vue'
import App from './App.vue' 
// 引入全局样式scss
import '@styles/main.scss'
// 引入flexible,做移动端适配
import '@libs/flexible' 
// 引入外来组件(轮播图)，都在libs里的index里
import '@libs'
// 引入路由工具
import router from './router'

// 控制那个小绿不要亮  
// Vue.config.devtools = 'false'
// 去掉vue默认在config输出的那两行 
Vue.config.productionTip = false
 
// 根实例 
new Vue({
  //控制往根组件App里放什么东西，在根实例里render函数渲染根组件 
  // 任何一个项目需要一个根实例，根实例需要一个根组件
  router,   // 将router挂载到根实例，从此任何组件都可以使用到$router （路由工具） ,$route (路由属性)
  render: h => h(App)

  // render:(createElement)=>{
  //   return createElement(App)
  // }
}).$mount('#app')




//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG



