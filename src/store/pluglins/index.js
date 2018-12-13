import { CHANGE_CITY } from '../chunks/muntation-types'

// Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。
// Vuex 插件就是一个函数，它接收 store 作为唯一参数：
const saveCityInStorage = (store)=>{
    // 当 store 初始化后调用
    store.subscribe((mutations,state)=>{
        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }

        // 在插件中不允许直接修改状态——类似于组件，只能通过提交 mutation 来触发变化。
        // 通过提交 mutation，插件可以用来同步数据源到 store。
        if (mutations.type === 'chunks/'+ CHANGE_CITY) {
            if (mutations.payload.cities) localStorage.cities = JSON.stringify(mutations.payload.cities);
            localStorage.city = JSON.stringify(mutations.payload.city)
        }
    })
}

export { saveCityInStorage }  