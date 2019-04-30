<template>
    <div>
        <header ref="header" id="app-header">
            <div class="header-main">
                <div class="header-left" >
                    <div class="img-box" v-if="isHome">
                        <img src="http://localhost:3000/uploads/logos/meishixianglogo.png" alt="">
                    </div>
                    <div   class="backhome"
                        v-show = "isbackhome"
                        @click = "backtohome"
                    >
                        <i class="fa fa-chevron-left"></i>
                    </div>
                    <span class="header-title">{{title}}</span>
                </div>
                <!-- <router-link class="header-right"  v-if="isHome"
                    :to="{name: 'cities'}"
                    tag="div"
                >
                    <span >{{chunks.city?chunks.city.cityName:''}}</span>
                </router-link> -->
                <div class="header-right" ><span >天津</span></div>
            </div>
        </header> 
        <app-fotter
            v-if="useFooter"
        > </app-fotter>
    </div>
</template>
 
<script>
import AppFotter from '@c/layout/AppFotter'
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/muntation-types'
export default {
    // beforeCreate(){
    //     if (localStorage.city) {
    //         this.$store.commit({
    //             type: 'chunks/'+CHANGE_CITY,
    //             city:JSON.parse(localStorage.city),
    //             cities:JSON.parse(localStorage.cities)
    //         })
    //     } else {
    //          this.$store.dispatch({
    //             type:'chunks/getCurrentPosition'
    //         })
    //     }
    // },
    data(){
        return{
            // isHome:false,
            title:'美食巷',
            useFooter:false,
            meal:false,
            isbackhome:false
        }
    },
    components:{   
        AppFotter
    },
    methods:{
       
        createTitle(to){
            let _to = to || this.$route
            switch(_to.name){
                case 'order' : return '美食巷店铺';
                case 'mine' :  return '我的美食巷';
                case 'home' :  return '美食巷';
                // case 'citys' : this.isbackhome = true ; return '城市列表';
                case 'login' : this.isbackhome = true ; return '登录';
                case 'payment' : this.isbackhome = true ; return '菜篮子';
                case 'rerord' : this.isbackhome = true ; return '消费记录';
                case 'cities' : this.isbackhome = true ; return '城市选择';
                case 'meal' : return _to.query.shopName;    // 从商家列表跳到商家详情页的时候，从query中取得商家名称的信息（因为接口不能用了，只能采用这么low的办法了）
                default :    return '美食巷' 
            } 
        },
        backtohome(){     
            this.$router.back()     
        }  
    },
    computed:{
        ...mapState(['chunks']),
        isHome : function(){
            return this.title == '美食巷'
        }
    },
    mounted(){
        
        this.$bus.$on('isshowFooter',()=>{
            this.useFooter = true
        })
    },
    created(){
        
        this.title = this.createTitle()
        this.$router.beforeEach((to,from,next)=>{
   
            this.title = this.createTitle(to)
            let routeName = to.name
            switch(routeName){
                case 'home' : this.isbackhome = false; this.useFooter=true; break;
                case 'order' : this.isbackhome = false; this.useFooter=true; break;
                case 'mine' : this.isbackhome = false; this.useFooter=true; break;
                default:this.isbackhome = true ; this.useFooter=false;
            }

            next()
        })    
    }
}
</script>

<style lang="scss">
    #app-header{
        height: 1.173333rem;
        width: 100%;
        border-bottom: 2px solid #ff8600;
        position: fixed;
        z-index: 10;
        background: #ffffff;
        .header-main{
            height: 100%;
            padding: .133333rem;
            display: flex;
            justify-content: space-between;
            align-items: center; 
            .header-left{
                height: 100%;
                display: flex;
                align-items: center;
                margin-left: .266667rem;
                .img-box{
                    position: fixed;
                    height: .746667rem;
                    width: 2.266667rem;
                    background: #ffffff;
                    img{
                        width: 100%;
                    }
                }
                .backhome{
                    width: .533333rem;
                    // height: 100%;
                    margin-right: .266667rem;
                }
                .header-title{
                    font-size: .48rem;
                }
            }
            .header-right{
                width: 2.666667rem;
                font-size: 16px;
                text-align: center;
            }
        }
    }
</style>

