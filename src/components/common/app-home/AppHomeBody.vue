<template>
    <div class="home-body">
        <router-link class="orderDinner" :to='meal' tag="div">
            <div class="orderDinner-btn">开始订餐</div>  
        </router-link>
        <div class="activity">
            <div class="activity-item"
                v-for='activity in activitys'
                :key='activity.id'
            >
                <a href="javascript:;">
                    <div class="img-box">
                        <img :src="activity.img" alt="">
                    </div>
                    <p>{{activity.name}}</p>
                </a>
            </div>
            
        </div>
        <div class="variety">
            <div class="variety-row">
                <div class="img-box">
                    <img src="http://51wm-pic1.oss-cn-hangzhou.aliyuncs.com/merchantAd/25e5b45c-3aa3-49cd-b3cf-e0f4eda7a26f.png" alt="">
                </div>
            </div>
            <div class="variety-row">
                <div class="img-box">
                    <img src="http://51wm-pic1.oss-cn-hangzhou.aliyuncs.com/merchantAd/3286c143-0565-41be-a663-9149a13f01b4.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            meal:'meal',
            activitys:[
                {id:1,name:'附件餐厅',img:'/images/fixed1.png'},
                {id:2,name:'吉分兑换',img:'/images/fixed2.png'},
                {id:3,name:'会员中心',img:'/images/fixed3.png'}
            ]
        }
    }
}
</script>


<style lang="scss">
    .home-body{
        .orderDinner{
            padding: .266667rem;
            
            .orderDinner-btn{
                height: 1.333333rem;
                border-radius: .266667rem;
                background: #EF7F1D;
                color: #ffffff;
                font-size: .746667rem;
                text-align: center;
                line-height: 1.333333rem;
            }
        }
        .activity{
            padding: .266667rem;
            height: 3.413333rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .activity-item{
                a{
                    display: block;
                    height: 2.88rem;
                    width: 2.666667rem;
                    border-radius: .266667rem;
                    box-shadow: 0px 0px 8px #888888;
                    position: relative;
                    padding: .133333rem;
                    .img-box{
                        position: absolute;
                        height: 1.413333rem;
                        width: 1.813333rem;
                        left: .266667rem;
                        bottom: .266667rem;
                    }
                    p{
                        float: right;
                        font-size: .373333rem;
                        color: #000;
                        height: 1.066667rem;
                        width: 1.066667rem;

                    }
                }
            }
        }
        .variety{
            padding: .266667rem;
            height: 4.8rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .variety-row{
                width: 4.533333rem;
                height: 4.533333rem;
                box-shadow: 0px 0px 8px #888888;
                border-radius: 10px;
                .img-box{
                    width: 100%;
                    height: 100%;
                    margin: auto;
                    img{
                        width: 100%;
                    }
                }

            }
        }
    }
</style>
