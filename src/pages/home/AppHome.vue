<template>
    <section id="app-home" ref = "home">
        <div class="app-home">
            <app-home-banner></app-home-banner>
            <app-home-body></app-home-body>
        </div>
    </section>
</template>

<script>
import AppHomeBanner from '@c/common/app-home/AppHomeBanner'
import AppHomeBody from '@c/common/app-home/AppHomeBody'
import scroll from '@util/scroll'
export default {
    components:{  
        AppHomeBanner,
        AppHomeBody
    },
    mounted(){
        this.scroll=scroll({
            el:this.$refs.home,
            handler:()=>{},
            onscroll:()=>{}
        })
    }
}
</script>

<style lang="scss">
    #app-home{
        height: 100%;
        overflow: hidden;
    }
</style>
