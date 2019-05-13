<template>
    <div class="waitReceivingWrap">
        <div
            v-if="receiveList.length"
            class="waitReceivingWrapList">
            <div 
                v-for="(item,index) in receiveList" 
                :key="index" 
                class="waitReceivingWrapItem">
                <div class="waitReceivingWrapContent">
                    <div class="itemList">
                        <div
                            v-for="(nItem,nIndex) in item.orderContent" 
                            :key="nIndex" 
                            class="itemItem">
                            <p>{{nItem.name}}</p>
                            <p>￥{{nItem.price}} x {{nItem.count}}</p>
                        </div>
                    </div>
                </div>
                <div class="waitReceivingWrapBtn">
                    <mt-button type="danger" size="small" @click.native="enSureExit(item._id)">取消订单</mt-button>
                    <mt-button type="primary" size="small" @click.native="enSureReceive(item._id)">确认收货</mt-button>
                </div>
            </div>
        </div>
        <div v-else>
            <img src="/images/empty.jpg"/>
        </div>
    </div>
</template>

<script>
import { Button } from 'mint-ui';
export default {
    components:{
        [Button.name]:Button,
    },
    data(){
        return {
            receiveList:[]
        }
    },
    methods:{
        async enSureReceive(_id){
            let resData = await this.$http({
                url:'/cms/api/v1/orderList/update',
                method:'POST',
                data:{
                    _id,
                    isReceive:true
                }
            })
            if(resData.ok == 1){
                this.receiveList = this.receiveList.filter(item=>item._id != _id)
            }
        },
        async enSureExit(_id){
            let resData = await this.$http({
                url:'/cms/api/v1/orderList/remove',
                method:'DELETE',
                data:{
                    _id
                }
            })
            if(resData.ok == 1){
                this.receiveList = this.receiveList.filter(item=>item._id != _id)
            }
        }
    },
    async created(){
        let resData = await this.$http({
            url:'/cms/api/v1/orderList/listByUser',
            method:'POST',
            data:{
                userId:JSON.parse(localStorage.getItem('userInfo'))._id
            }
        })
        this.receiveList = resData.filter(item=>item.isReceive == false)
    }
}
</script>

<style lang="scss" scoped>
    .waitReceivingWrap{
        .waitReceivingWrapList{
            .waitReceivingWrapItem{
                padding: .266667rem;
                border-bottom:.026667rem solid;
                .waitReceivingWrapContent{
                    .itemList{
                        margin-bottom: .266667rem;
                        .itemItem{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                }
                .waitReceivingWrapBtn{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
