<template>
    <div class="app-meal-food-list">
        <div class="meal-right">
            <div v-if="menu.length" class="meal-right-scroll">
                <ul class="meal-right-list" v-for="val in menu" :key="val._id">
                    <app-meal-food-item :id="id" :shopName="shopName" :value="val"></app-meal-food-item>
                </ul>
            </div>
            <div v-else class="notOpened">暂未开业，敬请期待</div>
        </div>
    </div>
</template>

<script>
import AppMealFoodItem from "./AppMealFoodItem";

import infos from "@util/json/moke.json";
export default {
  components: {
    AppMealFoodItem
  },
  data() {
    return {
      menu: []
    };
  },
  props: ["id", "shopName"],
  async created() {
    let resData = await this.$http({
      url: "/cms/api/v1/menu/listByShop",
      method: "POST",
      data: {
        shopId: this.id
      }
    });
    this.menu = resData;
  }
};
</script>

<style lang="scss">
.app-meal-food-list {
  width: 7.253333rem;
  margin: 0 auto;
  .meal-right {
    .meal-right-scroll {
      .meal-right-list {
      }
    }
  }
}
.notOpened{
    height: 2.666667rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:16px;
}
</style>
