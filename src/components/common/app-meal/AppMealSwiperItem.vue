<template>
    <div class="add-meal-swiepr-item">
        <div class="seal-item">
            <div class="item-img">
                <img :src = '"//fuss10.elemecdn.com/" + info.image_path + ".jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"' alt="">
            </div>
            <div class="item-name">
                {{info.name}}
            </div>
            <div class="item-price">
                ￥<span>{{info.specfoods[0].price}}</span>
            </div>
            <div class="item-order">
                <div class="sub" @click = "count--">
                    <i class="fa fa-minus-circle"></i>
                </div>
                <!-- <span>选套餐</span> -->
                <span class="counts" ref='num'>{{count}}</span>
                
                    <div class="add" @click = "count++">
                    <i class="fa fa-plus-circle"></i>
                </div>
            </div>
            <div class="addcar" @click="addGoodsHandler">
                加入菜篮子
            </div>
        </div>
    </div>
</template>

<script>
import { Toast} from 'mint-ui';
import { mapActions } from 'vuex'
export default {

    props:['info'],
    methods:{
        ...mapActions({
            addGoods:'shopcar/addGoods'
        }),
        addGoodsHandler(){
           let { item_id : id , name }  = this.info
            let price = this.info.specfoods[0].price
            let imgUrl = this.info.image_path
            // this.addGoods({ id,name,price,count:this.count,imgUrl})
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
        return{
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
}
</script>

<style lang="scss">
.seal-item{
    border-radius: .4rem;
    margin: 0 .133333rem;
    padding: .266667rem;
    width: 3.2rem;
    height: 5.613333rem;
    box-shadow: 0 0 .133333rem #888888 inset;
    color: #333333;
    .item-img{
        height: 2.133333rem;
        width: 2.133333rem;
        margin: 0 auto;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .item-name{
        height: .666667rem;
        line-height: .666667rem;
        text-align: center;
        border-top: 2px solid #EF7F1D;
        font-size: .373333rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap;
    }
    .item-price{
        height: .586667rem;
        line-height: .586667rem;
        text-align: right;
        font-size:.48rem;
        font-weight: bold;
    }
    .item-order{
        height: .8rem;
        width: 1.84rem;
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
        height: .6rem;
        margin-top: .133333rem;
        padding: 0 .133333rem;
        border-radius: .266667rem;
        color: #FFF;
        width: auto;
        background: #ef4f4f;
        display: inline-block;
        float: right;
    }
}
</style>
