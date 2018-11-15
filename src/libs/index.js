import Vue from 'vue'
// vue的swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles，在包里
import 'swiper/dist/css/swiper.css' 

// 引入封装好的数据请求方式axios
import ajax from '@util/axios'

// bus
import bus from '@util/bus'

// cities
import {cities} from '@util/cities'

// mint-ui'图片懒加载
import { Lazyload } from 'mint-ui';

// 引入组件使用的时候Vue.use(xxx)
//Vue.use会全局注册该组件  
Vue.use(VueAwesomeSwiper)
// 将axios挂载到Vue的原型方法上，确保该实例下的所有组件都可以使用这个方法
Vue.use(Lazyload);


Vue.prototype.$http=ajax 
Vue.prototype.$bus = bus
Vue.prototype.$cities = cities