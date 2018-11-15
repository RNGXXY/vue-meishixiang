<template>
    <div class="app-payment">
        <div class="toselectFood"
            v-if = "shopcar.payments.length <= 0"
        >
            <h1>菜篮子空空的，快去添加吧</h1>
        </div>
        <ul class="app-payment-food-list"
            
        >
            <template
                
            >
                <app-payment-item
                    v-for = "item in shopcar.payments"
                    :key = "item.id"
                    :info = "item"
                ></app-payment-item>
            </template>
        </ul>
        <div class="meal-footer">
            <div class="footer-main">  
                <div class="footer-left">
                    <div class="img-box">
                        <img src="/images/cart.png" alt="">
                        <p class="totalCount">{{total.totalCount}}</p>
                    </div>
                </div>
                <div class="footer-center">
                    <h1 class="pay">￥<span>{{total.totalPrice}}</span></h1>
                </div>
                <div class="footer-right"
                   
                >
                    <span class="choseOk">结算</span>
                    <i class="fa fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState , mapMutations , mapActions, mapGetters} from 'vuex'
import { Cell } from 'mint-ui';

import AppPaymentItem from '@c/common/app-payment/AppPaymentItem'
export default {
    components:{
        [Cell.name]: Cell,
        AppPaymentItem
    },
    computed:{
        ...mapState(['shopcar']),
        ...mapGetters({
            total:'shopcar/total'
        })
    },
    beforeRouteEnter(to,from,next){
        let phonenum = JSON.parse(localStorage.getItem('userInfo'))
        next(vm=>{
            if (!phonenum) {
                vm.$router.replace({name:'login'})
            } 
        })
    }
   
}
</script>

<style lang="scss">
    .app-payment{
        .toselectFood{
            height: 2.666667rem;
            line-height: 2.666667rem;
            text-align: center;
            font-size: 16px;
        }
        .app-payment-food-list{
            padding: 0 .266667rem 1.6rem;
            
        }
        .meal-footer{
            height: 1.6rem;
            position: absolute;
            bottom: 0;
            width: 100%;
            background: none repeat scroll 0 0 #000;
            transform: translateY(-60);
            position: fixed;
            .footer-main{
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 .533333rem;
                .footer-left{
                    height: 100%;
                    width: 1.92rem;
                    .img-box{
                        width: 1.92rem;
                        height: 1.92rem;
                        position: relative;
                        top: -0.533333rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        .totalCount{
                            position: absolute;
                            top: .4rem;
                            left: .56rem;
                            text-align: center;
                            width: .8rem;
                            font-size: .426667rem;
                            color: #fff;
                        }
                    }
                }
                .footer-center{
                    flex: 1 1;
                    height: 100%;
                    // font-size: 24px;
                    font-weight: bold;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .footer-right{
                    width: 3.173333rem;
                    height: 1.333333rem;
                    color: #EF7F1D;
                    font-size: .453333rem;
                    font-weight: 700;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 .266667rem;
                    border-left: .053333rem solid  #EF7F1D;
                    .choseOk{
                        margin-right:.266667rem; 
                    }
                }
            }
        }
    }
</style>
