import Vue from 'vue'
import Vuex from 'vuex'

import chunks from './chunks'
import shopcar from './shopcar'

import {saveCityInStorage} from './pluglins'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        chunks,
        shopcar
    },
    // 使用插件 
    plugins:[saveCityInStorage]
})

export default store