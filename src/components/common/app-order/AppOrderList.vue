<template>
    <div ref = "root" class="order-body">
        <section class="order-scroller">
            <ul class="shop-list">
                <app-order-item
                    v-for="shopinfo in shops"
                    :key="shopinfo.index"
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

// 引入json文件
import zongheShops from '@util/json/zongheShops.json'
import xiaoliangShops from '@util/json/xiaoliangShops.json'

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
            // console.log(this.$refs.a)
        },
        backTop () {      //回到顶部
            this.scroll.scrollTo(0,0,200)
        },
        async getshops() {  // 加载的主要逻辑
             // 如果没有更多了，就去请求了，顺便把那个框框打开
            if ( !this.hasMore ) {
                // 如果已经有一个了，就上一个关掉（拉了一次又拉了一次）
                if (this.instance) this.instance.close()
                this.instance = Toast({     //将TOAST挂载到this身上
                    message: '没有更多了...',
                })
                return false;
            };
            
            // 接口异常，暂用json数据
            // let res = await this.$http({
            //     // url:"/waimai/v3/restaurants?latitude=39.990348&longitude=116.359323&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=b6ea08a4065a42ab95dd37a49b2b45ef&terminal=h5",
            //     // url:"/waimai/v3/restaurants?latitude=39.17705&longitude=117.12862&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5",
            //     url:"/eleme/restapi/shopping/v3/restaurants?latitude=39.17705&longitude=117.12862&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5",
            //     params: {
            //         offset: this.offset,
            //         limit: 8,
            //         order_by:this.order_by
            //     },
            //     headers:{
            //         // Host:'127.0.0.1:8000',
            //         'Cookie':'xxx',
            //         'xxxx':'xxx',
            //         // Cookie: "perf_ssid=0r17nnurqkjjse1vnh8xyo7lbahd1v6j_2018-11-11; ubt_ssid=u931mpceiv47vy8mlazaxhp6ko67oe9t_2018-11-11; cna=6t9fFEwa3AUCAW/L/iL/DGwI; _utrace=13dc40e0c0c81c6631416883e0210a7b_2018-11-11; track_id=1542115352|1ecab7d413939b764292adec54ac7d2ddeea2ecb7de953eb58|7499e2efc3a902c93412e80f05528b5a; USERID=114716584; UTUSER=114716584; SID=gt38HVHpx2IaDpJf4NCMAIXVfI3Izuz3kIrw; _bl_uid=wwj0Cub16R4j5kq68y5Rszmqd7CX; isg=BPj4FWKH0PLDdzs_xn7C6hw8yaaAnGNlCToGZzJpRTPxTZk32nAye6srAQPYHRTD;"
            //     },
            //     // Cookie:'perf_ssid=0r17nnurqkjjse1vnh8xyo7lbahd1v6j_2018-11-11; ubt_ssid=u931mpceiv47vy8mlazaxhp6ko67oe9t_2018-11-11; cna=6t9fFEwa3AUCAW/L/iL/DGwI; _utrace=13dc40e0c0c81c6631416883e0210a7b_2018-11-11; track_id=1542115352|1ecab7d413939b764292adec54ac7d2ddeea2ecb7de953eb58|7499e2efc3a902c93412e80f05528b5a; USERID=114716584; UTUSER=114716584; SID=gt38HVHpx2IaDpJf4NCMAIXVfI3Izuz3kIrw; _bl_uid=wwj0Cub16R4j5kq68y5Rszmqd7CX; isg=BPj4FWKH0PLDdzs_xn7C6hw8yaaAnGNlCToGZzJpRTPxTZk32nAye6srAQPYHRTD',
            //     loading:true
            // },true);
            // if (res.status === 200) {
            //     if (this.offset >= 80) {
            //         this.hasMore = false
            //     }else{
            //         this.offset += this.limit
            //     }
            //     this.shops =  this.shops.concat(res.data.items)
            // }
            let dataList = this.order_by == 0 ? zongheShops : xiaoliangShops
            this.shops =  this.shops.concat(dataList.items)
        }
    },
    beforeDestroy () {
        if (this.instance) this.instance.close() // 切换路由的时候（组件销毁），关掉框框
    },

    // 在mounted中注册了滚动，人家提供的就是在mounted里面
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
