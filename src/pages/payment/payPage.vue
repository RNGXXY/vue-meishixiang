<template>
  <div ref="payPage" class="payPage">
       <div class="payWrap">
        <div class="logoWrap" >
            <img src="/images/paylogo.jpg" class="logo">
            <h3 class="title">支付吧</h3>
        </div>
        <div class="showWrap">
            <p class="price">￥{{payPrice}}</p>
            <div class="formWrap">
                <input type="password" maxlength="6" ref="passWord" class="payNum" placeholder="支付密码" v-model='passWord' />
                <button id='reset' type="reset"  @click='payMoney'>支付</button>
            </div>
            <div class="inform">
                <p v-if="payState=='success'" class="paySuccess">{{payContent}}</p>
                <p v-else-if="payState=='fail'" class="payFail">{{payContent}}</p> 
            </div>
        </div>
        <div class="workWrap">
            <div class="keyBoard" 
                v-for="item in keyBoards"
                @click='handlePassWord'
                :key='item.index'>
                {{item}}
                
            </div>
        </div>
    </div>
  </div>
</template>


<script>
    export default {
        data(){
            return{
                keyBoards:['1','2','3','0','4','5','6','←','7','8','9','清空'],
                passWord:'',
                payState:'',
                payContent:''
            }
        },
        props:['payPrice','handlePayPage'],
        mounted(){ 
            this.$refs.payPage.style.width = window.innerWidth + 'px'
            this.$refs.payPage.style.height = window.innerHeight + 'px'
        },
        methods:{
            handlePassWord(e){
                let keyWord = e.target.innerText
                switch (keyWord){
                    case '←' :
                        if(this.passWord){
                            this.passWord = this.passWord.slice(0,this.passWord.length-1) 
                        }
                        break;
                    case '清空' :
                        this.passWord = ''
                        break;
                    default :
                        if(this.passWord.length <6){
                            this.passWord += keyWord
                        }
                        break;
                }
            },

            payMoney(){
                if(this.passWord.length<6 || this.passWord!='111111'){
                    this.payState = 'fail'
                    this.payContent = '密码错误'
                    setTimeout(()=>{
                        this.payState = ''
                        this.payContent = ''
                    },1500)
                }else if(this.passWord=='111111'){
                    this.payState = 'success'
                    this.payContent = '支付成功'
                    setTimeout(()=>{
                        this.payState = ''
                        this.payContent = ''
                        this.passWord = ''
                        this.handlePayPage()
                    },1500)
                }
            }
        }
     }
</script>

<style lang="scss">
    .payPage{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9999;
        background: white;
    }
    .payWrap{
        width:100%;
        height: 100%;
        display: flex;  
        flex-direction: column;
        background-image: url('/images/paybj.jpg');
        background-size: contain;
    }
    .payWrap >div{
        width: 100%;
    }
    .formWrap{
        width: 100%;
    }
    .logoWrap{
        height: 30%;
        display: flex;  
        align-items: center;
        justify-content: center;
    }
    .logo{
        width: 100px;
        height: 100px;
        border-radius: 22px;
    }
    .title{
        height: 100px;
        width: 200px;
        line-height: 100px;
        text-align: center;
        font-size: 40px;
        font-family: '楷体';
        color:white;
    }
    .showWrap{
        height: 30%;
        display: flex;  
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }
    .formWrap{
        display: flex;  
        align-items: center;
        justify-content: space-around;
    }
    .payNum{
        width:200px;
        height:50px;
        font-size: 30px;
        border:1px dotted;
        border-radius: 10px;
        outline:none;
        padding: 0 10px;
    }
    [type='reset']{
        height:40px;
        width:60px;
        outline:none;
        background: skyblue;
        border-radius: 10px;
        color: blanchedalmond;
        font-size: 18px;
    }
    .workWrap{
        height: 40%;
        display: flex;
        flex-wrap: wrap;
    }
    .keyBoard{
        display: flex;
        width: 25%;
        height:33%;
        border: 1px solid gray;
        background: rgba(255,255,255,0.6);
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        color: blue;
        font-size: 20px;
        &:active{
            background: tomato;
        }
    } 

    .inform{
        height: 30%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .paySuccess,.payFail{
        padding: 10px 20px;
        border-radius: 10px;
        background: green;
        position: absolute;
        /* display: none; */
        /* visibility: hidden; */
    }

    .payFail{
        background: red;
    }
    .price{
        font-size: 25px;
    }
</style>
