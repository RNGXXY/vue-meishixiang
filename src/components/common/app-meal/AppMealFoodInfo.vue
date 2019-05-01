<template>
    <div class="app-food-info">
         <li class="meal-right-item ">
            <div class="add-meal-food-item-info">
                <div class="meal-right-item-img">
                    <div class="img-box">
                        <img :src = '`http://localhost:3000${item.imgLogo}`' alt="">
                    </div>
                </div>
                <div class="meal-right-item-conent">
                    <p class="conent-name">{{item.dishName}}</p>
                    <p class="conent-price">￥<span>{{item.dishPrice}}</span></p>
                    <div class="item-order" v-if="item.dishNum >0">
                       <div class="sub" @click = "count--">
                            <i class="fa fa-minus-circle"></i>
                        </div>
                        <!-- <span>选套餐</span> -->
                        <span class="counts" ref='num'>{{count}}</span>
                        
                         <div class="add" @click = "count++">
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="item-order" v-if="item.dishNum <= 0">
                       <p style="text-align:center">么得了~~</p>
                    </div>
                    <div class="addcar" >
                        <mt-button type="danger" size="small" @click.native="addGoodsHandler">加入菜篮子</mt-button>
                    </div>
                </div>
            </div>
        </li>
    </div>
</template>


<script>
import { Button , Toast  } from 'mint-ui';
// Button使用的时候需要注册，Toast不需要，具体看文档
import { mapState , mapMutations , mapActions } from 'vuex'
import { UPDATE_CAR_GOODS } from '@/store/shopcar/mutation-types'
export default {
    components:{
        [Button.name] : Button
    },
    props:['item','id','shopName'],
    methods:{
        // ...mapMutations({
        //     addGoods:'shopcar/' + UPDATE_CAR_GOODS
        // }),
        ...mapActions({
            addGoods:'shopcar/addGoods'
        }),
        addGoodsHandler(){
            let { _id : id , dishName:name }  = this.item
            let price = this.item.dishPrice
            let shopId = this.id
            let shopName = this.shopName
            let imgUrl = this.item.imgLogo
            this.addGoods({ id,name,price,count:this.count,imgUrl,shopId,shopName})
            this.count = 1
            // 如果已经有一个了，就上一个关掉（拉了一次又拉了一次）
            if (this.instance) this.instance.close()
            this.instance = Toast({
                message: '加入成功',
                iconClass: 'fa fa-check'
            });
            setTimeout(() => {
                this.instance.close();
            }, 1000);
        }
    },
    data(){
        return {
            count:1
        }
    },
    watch:{
        count(){
            if(this.count<=1){
                this.count=1;
            }
        }
    },
    beforeDestroy () {
        if (this.instance) this.instance.close() // 切换路由的时候，关掉框框
    },
}
</script>


<style lang="scss">
    .app-food-info{
        .meal-right-item{
            border: 1px solid #e1e1e1;
            box-shadow: 0 0 5px #888888;
            border-radius: 40px;
            height: 160px;
            padding: .32rem;
            margin: .266667rem 0;
        
            width:100%;
            .add-meal-food-item-info{
                display: flex;
                align-items: center;
                height: 100%;
                .meal-right-item-img{
                    width: 50%;
                    height: 100%;
                    border-right: 2px solid #EF7F1D;
                    .img-box{
                        width: 3.066667rem;
                        height: 100%;
                        img{
                            width: 100%;  
                        }
                    }
                }
                .meal-right-item-conent{
                    height: 100%;;
                    flex: 1 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: flex-end;
                    font-size: 16px;
                    .item-order{
                        height: .8rem;
                        width: 2.4rem;
                        padding: .053333rem;
                        color: #FFF;
                        font-size: .346667rem;
                        border: #EF7F1D .053333rem solid;
                        background: #EF7F1D;
                        font-size: .346667rem;
                        border-radius: .32rem;
                        float: right;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        i{
                            font-size: .533333rem;
                        }
                    }
                    .addcar{
                            

                        mt-butto{
                            color: #EF7F1D !important;
                        }
                        
                    }
                }
            }
            
        }
    }
</style>
