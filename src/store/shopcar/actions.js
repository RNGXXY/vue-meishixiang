import { UPDATE_CAR_GOODS } from './mutation-types'
import api from '@util/api'


const actions = {
    async addGoods({commit},payload){
        let res = await api.addGoods(payload)
        if (res.status === 200) {
            commit({
                type:UPDATE_CAR_GOODS,
                payments : res.payments
            })
        }
    },

    async initGeetInfo({commit}){
        let res = await api.getGoods()
        if (res.status === 200) {
            commit({
                type:UPDATE_CAR_GOODS,
                payments : res.payments
            })
        }
    },

    async changeGoodsCount({commit},payload){
        let res = await api.updateGoodsCount(payload)
        if(res.status === 200){
            commit({
                type:UPDATE_CAR_GOODS,
                payments : res.payments
            })
        }
    }
}

export default actions