import { GET_ADDRESSLIST , GET_ADDRESSONE ,  ADD_ADDRESS , REMOVE_ADDRESSLIST , UPDATE_ADDRESSLIST } from './mutation-types'

const mutations = {
    [GET_ADDRESSLIST](state,payload){
        let newArr = payload.data
        payload.data.some(item=>{
            if(item.isDefault){
                newArr = newArr.filter(newItem=>newItem.isDefault == false)
                newArr.unshift(item)
                return true
            }
        })
        state.addressList = newArr
    },

    // 增加订单
    [ADD_ADDRESS](state,payload){
        state.addressList.unshift(payload.data)
    },
    
}

export default mutations