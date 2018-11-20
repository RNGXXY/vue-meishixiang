import { UPDATE_CAR_GOODS ,SETTLE_ACCOUNTS } from './mutation-types'
import api from '@util/api'


const actions = {
    // 添加数据
    async addGoods({commit},payload){
        let res = await api.addGoods(payload)
        if (res.status === 200) {
            commit({
                type:UPDATE_CAR_GOODS,
                payments : res.payments
            })
        }
    },

    // 初始化数据
    async initGeetInfo({commit}){
        let res = await api.getGoods()
        if (res.status === 200) {
            commit({
                type:UPDATE_CAR_GOODS,
                payments : res.payments
            })
        }
    },

    // 改变数量
    async changeGoodsCount({commit},payload){
        let res = await api.updateGoodsCount(payload)
        if(res.status === 200){
            commit({
                type:UPDATE_CAR_GOODS,
                payments : res.payments
            })
        }
    },

    // 结算
    async settleAccounts({commit},payload){
        let res = await api.settleAccounts(payload)
        if(res.status === 200){
            commit({
                type:SETTLE_ACCOUNTS,
                currentConsumption : res.currentConsumption
            })
            commit({
                type:UPDATE_CAR_GOODS,
                payments :  res.payments
            })
        }
    },

    // 获取消费记录数据
    async getRecordData({commit}){
        let res = await api.getSettleAccounts()
        if(res.status === 200){
            commit({
                type:SETTLE_ACCOUNTS,
                currentConsumption : res.currentConsumption
            })
        }
    }
}

export default actions