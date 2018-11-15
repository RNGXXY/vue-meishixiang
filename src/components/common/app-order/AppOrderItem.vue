<template>
    <li class="shop-item" ref="orderItem" v-if="!isDelete">
        <div class="item-main" >
            <router-link class="item-left"  tag="div" :to = "{name:'meal',params:{id : shopinfo.id}, query:{name:shopinfo.name}}">
                <div class="img-box">
                    <img v-lazy ='"https://fuss10.elemecdn.com/"+imgPath+".jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"' alt="">
                </div>
            </router-link> 
            <div class="item-right">
                <div class="right-top right-flex">
                    <span class="pingpai">品牌</span>
                    <h2 class="shop-name">{{shopinfo.name}}</h2>
                    <p class="icon" @click = "dislike=true">
                        <i class="fa fa-times-circle-o"></i>
                    </p>
                </div>
                <div class="right-middle right-flex">
                    <p class="grade">评分：<span>{{shopinfo.rating}}</span></p>
                    <p class="month-seal">月销<span>{{shopinfo.recent_order_num}}</span>单</p>
                </div>
                <div class="right-bottom ">
                    <div class="moneylimit right-flex">
                        <span class="startSend">￥<span>{{shopinfo.piecewise_agent_fee.rules[0].price}}</span>起送</span>
                        <span class="piecewise_agent_fee">{{shopinfo.piecewise_agent_fee.description}}</span>
                    </div>
                    <div class="timedistance-wrap right-flex">
                        <span class="distance">距离：<span>{{(shopinfo.distance/1000).toFixed(2)}}</span>km</span>
                        <span class="order_lead_time">预计<span>{{shopinfo.order_lead_time}}</span>分钟后送达</span>
                    </div>
                </div>
            </div>
        </div>
        <transition
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
            transform:all 1s
        >
            <div class="mask animated" v-if="dislike" @click="dislike=false">
                <div class="delete" @click="todelete">
                        <i class="fa fa-times-circle-o"></i>
                        <span class="disLiked">不喜欢</span>
                </div>
            </div>
        </transition>
    </li>
</template>

<script>
export default {
    data(){
        return{
            dislike:false,
            isDelete:false
        }
    },
    props:['shopinfo'],
    methods: {
       
        todelete(){
            this.$destroy()
        },
        // async getshops() {
        //     let res = await this.$http({
        //         url:"/waimai/v3/restaurants?latitude=39.990348&longitude=116.359323&extras[]=activities&extras[]=tags&extra_filters=home&order_by=0&rank_id=b6ea08a4065a42ab95dd37a49b2b45ef&terminal=h5",
        //         params: {
        //             offset: 24,
        //             limit: 8
        //         } 
        //     },true);
        // },
        
    },
    // filters:{
    //     imgPath:(val)=>{
    //         return val.slice(0,1)+'/'+val.slice(1,3)+'/'+val.slice(3)
    //         // console.log(path)
    //         // return path
    //     }  
    // },
    computed:{
        imgPath(){
            return this.shopinfo.image_path.slice(0,1)+'/'+ this.shopinfo.image_path.slice(1,3)+'/'+this.shopinfo.image_path.slice(3)
        }
    },
    mounted() {
        // this.getshops();
    },
    beforeDestroy(){
        this.$el.remove()
    }
}
</script>

<style lang="scss">
    .shop-item {
        height: 4.266667rem;
        padding: .266667rem;
        border-bottom: .026667rem solid #eeeeee;
        font-size: 14px;
        color: #666;
        position: relative;
        .item-main{
            // padding: 0 .266667rem;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .item-left{
                .img-box{
                    background: url('/images/msbj.png') no-repeat ;
                    background-size: 100% 100%;
                    height: 2.666667rem;
                    width: 2.666667rem;
                    img{
                        width: 100%
                    }
                }
            }
            .item-right{
                height: 100%;
                flex-grow: 1;
                margin-left: .266667rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .right-flex{
                    display: flex;
                }
                .right-top{
                    height: .666667rem;
                    align-items: center;
                    .pingpai{
                        width: .746667rem;
                        height: .533333rem;
                        line-height: .533333rem;
                        text-align: center;
                        background: #fff100;
                        font-size: .32rem;
                        padding: 0 .053333rem;
                        border-radius: .133333rem;
                        margin-right: .133333rem;
                    }
                    .shop-name{
                        width: 5.066667rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #000;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    .icon{
                        text-align: right;
                        padding-left: .266667rem;
                    }
                }
                .right-middle{
                    .grade{
                        margin-right: .4rem;
                    }
                }
                .right-bottom{
                    line-height: .8rem;
                    .moneylimit,.timedistance-wrap{
                        justify-content: space-between
                    }
                }
            }
        }
        .mask{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba($color: #000000, $alpha: 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            .delete{
                width: 1.333333rem;
                height: 1.333333rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                color: #eeeeee;
                font-size: 16px;
            }
        }
    }
</style>
