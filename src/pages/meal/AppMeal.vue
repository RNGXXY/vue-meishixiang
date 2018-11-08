<template>
    <div class="app-meal">
        <div class="meal-ad">
            <i class="fa fa-bullhorn"></i>
            <p> 1.餐厅外送时间30分钟送达
                2.大份订餐20份以上，可提前一天进行预订
                3.本店使用电子票据，请按照指引自行开票
                4.吉野家外送产品收取餐盒费，主餐产品收取1元，火锅产品收取3元，谢谢</p>
        </div>
        <div class="hot-seal">
            <div class="hotCakes">
                <div class="ng-binding">门店</div>
                <div class="ng-binding">热销</div>
            </div>
            <div class="seal-list">
                <swiper :options="mealSwiperOption" ref="mealSwiper">
                    <swiper-slide
                        v-for="m in 5"
                        :key="m"
                    >

                        <div class="seal-item">
                            <div class="item-img">
                                <img src="http://51wm-pic1.oss-cn-hangzhou.aliyuncs.com/product/c2aa8906-2389-4c2e-af01-41b9566089bb.png" alt="">
                            </div>
                            <div class="item-name">
                                照烧鸡排饭（大）套餐
                            </div>
                            <div class="item-price">
                                ￥<span>22</span>
                            </div>
                            <div class="item-order">
                                <span>选套餐</span>
                                <i class="fa fa-plus-circle"></i>
                            </div>
                        </div>

                    </swiper-slide>
                </swiper>
                
                
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {       
            mealSwiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                
                slidesPerView : 3,
                slidesPerGroup : 3,
                freeMode : true,
                freeModeMomentumBounceRatio : 3,    //反弹，值越大产生的边界反弹效果越明显，反弹距离越大。
                
            },
            billboards:[]
        }
    },
    computed: {
      swiper() {
        return this.$refs.mealSwiper.swiper
      }
    },
}
// https://h5.ele.me/pizza/shopping/restaurants/431375/batch_shop?user_id=114716584&
// code=0.003509798536866393&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%
// 22%2C%22qualification%22%5D&terminal=h5&latitude=39.135884&longitude=117.210061
</script>

<style lang="scss">
    .app-meal{
        .meal-ad{
            height: .533333rem;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .373333rem;
            color: #ffffff;
            p{
                width: 8rem;
                height: 100%;
                line-height: .533333rem;
                margin: 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-left: .266667rem;
            }
        }
        .hot-seal{
            height: 5.2rem;
            padding: .266667rem 0;
            position: relative;
            .hotCakes{
                background: #EF7F1D;
                color: #fff;
                border-radius: 50%;
                height: 40px;
                width: 40px;
                position: absolute;
                top: -0.586667rem;
                left: 0;
                z-index: 3;
                word-wrap: break-word;
                font-size: .373333rem;
                text-align: center;
                padding: .053333rem;

            }
            .seal-list{
                .seal-item{
                    border-radius: .4rem;
                    margin: 0 .133333rem;
                    padding: .266667rem;
                    width: 3.2rem;
                    height: 4.613333rem;
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
                }
            }
        }
    }
</style>
