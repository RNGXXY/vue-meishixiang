<template>
    <div class="pickerWrap">
        <div class="pickerList">
            <div class="pickerItem">
                <mt-picker :slots="addresses" @change="onDataChange" value-key="content"></mt-picker>
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
    props:['addressList','onHandleAddressSelect'],
    data(){
        return{
            
            addresses: [
                {
                    flex: 1,
                    values:this.getDataList(),
                    className: 'slot1',
                    textAlign: 'center'
                }
            ]
        }
    },
    methods:{
         onDataChange(picker, values){
            this.onHandleAddressSelect(values[0].content)
        },
        getDataList(){
            return this.addressList
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
            width:100%;
            }
        }
    }
</style>
