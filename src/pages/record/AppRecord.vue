<template>
    <div class="app-record">
        <ul class="app-record-list">
            <li class="app-record-item"
                v-for="(recordItem,index) in shopcar.consumption"
                :key='index'
            >
                <div class="record-item-title">
                    <h2>{{recordItem.name}}</h2>       
                </div>
                <div class="record-item-info">
                    <p class="record-time">{{recordItem.time | premiere(false) }}</p>
                    <p class="record-price"><span>￥{{recordItem.price}}</span>*<span>{{recordItem.count}}</span></p>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return{
            recordList:[]
        }
    },
    computed:{
        ...mapState(['shopcar'])
    },
    methods:{
        

    },
    beforeCreate(){
        this.$store.dispatch('shopcar/getRecordData')
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
