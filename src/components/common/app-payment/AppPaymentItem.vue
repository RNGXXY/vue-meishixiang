<template>
    <div class="add-payment-item">
        <li class="meal-right-item ">
            <div class="meal-right-item-img">
                <div class="img-box">
                    <img :src = '`http://localhost:3000${info.imgUrl}`' alt="">
                </div>
            </div>
            <div class="meal-right-item-conent">
                <p class="conent-name">{{info.name}}</p>
                <p class="conent-price">￥<span>{{info.price}}</span></p>
                <div class="item-order">
                    <div class="sub" @click="changeCount(-1)">
                        <i class="fa fa-minus-circle"></i>
                    </div>
                    <span class="counts" ref='count'>{{info.count}}</span>
                    <div class="add" @click="changeCount(1)">
                        <i class="fa fa-plus-circle"></i>
                    </div>
                </div>
            </div>  
        </li>
    </div>
</template>

<script>
import { mapState , mapMutations , mapActions} from 'vuex'
import { Toast } from 'mint-ui';
export default {
    props:['info'],
 
    methods:{
        ...mapActions({
            changeGoodsCount:'shopcar/changeGoodsCount'
        }),
        changeCount(add){
            this.changeGoodsCount({
                id:this.info.id,
                isAdd:add
            })
        }
    }
}
</script>

<style lang="scss">
    .add-payment-item{
         margin: .266667rem 0;
        .meal-right-item{
            border: 1px solid #e1e1e1;
            box-shadow: 0 0 5px #888888;
            border-radius: 40px;
            height: 140px;
            padding: .32rem;
           
            display: flex;
            align-items: center;
            width:100%;
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
            }
            }
    }
</style>
