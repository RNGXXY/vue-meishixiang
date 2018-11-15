<template>
    <div class="app-cities">
       
       <app-content-block title = "当前所在城市">
           <app-content-item v-if = "chunks.city" class="active">{{chunks.city.cityName}}</app-content-item>
        </app-content-block>

        <app-content-block title = "热门城市">
           <app-content-item 
                v-for="city in hotCitys"
                :key="city.id"
                @click.native = "changeCity(city)"
           >{{city.name}}
           </app-content-item>
        </app-content-block>
       
       
       <app-cities-list></app-cities-list>
    </div>    
</template>


<script>
import AppCitiesList from '@c/common/app-city/AppCitiesList'
import AppContentBlock from '@c/common/app-city/AppContentBlock'
import AppContentItem from '@c/common/app-city/AppContentItem'

import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/muntation-types' 
export default {
    name: 'app-citys',  
    components:{
        AppCitiesList,
        AppContentBlock,
        AppContentItem
    },
    computed: mapState(['chunks']),
     data () {
        return {
            
            hotCitys: [
                {id: 12, name: '北京'},
                {id: 11, name: '上海'},
                {id: 13, name: '广州'},
                {id: 10, name: '深圳'}
            ]
        }
    },
    methods:{
        changeCity({id: cityId, name: cityName}){
            this.$store.commit({
                type:'chunks/'+ CHANGE_CITY,
                city:{
                    cityId, 
                    cityName
                }
            })
            this.$router.push({name:'home'})
        }
    }
}
</script>


<style lang="scss">
    .app-cities{
        height: 100%;
    }
</style>
