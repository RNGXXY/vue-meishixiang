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
    plugins:[saveCityInStorage]
})

export default store