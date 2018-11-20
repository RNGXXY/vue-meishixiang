<template>
    <div id="app-order">
        <div class="order-header">
            <div  class="order-switch "
                v-for = "listNav in listNavs"
                :key = "listNav.order_by"
                @click = "order_by = listNav.order_by"
                :class = "{chocing: listNav.order_by === order_by}"
            >
                <span>{{listNav.title}}</span>
            </div>
           
        </div>
        <keep-alive>
            <app-order-list ref="list" :order_by = "order_by" :isBackShow.sync = "isBackShow"></app-order-list>
        </keep-alive>
        <transition
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
        >
            <div @click = "backTop" v-if = "isBackShow"  class="back-top animated">
                <i class="fa fa-arrow-up"></i>
            </div>  
        </transition>
    </div>
</template>


<script>
import AppOrderList from "@c/common/app-order/AppOrderList";
export default {
    components:{
        AppOrderList
    },
    props: ['url'], // 路由组件传参，将参数与路由解耦 $route.params.url -> this.url
    data(){
        return{
            // order_by: 0 || this.url ,
            order_by: 0 ,
            isBackShow:false,
            listNavs:[
                {id:1,title:'综合排序',order_by:0},
                {id:2,title:'销量优先',order_by:5}
            ]
        }
    },
    methods:{
            backTop (e) {
            this.$refs.list.backTop()   //执行带有ref标记的子组件的方法
        }
    },
    mounted(){
        this.$bus.$emit('isshowFooter')
    }
};
</script>

<style lang="scss">
#app-order {
    height: 100%;
    .order-header {
        height: 1.28rem;
        width: 100%;
        background: url("/images/footer.png");
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        .order-switch {
            height: 0.96rem;
            width: 3.933333rem;
            background: #ffffff;
            color: #444;
            font-size: 0.533333rem;
            text-align: center;
            line-height: 0.96rem;
            border-radius: 0.48rem;
        }
        .chocing {
            background: #ff9600;
            color: #ffffff;
        }
    }
    .back-top {
        position: fixed;
        right: .533333rem;
        bottom: 2.133333rem;
        background-color: rgba(0,0,0,0.7);
        width: 1.28rem;
        height: 1.28rem;
        line-height: 1.28rem;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
   } 
    
}
</style>
