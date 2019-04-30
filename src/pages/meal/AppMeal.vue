<template>
    <div class="app-meal">
        <div class="app-meal-body">
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
                            v-for="item in billboards"
                            :key="item.item_id"
                        >
                            <app-meal-swiper-item
                                :info='item'
                            ></app-meal-swiper-item>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="meal-body">
                <div class="meal-main">

                    <app-meal-body
                        :id="id"
                        :shopName="shopName"
                    ></app-meal-body>

                </div>
            </div>
        </div>
    
        <div class="meal-footer">
            <div class="footer-main">
                <div class="footer-left">
                    <div class="img-box">
                        <img src="/images/cart.png" alt="">
                    </div>
                </div>
                <div class="footer-center">
                    <h1 class="pay"><span></span></h1>
                </div>
                <router-link class="footer-right"
                    to="/payment"
                    tag="div"
                >
                    <span class="choseOk">选好了</span>
                    <i class="fa fa-chevron-right"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import AppMealBody from '@c/common/app-meal/AppMealBody'
import AppMealSwiperItem from '@c/common/app-meal/AppMealSwiperItem'
import infos from '@util/json/moke.json'
export default {
    components:{
        AppMealBody,
        AppMealSwiperItem
    },
    props:['id','shopName'],
    data() {
        return {       
            // swiper参数配置
            mealSwiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                
                slidesPerView : 3,
                slidesPerGroup : 3,
                freeMode : true,
                freeModeMomentumBounceRatio : 3,    //反弹，值越大产生的边界反弹效果越明显，反弹距离越大。
                
            },
            // 要渲染的数据，因为接口请求不到，所以用了本地json文件中存储的数据
            billboards:infos.recommend[0].items
        }
    },
    methods:{
         getInfo(){
            // let res = await this.$http({
            //     // url:"/pizza/restaurants/"+this.id+"/batch_shop?user_id=114716584&code=0.7081993427012916&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=39.990348&longitude=116.359323"
            //     // url:'/pizza/restaurants/167019824/batch_shop?code=0.16213388759314173&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=39.990348&longitude=116.359323'
            // })  
        }
    },
    computed: {
        swiper() {
            return this.$refs.mealSwiper.swiper
        }
    },
    mounted(){ 
        // this.$parent.$refs.header.isbackhome=true
        // this.getInfo()
    },    
}

</script>

<style lang="scss">
    .app-meal{
        height: 100%;
        font-family: "Microsoft YaHei";
        overflow: auto;
        .app-meal-body{
            height: 100%;
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
                height: 6rem;
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
                    
                }
            }
            .meal-body{
                height: 100%;
                .app-meal-main{
                    height: 100%;
                }
            }
        }
       
        
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
                    }
                }
                .footer-center{
                    flex: 1 1;
                    height: 100%;
                    font-size: 24px;
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
</style>
