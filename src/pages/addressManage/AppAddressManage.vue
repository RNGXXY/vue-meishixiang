<template>
    <div class="addressManageWrap">
        <div v-if="address.addressList.length" class="addressManageList">
            <div 
                v-for="(item,index) in address.addressList"
                :key = "index"
            >
                <app-address-manage-item :data="item"/>
            </div>
        </div>
        <div v-else>
            <img src="/images/empty.jpg"/>
        </div>
        <div class="addressManageFooter" @click="toAppAddressAdd">
            <p>新增地址</p>
        </div>
    </div>
</template>

<script>
import AppAddressManageItem from './AppAddressManageItem';
import { mapState , mapMutations , mapActions, mapGetters} from 'vuex'

export default {
    components:{
        AppAddressManageItem
    },
    methods: {
        ...mapActions({
            getAddressListByUser:'address/getAddressListByUser'
        }),
        toAppAddressAdd(){
            this.$router.push({name:'addressAdd'})
        }
    },
    computed:{
        ...mapState(['address']),
        
    },
    data() {
        return {
            arr:[1,2,3,4,5,6,7,8,9]
        }
    },
    mounted(){
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        this.getAddressListByUser({
            userId:userInfo._id
        })
    }
}
</script>

<style lang="scss">
    .addressManageWrap{
        position: relative;
        .addressManageList{
            padding:0 .266667rem;
            
        }
    }
    .addressManageFooter{
        height:1.6rem;
        position: fixed;
        left: 0;
        bottom:0;
        right:0;
        background: #ff8600;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            color: #fff;
            font-size: 20px;
        }
    }
</style>
