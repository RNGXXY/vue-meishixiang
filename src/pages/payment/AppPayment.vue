<template>
    <div>
        <div class="app-payment">
            <div class="toselectFood"
                v-if = "shopcar.payments.length <= 0"
            >
                <h1>菜篮子空空的，快去添加吧</h1>
            </div>
            <ul class="app-payment-food-list">
                <app-payment-item
                    v-for = "item in shopcar.payments"
                    :key = "item.id"
                    :info = "item"
                ></app-payment-item>
            
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
                        <!-- @click="isPay=true" -->

                    <div class="footer-right"
                        @click="handleAddressSelect"
                    >
                        <span class="choseOk">结算</span>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <mt-popup
                style="width:100%"
                v-model="popupVisible"
                position="bottom">
                <div v-if="addressList.length">
                    <div class="regionHeader">
                        <p>已选择：{{addressContent}}</p>
                        <i class="fa fa-check" @click="onClosePicker"></i>
                    </div>
                    <div class="regionContent" >
                        <app-picker-pay 
                            :addressList = "addressList"
                            :onHandleAddressSelect="onHandleAddressSelect">
                        </app-picker-pay>
                    </div>
                </div>
                <div v-else>
                    <router-link class="emptyAddress" tag = "div" to="/addressAdd"><p>没有收货地址，点击进行添加</p></router-link>
                </div>
            </mt-popup>
        </div>
        <app-pay-page  v-if="isPay" :payPrice = total.totalPrice :handlePayPage='handlePayPage'></app-pay-page>
    </div>
</template>

<script>
import { mapState , mapMutations , mapActions, mapGetters} from 'vuex'
import { Cell , Popup , Toast} from 'mint-ui';

import AppPaymentItem from '@c/common/app-payment/AppPaymentItem'
import AppPayPage from './payPage'
import AppPickerPay from '@c/common/app-picker/AppPickerPay'

export default {
     data(){
        return{
            isPay:false,
            payOver:false,
            popupVisible:false,
            addressList:[],
            addressContent:''
        }
    },
    components:{
        [Cell.name]: Cell,
        [Popup.name]:Popup,
        AppPaymentItem,
        AppPayPage,
        AppPickerPay
    },
    computed:{
        ...mapState(['shopcar','address']),
        ...mapGetters({
            total:'shopcar/total'
        }),
    },
    methods:{
        ...mapActions({
            settleAccounts:'shopcar/settleAccounts',
            getAddressListByUser:'address/getAddressListByUser'
        }),
        onClosePicker(){
            this.popupVisible = !this.popupVisible
            this.isPay = true
        },
        payOff(){
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            this.settleAccounts({
                time:Date.now(),
                userId:userInfo._id,
                userName:userInfo.userName,
                addressContent:this.addressContent
                // 传参通过对象的形式传
                // payload({
                //     type:ssss,
                //     time:xxxxxx
                // })
            })
            // instance就是那个小弹框，从mt-ui里来的
            if (this.instance) this.instance.close()
            this.instance = Toast({
                message: '结算成功，外卖即将派送，请注意接收',
                iconClass: 'fa fa-check'
            });
            setTimeout(() => {
                this.instance.close();
            }, 2000);
        },
        async handleAddressSelect(){
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            await this.getAddressListByUser({
                userId:userInfo._id
            })
            this.addressList=[]
            this.address.addressList.forEach(item=>{
                item.content = item.cityName+'-'+item.areaName+'-'+item.detailedAddress
                this.addressList.push(item)
            })
            this.addressContent = this.addressList.length?this.addressList[0].content:''
            this.popupVisible=true
        },
        handlePayPage(){
            this.isPay = !this.isPay
            this.payOver = true
            if(this.payOff){
                this.payOff()
            }
        },
        onHandleAddressSelect(data){
            this.addressContent = data
        }
    },
    created(){
        
    },
    // 组件内的守卫
    beforeRouteEnter(to,from,next){
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        let phonenum = JSON.parse(localStorage.getItem('userInfo'))
        next(vm=>{
            if (!phonenum) {
                vm.$router.replace({name:'login'})
            } 
        })
    },
    beforeDestroy () {
        if (this.instance) this.instance.close() // 切换路由的时候，关掉框框
    },
   
}
</script>

<style lang="scss" scoped>
    .app-payment{
        height: 100%;
        padding-bottom: 1.6rem;
        overflow: auto;
        .toselectFood{
            height: 2.666667rem;
            line-height: 2.666667rem;
            text-align: center;
            font-size: 16px;
        }
        .app-payment-food-list{
            height: 100%;
            padding: 0 .266667rem ;
            
        }
        .meal-footer{
            height: 1.6rem;
            position: fixed;
            bottom: 0;
            width: 100%;
            background: none repeat scroll 0 0 #000;
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
    .regionHeader{
        height: 45px;
        width: 100%;
        border-bottom: 1px solid #ff8600;
        display: flex;
        align-items: center;
        font-size: 16px;
        p{
            flex:1;
        }
        i{
            width:30px;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .emptyAddress{
        height: 2.666667rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
</style>
