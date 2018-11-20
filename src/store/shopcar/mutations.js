import _ from 'lodash'

import { UPDATE_CAR_GOODS , SETTLE_ACCOUNTS } from './mutation-types'

const mutations = {
    // 订单
    [UPDATE_CAR_GOODS](state,payload){
        state.payments = _.cloneDeep(payload.payments)
    },
    // 消费记录
    [SETTLE_ACCOUNTS](state,payload){
        state.consumption = _.cloneDeep(payload.currentConsumption)
    }
}

export default mutations