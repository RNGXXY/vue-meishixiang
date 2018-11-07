<template>
    <section id="app-home">
        <app-home-banner></app-home-banner>
        <app-home-body></app-home-body>
    </section>
</template>

<script>
import AppHomeBanner from '@c/common/app-home/AppHomeBanner'
import AppHomeBody from '@c/common/app-home/AppHomeBody'
export default {
    components:{
        AppHomeBanner,
        AppHomeBody
    }
    
}
</script>

<style lang="scss">
    #app-home{
        height: 100%;
        
    }
</style>
