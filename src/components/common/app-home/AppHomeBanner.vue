<template>
    <div class="app-home-banner">
        <swiper v-if = "billboards.length" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide
                v-for = "billboard in billboards"
                :key  = "billboard.index"
            >
                <div class="banner-img">
                    <img :src="billboard.bannerUrl" alt="">
                </div>
            </swiper-slide>

            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>    
</template>

<script>
export default {
    data() {
      return {       
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination:{
              el:'.swiper-pagination'
          },
          loop:true,
          autoplay: {
              disableOnInteraction: false
          }
          
        },
         billboards:[]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        //   console.log('this is current swiper instance object', this.swiper)
        //   this.swiper.slideTo(3, 1000, false)
    },
    watch:{
        '$store.state.chunks.city':{
            immediate:true,
            handler(val){
                // if(!val.cityId) return false
                this.$http({
                    // url:'/jiyejia/Action?serviceId=3&actionId=103&key=132205579c6b7611&langType=0&cityId=' + val.cityId,
                    url:'/jiyejia/Action?serviceId=3&actionId=103&key=132205579c6b7611&langType=0&cityId=12',
                    // params:{cityId:this.val.cityId},
                    react: false
                },true).then(res=>{
                    this.billboards = res.data.data.runBanner
                })
                
            }
        }
    }
}

</script>


<style lang="scss">
    .app-home-banner{
        height: 6.24rem;
        // background: url('/images/banner.png');
        .banner-img{
            height: 6.24rem;;
            img{
                height: 100%;
            }
        }
        .swiper-pagination{
            .swiper-pagination-bullet{
                background: #EF7F1D;
            }
        }
    }
</style>

