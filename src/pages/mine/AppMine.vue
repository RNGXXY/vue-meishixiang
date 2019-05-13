<template>
    <div id="app-mine">
        <div class="mine-box mine-top" @click="toLogin">
            <div class="img-box">
                <img src="/images/meishixianglogo.png" alt="">
            </div>
            <div class="mine-sign">
                <h1 v-if="isSign">{{userName}}</h1>
                <h1 v-else>登录/注册</h1>
            </div>
        </div>
        <div class="mine-box mine-bottom">
            <ul class="box-list">
                <router-link class="box-item"
                    v-for="item in mineItems"
                    :key='item.id'
                    :to="item.path"
                    tag="li"
                >
                    <div class="box-item-connent">
                        <h2>{{item.title}}</h2>
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </router-link>
            </ul> 
            <div class="exit" v-if="isSign" @click="exit">
                <div >
                    <p>退出登录</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
   data(){
       return {
           isSign:false,
           usernum:'',
           userName:'',
           mineItems:[
               {id:4,title:'购物车',path:'payment'},
               {id:1,title:'我的外卖',path:'waitReceiving'},
               {id:2,title:'消费记录',path:'rerord'},
               {id:3,title:'送餐地址',path:'addressManage'},
               {id:5,title:'用户须知',path:'acquire'},
               {id:6,title:'客服热线：17695541995',path:''},
           ]
       }
   },
    methods:{
        toLogin(){
            if (!this.isSign) {
                    this.$router.push({name:'login'})
            } else {
                console.log('已登录')
            } 
           
        },
        exit(){
            localStorage.removeItem('userInfo')
            this.isSign = false
            this.$router.push({name:'login'})
        }
    },
    // watch:{
    //     isSign:{
    //         immediate:true,
    //         handler(){
    //             let phonenum = JSON.parse(localStorage.getItem('userInfo')).phone
    //             this.usernum = phonenum
    //             if (!phonenum) {
                   
    //                 return false
    //             }else{
                    
    //                 return true
    //             }
    //         }
    //     }
    // },
    beforeRouteEnter(to,from,next){
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        next(vm=>{
            if (!userInfo.userName) {
                vm.isSign = false
            }else{
                vm.userName = userInfo.userName
                vm.isSign = true
            }
        })
    },
    mounted(){
        this.$bus.$emit('isshowFooter')
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
