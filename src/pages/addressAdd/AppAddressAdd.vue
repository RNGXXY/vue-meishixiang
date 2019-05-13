<template>
    <div class="addressAddWrap">
        <div class='regionSelect'>
            <p>区域选择</p>
            <input placeholder="点击选择" @focus="onFocus" v-model="region"/>
        </div>
        <mt-field label="详细地址" placeholder="例：天津商业大学学生公寓31号楼" v-model="detailedAddress"></mt-field>
        <mt-field label="联系人" placeholder="请输入收货人姓名"  v-model="contacts"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phoneNumber"></mt-field>
        <div class='regionSelect'>
            <p>设为默认地址：</p>
            <mt-switch v-model="isDefault" ></mt-switch>
        </div>
        <div class="saveBtn" @click="onAddress">
            <mt-button size="large" type="primary">保存地址</mt-button>
        </div>
        <mt-popup
        style="width:100%"
            v-model="popupVisible"
            position="bottom">
            <div class="regionHeader">
                <p>已选择：{{cityName}}-{{areaName}}</p>
                <i class="fa fa-check" @click="onClosePicker"></i>
            </div>
            <div class="regionContent">
                <app-picker 
                    :onHandleAreaName="onHandleAreaName"
                    :onHandleCityName="onHandleCityName">
                </app-picker>
            </div>
        </mt-popup>
    </div>
</template>

<script>
import { Field ,Popup ,Switch ,Button , Toast } from 'mint-ui';
import { mapState , mapMutations , mapActions, mapGetters} from 'vuex'
import AppPicker from '@c/common/app-picker/AppPicker'
export default {
    components:{
        [Field.name]:Field,
        [Popup.name]:Popup,
        [Switch.name]:Switch,
        [Button.name]:Button,
        AppPicker
    },
    computed:{
        ...mapState(['address']),
        
    },
    methods: {
        ...mapActions({
            updataAddressList:'address/updataAddressList'
        }),
        onFocus(){
            this.popupVisible = !this.popupVisible
        },
        onClosePicker(){
            this.region=this.cityName+' '+this.areaName
            this.onFocus()
        },
        onHandleCityName(data){
            this.cityName = data
        },
        onHandleAreaName(data){
            this.areaName = data
        },
        onAddress(){
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            this.updataAddressList({
                userId:userInfo._id,
                contacts:this.contacts,
                detailedAddress:this.detailedAddress,
                phoneNumber:this.phoneNumber,
                cityName:this.cityName,
                areaName:this.areaName,
                isDefault:this.isDefault
            })
            if (this.instance) this.instance.close()
            this.instance = Toast({
                message: '保存成功',
                iconClass: 'fa fa-check'
            });
            setTimeout(() => {
                this.instance.close();
            }, 2000);
        }
    },
    beforeDestroy () {
        if (this.instance) this.instance.close() // 切换路由的时候，关掉框框
    },
    data() {
        return {
            popupVisible:false,
            region:'',
            detailedAddress:'',
            contacts:'',
            phoneNumber:'',
            cityName:'',
            areaName:'',
            isDefault:false
        };
    }
}
</script>

<style lang="scss" scoped>
    .addressAddWrap{
        .regionSelect{
            height:1.28rem;
            padding:0 .266667rem;
            display: flex;
            align-items: center;
            font-size: 16px;
            p{
                width: 105px;
            }
            input{
                flex:1;
                border-radius: 0;
                border: 0;
                height:27px;
                line-height: 27px;
                outline: 0;
            }
        }
        .saveBtn{
            padding: 0 20px;
            margin-top: 50px;
        }
    }
    .regionHeader{
        height: 45px;
        width: 100%;
        border-bottom: 1px solid #ff8600;
        display: flex;
        align-items: center;
        font-size: 16px;
        p{
            flex:1;
        }
        i{
            width:30px;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>

