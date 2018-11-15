<template>
    <div class="add-meal-food-item">
        
         <app-meal-food-info
             v-for="item in value"
            :key="item.item_id"
            :item = 'item'
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
    
    props:['value'],
    
}
</script>

<style lang="scss">
    .disabled {
        pointer-events: none;
        cursor: default;
        opacity: 0.6;
    }

    
</style>
