<template>
    <div id="app-mine">
        <div class="mine-box mine-top" @click="toLogin">
            <div class="img-box">
                <img src="/images/login.png" alt="">
            </div>
            <div class="mine-sign">
                <h1 v-if="isSign">膤小羽</h1>
                <h1 v-else>登录/注册</h1>
            </div>
        </div>
        <div class="mine-box mine-bottom">
            <ul class="box-list">
                <li class="box-item"
                    v-for="item in mineItems"
                    :key='item.id'
                >
                    <div class="box-item-connent">
                        <h2>{{item.title}}</h2>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </li>
            </ul> 
            <div class="exit" v-if="isSign">
                <router-link to='/login' tag="div">
                    <p>退出登录</p>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
   data(){
       return {
           isSign:false,
           mineItems:[
               {id:1,title:'吉分兑换'},
               {id:2,title:'优惠券'},
               {id:3,title:'送餐地址库'},
               {id:4,title:'修改密码'},
               {id:5,title:'用户须知'},
           ]
       }
   },
   methods:{
       toLogin(){
           if(!this.isSign){
               this.$router.replace({name:'login'})
           }
       }
   }
}
</script>

<style lang="scss">
    #app-mine{
        .mine-box{
            width: 95%;
            margin: .533333rem auto;
            border-radius: 10px;
            border-style: none;
            box-shadow: 0px 0px 8px #888888; 
        }
        .mine-top{
            height: 2rem;
            padding: .533333rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .img-box{
                height: 1.066667rem;
                width: 1.706667rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .mine-sign{
                flex-grow: 1;
                font-size: 18px;
                margin-left: .266667rem;
            }
        }   
        .mine-bottom{
            padding-bottom: .533333rem;
            .box-list{
                .box-item{
                   width: 100%;
                   border-bottom: 1px solid #ddd;
                    .box-item-connent{
                        padding: .426667rem;
                        font-size:16px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                   
                }
            }
            .exit{
                height: 1.173333rem;
                width: 5.653333rem;
                margin: .533333rem auto;
                background: #EF7F1D;
                border-radius: 10px;
                text-align: center;
                line-height: 1.173333rem;
            }
        }
    }
</style>
