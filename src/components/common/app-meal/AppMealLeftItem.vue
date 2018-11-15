<template>
    <li ref="active" class="meal-left-item " @click="addActive">
        <div class="meal-left-item-title">
            <span>{{infoType.name}}</span>
        </div>
    </li>
</template>

<script>
export default {
    props:['infoType'],
    methods:{
        addActive(){
            this.$refs.active.classList.add('meal-left-item-active')
        }
    }
}
</script>


<style lang="scss">
    .meal-left-item{
        height: 2.053333rem;
        width: 100%;
        background: url('/images/menu.png') no-repeat;
        background-size: 80%;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        .meal-left-item-title{
            padding: 0 .266667rem;
            color: #ffffff;
            font-size: 14px;
            text-align: center;
        }
    }
    .meal-left-item-active{
        background: url('/images/menu_selected.png') no-repeat;
        background-size: 80%;
        background-position: center;
    }
</style>
