<template>
    <div class="add-meal-food-item">
        
         <app-meal-food-info
            :item = 'value'
            :id="id"
            :shopName="shopName"
         ></app-meal-food-info>   
       
    </div>
</template>

<script>
import AppMealFoodInfo from './AppMealFoodInfo'

export default {
    components:{
        AppMealFoodInfo
    },
    computed:{
        
    },
    created(){
    },
    props:['value','id','shopName'],
}
</script>

<style lang="scss">
    .disabled {
        pointer-events: none;
        cursor: default;
        opacity: 0.6;
    }

    
</style>
