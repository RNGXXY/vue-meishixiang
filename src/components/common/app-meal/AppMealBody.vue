<template>
    <div class="app-meal-body">
        <div class="app-meal-main">
            <div class="meal-left">
                <div class="meal-left-scroll">
                    <ul class="meal-left-list">
                        <app-meal-left-item
                            v-for="(footType,index) in  menuInfo"
                            :key="index"
                            :infoType='footType'
                        ></app-meal-left-item>
                        <!-- <li class="meal-left-item "
                            
                        >
                            <div class="meal-left-item-title">
                                <span>折扣优惠</span>
                            </div>
                        </li> -->
                    </ul>
                </div>
            </div>  
              <app-meal-food-list
                    :id="id"
                    :shopName="shopName"
              ></app-meal-food-list>     
        </div>
    </div>
</template>

<script>
import AppMealFoodList from './AppMealFoodList'
import AppMealLeftItem from './AppMealLeftItem'
import infos from '@util/json/moke.json'
export default {
    data(){
        return{
            menuInfo:infos.menu
        }
    },
    props:['id','shopName'],
    components:{
        AppMealFoodList,
        AppMealLeftItem
    },

}
</script>

<style lang="scss">
    .app-meal-body{
        .app-meal-main{
            display: flex;
            .meal-left{
                width: 2rem;
                box-shadow: 0 0 5px 0;
                padding: .4rem 0; 
            }
            
        }
    }
</style>
