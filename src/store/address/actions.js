import { ADD_ADDRESS , GET_ADDRESSLIST } from './mutation-types'
import axios from '@util/axios'

const actions = {
    // 添加数据
    async getAddressListByUser({commit},payload){
        let resData = await axios({
            url:'/cms/api/v1/address/listByUser',
            method:'POST',
            data:payload
        })
        commit({
            type:GET_ADDRESSLIST,
            data : resData
        })
    },

    // 添加数据
    async updataAddressList({commit},payload){
        let resData = await axios({
            url:'/cms/api/v1/address/addAddress',
            method:'POST',
            data:payload
        })
        commit({
            type:ADD_ADDRESS,
            data : resData
        })
    },

    
}

export default actions