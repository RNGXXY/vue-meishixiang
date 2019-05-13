<template>
    <div class="pickerWrap">
        <div class="pickerList">
            <div class="pickerItem">
                <mt-picker :slots="cities" @change="onCitiesChange" value-key="name"></mt-picker>
            </div>
             
            <div class="pickerItem">
                <mt-picker :slots="areas" @change="onAreasChange" value-key="name"></mt-picker>
            </div> 
        </div>
    </div>
</template>


<script>
import { Picker } from 'mint-ui';

export default {
    components:{
        [Picker.name]:Picker,

    },
    props:["onHandleCityName","onHandleAreaName"],
    data(){
        return{
            slots: [
                {
                    divider: true,
                    content: '-',
                    className: 'slot2',
                    textAlign: 'center'
                }
            ],
            cities: [
                {
                    flex: 1,
                    values: this.onGetCities(),
                    className: 'slot1',
                    textAlign: 'center'
                }
            ],
            areas: [
                {
                    flex: 1,
                    values: this.onGetAreas(10000),
                    className: 'slot2',
                    textAlign: 'center'
                }
            ]
        }
    },
    methods:{
        onCitiesChange(picker, values){
            this.areas[0].values =  this.onGetAreas(values[0].id)
            this.onHandleCityName(values[0].name)
        },
        onAreasChange(picker, values){
            this.onHandleAreaName(values[0].name)
        },
        onGetCities(){
            return [
                {id:10000,name:'北京'},
                {id:11001,name:'天津'}
            ]
        },
        onGetAreas(cityId){
            let areas = [
                {id:10000,value:[
                    {id:10001,name:'海淀区'},
                    {id:10002,name:'昌平区'},
                    {id:10003,name:'大兴区'},
                    {id:10004,name:'密云区'},
                    {id:10005,name:'延庆区'},
                    {id:10006,name:'朝阳区'},
                    {id:10007,name:'石景山区'},
                    {id:10008,name:'门头沟区'},
                    {id:10009,name:'房山区'},
                    {id:10010,name:'通州区'},
                    {id:10011,name:'顺义区'},
                    {id:10012,name:'大兴怀柔区'},
                    {id:10013,name:'平谷区'},
                    {id:10014,name:'东城区'},
                    {id:10015,name:'西城区'},
                ]},
                {id:11001,value:[
                    {id:11001,name:'北辰区'},
                    {id:11002,name:'红桥区'},
                    {id:11003,name:'南开区'},
                    {id:11004,name:'滨海新区'},
                    {id:11005,name:'和平区'},
                    {id:11006,name:'河北区'},
                    {id:11007,name:'河东区'},
                    {id:11008,name:'河西区'},
                    {id:11009,name:'东丽区'},
                    {id:11010,name:'西青区'},
                    {id:11011,name:'津南区'},
                    {id:11012,name:'武清区'},
                    {id:11013,name:'宝坻区'},
                    {id:11014,name:'静海区'},
                    {id:11015,name:'宁河区'},
                    {id:11016,name:'蓟州区'},
                ]},
            ]
            let areaList = areas.filter(item=>item.id == cityId)[0].value
            return areaList
        }

    }
}
</script>



<style lang="scss" scoped>
    .pickerWrap{
        height:5rem;
        width:100%;
        .pickerList{
            width:100%;
            display: flex;
            .pickerItem{
            width:50%;
            }
        }
    }
</style>
