<template>
    <div class="app-record">
        <ul class="app-record-list">
            <li class="app-record-item"
                v-for="(recordItem,index) in recordList"
                :key='index'
            >
                <div class="record-item-title">
                    <h2>{{recordItem.name}}</h2>       
                </div>
                <div class="record-item-info">
                    <p class="record-time">{{recordItem.orderTime}}</p>
                    <p class="record-price"><span>￥{{recordItem.price}}</span>*<span>{{recordItem.count}}</span></p>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            recordList:[]
        }
    },
    computed:{
        ...mapState(['shopcar'])
    },
    // 上来先获取之前的消费记录，渲染出来，数据存在数据库当中的
    async beforeCreate(){
        this.$store.dispatch('shopcar/getRecordData')
        let resData = await this.$http({
            url:'/cms/api/v1/orderList/listByUser',
            method:'POST',
            data:{
                userId:JSON.parse(localStorage.getItem('userInfo'))._id
            }
        })
        let orderArr = []
        resData.forEach((item,index)=>{
            item.orderContent.forEach(orderItem=>{
                orderItem.orderTime = item.orderTime
                orderArr.push(orderItem)
            })
        })
        this.recordList = orderArr
    },

}
</script>

<style lang="scss">
    .app-record{
        .app-record-list{
            .app-record-item{
                height: 2.666667rem;
                border-bottom: .026667rem solid #ddd;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 0 .266667rem;
                .record-item-title{
                    font-size: 18px;
                }
                .record-item-info{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
