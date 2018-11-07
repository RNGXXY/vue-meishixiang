<template>
    <div class="app-meal">
        <div class="meal-ad">
            <i class="fa fa-bullhorn"></i>
            <p> 1.餐厅外送时间30分钟送达
                2.大份订餐20份以上，可提前一天进行预订
                3.本店使用电子票据，请按照指引自行开票
                4.吉野家外送产品收取餐盒费，主餐产品收取1元，火锅产品收取3元，谢谢</p>
        </div>
        <div class="hot-seal">
            <div class="hotCakes">
                <div class="ng-binding">门店</div>
                <div class="ng-binding">热销</div>
            </div>
            <div class="seal-list">
                <div class="seal-item">
                    <div class="item-img">

                    </div>
                    <div class="item-name">
                        aa
                    </div>
                    <div class="item-price">
                        ￥<span>22</span>
                    </div>
                    <div class="item-order">
                        <span>选套餐</span>
                        <i>v</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss">
    .app-meal{
        .meal-ad{
            height: .533333rem;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .373333rem;
            color: #ffffff;
            p{
                width: 8rem;
                height: 100%;
                line-height: 20px;
                margin: 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-left: .266667rem;
            }
        }
        .hot-seal{
            height: 5.2rem;
            padding: .266667rem 0;
            position: relative;
            .hotCakes{
                background: #EF7F1D;
                color: #fff;
                border-radius: 50%;
                height: 40px;
                width: 40px;
                position: absolute;
                top: -22px;
                left: 0;
                z-index: 3;
                word-wrap: break-word;
                font-size: 14px;
                text-align: center;
                padding: 2px;

            }
            .seal-list{
                .seal-item{
                    border-radius: 15px;
                    margin: 0 5px;
                    padding: 10px;
                    width: 120px;
                    height: 175px;
                    box-shadow: 0 0 5px #888888;
                    color: #333333;
                    .item-img{
                        height: 2.133333rem;
                        width: 2.133333rem;
                        margin: 0 auto;
                        img{
                            height: 100%;
                            width: 100%;
                        }
                    }
                    .item-name{
                        height: .666667rem;
                        line-height: .666667rem;
                        text-align: center;
                        border-top: 2px solid #EF7F1D;
                        font-size: .373333rem;
                    }
                    .item-price{
                        height: .586667rem;
                        line-height: .586667rem;
                        text-align: right;
                        font-size:.48rem;
                        font-weight: bold;
                    }
                    .item-order{
                        height: .693333rem;
                        width: 1.84rem;
                        padding: .053333rem;
                        color: #FFF;
                        font-size: 13px;
                        border: #EF7F1D 2px solid;
                        background: #EF7F1D;
                        font-size: 13px;
                        border-radius: 12px;
                        float: right;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                }
            }
        }
    }
</style>
