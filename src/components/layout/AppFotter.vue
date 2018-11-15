<template>
    <footer id="app-footer">
        <div class="footer-main">
            <router-link class="footer-item" tag = "div" :to = "nav.path" 
                active-class="select"
                v-for='nav in navs'
                :key='nav.id'
            >
                <div class="footer-icon">
                    <i :class="nav.iclass"></i>
                </div>
                <div class="footer-content ">{{nav.title}}</div>
            </router-link>
        </div>
    </footer>    
</template>

<script>
export default {
    data(){
        return{
            navs:[
                { id: 1, title: '首页', path: '/home' ,iclass:'fa fa-home'},
                { id: 2, title: '店铺', path: '/order/0' ,iclass:'fa fa-file-text-o'},
                { id: 3, title: '我的', path: '/mine' ,iclass:'fa fa-user-o'}
            ]
        }
    }
}
</script>

<style lang="scss">

    #app-footer{
        height: 1.6rem;
        width: 100%;
        background: skyblue;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 10;
        background: url('/images/footer.png');
        .footer-main{
            height: 100%;
            display: flex;
            justify-content: space-around;
            .footer-item{
                width: auto;
                height: auto;
                padding: 0 .4rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                .footer-icon{
                    font-size: .8rem;
                }
                .footer-content{
                    font-size: .32rem;
                    font-weight: bold;
                    font-family: "Microsoft Yahei"
                }
            }
            .select{
                border-radius: 13px;
                background: #004098;
                color: #FAEE02;
                    
            }
        }
    }
</style>
