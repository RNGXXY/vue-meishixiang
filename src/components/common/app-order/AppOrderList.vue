<template>
    <div ref = "root" class="order-body">
        <section class="order-scroller">
            <ul class="shop-list">
                <app-order-item
                    v-for="shopinfo in shops"
                    :key="shopinfo.restaurant.id"
                    :shopinfo='shopinfo.restaurant'
                    ref="list"
                ></app-order-item>
            </ul>
        </section>
    </div>
</template>

<script>
import AppOrderItem from "@c/common/app-order/AppOrderItem";
import scroll from '@util/scroll'
import { Toast } from 'mint-ui';


export default {
    components:{
        AppOrderItem
    },
    data(){
        return{
            dislike:false,
            shops:[],
            offset: 0,
            limit : 8,
            hasMore: true // 是否还有更多
        }
    },
    props:['order_by'],
    watch:{
        order_by:{  //判断切换了又不的按钮请求新的数据
            immediate: true,
            handler(){
                this.shops = [] // 清空当前的数据
                this.offset = 0 // 重置页数
                this.hasMore = true // 重新更多
                this.getshops()
            }
        }
    },
    methods: {
        todelete(){
            console.log(this.$refs.a)
        },
        backTop () {      //回到顶部
            this.scroll.scrollTo(0,0,200)
        },
        async getshops() {  // 加载的主要逻辑
             // 如果没有更多了，就去请求了
            if ( !this.hasMore ) {
                // 如果已经有一个了，就上一个关掉（拉了一次又拉了一次）
                if (this.instance) this.instance.close()
                this.instance = Toast({     //将TOAST挂载到this身上
                    message: '没有更多了...',
                    // position: 'bottom'
                })
                return false;
            };

            let res = await this.$http({
                url:"/waimai/v3/restaurants?latitude=39.990348&longitude=116.359323&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=b6ea08a4065a42ab95dd37a49b2b45ef&terminal=h5",
                params: {
                    offset: this.offset,
                    limit: 8,
                    order_by:this.order_by
                },
                loading:true
            },true);
            if (res.status === 200) {
                if (this.offset >= 80) {
                    this.hasMore = false
                }else{
                    this.offset += this.limit
                }
                this.shops =  this.shops.concat(res.data.items)
            }
        }
    },
    beforeDestroy () {
        if (this.instance) this.instance.close() // 切换路由的时候，关掉框框
    },
    mounted() {
       this.scroll = scroll({
           el: this.$refs.root,
        //    el:this.$el,      //该组件的根元素
           handler:this.getshops.bind(this),
           onscroll: (y) => {
                this.$emit('update:isBackShow', !!(y < -200))
            }
       })
    }    
}
</script>

<style lang="scss">
.order-body {
    // height: 100%;
    position: absolute;
    top:2.453333rem;
    bottom: 1.6rem;
    overflow: hidden;
    .order-scroller {
        
    }
}
</style>
