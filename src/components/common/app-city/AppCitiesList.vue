<template>
    <div class="app-cities-list">
        <mt-index-list>
            <mt-index-section 
                v-for = "(value, key) in citys"
                :key  = "key"
                :index="key"
               
            >
                <mt-cell
                    v-for = "city in value"
                    :key  = "city.id"
                    :title= "city.name" 
                    @click.native = "changeCity(city)"  
                ></mt-cell>
                <!-- .native - 监听组件根元素的原生事件。 -->
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
import { IndexList, IndexSection, Cell } from 'mint-ui';
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/muntation-types' 
export default {
    components:{
        [IndexList.name]:IndexList,
        [IndexSection.name]:IndexSection,
        [Cell.name]:Cell
    },
   
    computed: {
        ...mapState(['chunks']),
        citys () {
            return this.$cities(this.chunks.cities)
        }
    },
    methods:{
    //     changeCity({id: cityId, name: cityName}){
    //         this.$store.commit({
    //             type:'chunks/'+ CHANGE_CITY,
    //             city:{
    //                 cityId, 
    //                 cityName
    //             }
    //         })
    //     },
    
        changeCity(city){   //city是上面通过循环得到的
            this.$store.commit({
                type:'chunks/'+ CHANGE_CITY,
                city:{
                    cityId:city.id,
                    cityName:city.name
                }
            })
            this.$router.push({name:'home'})
        }
    }
   
}
</script>

<style lang="scss">

</style>
