<template>
    <div>
        <header id="app-header">
            <div class="header-main">
                <div class="header-left">
                    <div class="img-box" v-if="isHome">
                        <img src="/images/logo.png" alt="">
                    </div>
                    <span class="header-title">{{title}}</span>
                </div>
                <div class="header-right"  v-if="isHome">
                    <span >哈哈</span>
                </div>
            </div>
        </header>
        <app-fotter> </app-fotter>
    </div>
</template>
 
<script>
import AppFotter from '@c/layout/AppFotter'
export default {
    data(){
        return{
            // isHome:false,
            title:'美食巷'
        }
    },
     components:{   
      AppFotter
    },
    methods:{
      createTitle(to){
          let _to = to || this.$route
        switch(_to.name){
            case 'order' :return '美食巷店铺';
            case 'mine' :return '我的美食巷';
            case 'meal' :return '美食巷美食';
            default : return '美食巷'
        }
      }  
    },
    computed:{
        isHome : function(){
            return this.title == '美食巷'
        }
    },
    created(){
        this.title = this.createTitle()
        this.$router.beforeEach((to,from,next)=>{
            this.title = this.createTitle(to)
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
                .header-title{
                    font-size: .48rem;
                }
            }
        }
    }
</style>

