<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <app-header ref='header'></app-header>
    <!-- <app-home></app-home> -->
    <main>
      
      <keep-alive include="app-citys">
        
          <router-view></router-view>
       
      </keep-alive>
      
    </main>
    <!-- <app-fotter></app-fotter> -->
  </div>
</template>

<script>
  // import AppHome from '@pages/home/AppHome'
  import AppHeader from '@c/layout/AppHeader'
  // import AppFotter from '@c/layout/AppFotter'
  export default {
    // 只有组件才能用，作用：便于调试
    name:'app',
    components:{
      // AppHome,
      AppHeader,
      // AppFotter
    },
    mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
    },
    beforeCreate(){
      this.$store.dispatch('shopcar/initGeetInfo')
    },
    created () {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start()
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress
          // parse meta tags
          this.$Progress.parseMeta(meta)
        }
        //  start the progress bar
        this.$Progress.start()
        //  continue to next page
        next()
      })
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
        this.$Progress.finish()
      })
    }
  }

</script>




<style lang="scss">
// lang 指定使用的预处理语言
// scoped 锁定css作用域，只在当前组件生效
// <style lang="scss" scoped>
body,html,#app{
  height: 100%;
  width: 100%;
  position: relative;
  main{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 1.173333rem;
    padding-bottom: 1.6rem;
    overflow: auto;
  }
}
</style>
