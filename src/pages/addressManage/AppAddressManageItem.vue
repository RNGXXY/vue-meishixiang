<template>
    <div ref="addressManageItem" class="addressManageItem">
        <div class="addressManageContent">
            <div class="addressManageName">
                <p>{{data.cityName}}</p>
                <p>{{data.areaName}}</p>
                <p>{{data.detailedAddress}}</p>
            </div>
            <div class="addressManageUser">
                <p>{{data.contacts}}</p>
                <p>{{data.phoneNumber}}</p>
            </div>
        </div>
        <div class="addressManageOperation">
            <p v-if="data.isDefault">默认</p>
            <i class="fa fa-window-close-o" @click="sureRemove=true"></i>
        </div>
        <transition enter-active-class="fadeIn" leave-active-class="fadeOut" transform:all 1s>
            <div class="mask animated" v-if="sureRemove" @click="sureRemove=false">
                <div class="delete" @click="todelete(data._id)">
                    <i class="fa fa-times-circle-o"></i>
                    <span class="disLiked">确定删除</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import axios from '@util/axios'

export default {
  props:["data"],
  data() {
    return {
      sureRemove: false
    };
  },
  methods: {
    async todelete(id) {
      await axios({
        url:'/cms/api/v1/address/deleteOne',
        method:'DELETE',
        data:{
          id
        }
      })
      this.$destroy(); //销毁组件的方法
    }
  },
    beforeDestroy(){
        this.$el.remove()
    }
};
</script>

<style lang="scss" scoped>
.addressManageItem {
  height: 2.666667rem;
  display: flex;
  border-bottom: 1px dashed gray;
  position: relative;
}
.addressManageContent {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .addressManageName {
    font-size: 16px;
    display: flex;
    p {
      margin-right: 0.533333rem;
    }
  }
  .addressManageUser {
    display: flex;
    p {
      margin-right: 0.533333rem;
    }
  }
}
.addressManageOperation {
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p{
    color:blue;
  }
}
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .delete {
    width: 2.666667rem;
    height: 1.333333rem;
    background:rgba(255,255,255,0.3);
    border-radius: .266667rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
  }
}
</style>
