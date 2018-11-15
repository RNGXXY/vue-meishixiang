<template>
    <div class="app-meal-food-list">
       <div class="meal-right">
            <div class="meal-right-scroll">
                <ul class="meal-right-list"
                    v-for="val in menu"
                    :key=val.global_id
                >
                    <app-meal-food-item :value='val.foods'></app-meal-food-item>
                </ul>
            </div>
        </div> 
    </div>
</template>

<script>
import AppMealFoodItem from './AppMealFoodItem'


import infos from '@util/json/moke.json'
export default {
    components:{
        AppMealFoodItem
    },
    data(){
        return{
            menu:infos.menu
        }
    },
}
</script>

<style lang="scss">
.app-meal-food-list{
    width: 7.253333rem;
    margin: 0 auto;
    .meal-right{
        .meal-right-scroll{
            .meal-right-list{
                
            }
        }
    }
}
    
</style>
