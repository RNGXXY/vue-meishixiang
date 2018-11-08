<template>
    <div class="order-body">
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

export default {
    components:{
        AppOrderItem
    },
    data(){
        return{
            dislike:false,
            shops:[]
        }
    },
    props:['order_by'],
    watch:{
        order_by:{
            immediate: true,
            handler(){
                this.shops = [] // 清空当前的数据
                this.getshops()
            }
        }
    },
    methods: {
        todelete(){
            console.log(this.$refs.a)
        },
        
        async getshops() {
            let res = await this.$http({
                url:"/waimai/v3/restaurants?latitude=39.990348&longitude=116.359323&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=b6ea08a4065a42ab95dd37a49b2b45ef&terminal=h5",
                params: {
                    offset: 0,
                    limit: 8,
                    order_by:this.order_by
                }
            },true);
            if (res.status === 200) {
                this.shops = res.data.items
            }
        }
    },
    async created() {
            let res = await this.$http({
                url:"/waimai/v3/restaurants?latitude=39.990348&longitude=116.359323&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=b6ea08a4065a42ab95dd37a49b2b45ef&terminal=h5",
                params: {
                    offset: 0,
                    limit: 8,
                    order_by:this.order_by
                }
            },true);
            if (res.status === 200) {
                this.shops = res.data.items
            }
        },
    // mounted() {
    //     console.log(this.order_by)
    //     this.getshops()
    // }    
}
</script>

<style lang="scss">
.order-body {
    // height: 100%;
    position: absolute;
    top:1.28rem;
    bottom: 0;
    overflow: auto;
    .order-scroller {
        
    }
}
</style>
