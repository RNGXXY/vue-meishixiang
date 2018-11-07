<template>
  <div id="app">
    <app-header></app-header>
    <!-- <app-home></app-home> -->
    <main>
      <router-view></router-view>
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
    mounted(){
        
    }
  }

</script>




<style lang="scss">
// lang 指定使用的预处理语言
// scoped 锁定css作用域，只在当前组件生效
// <style lang="scss" scoped>
body,html,#app,main{
  height: 100%;
  main{
    padding-top: 1.173333rem;
    padding-bottom: 1.6rem;
  }
}
</style>
