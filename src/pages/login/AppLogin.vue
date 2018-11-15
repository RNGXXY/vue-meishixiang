<template>
    <div id="app-login">
        <form @submit.prevent='login' class="login-form">
            <div class="login-title">
				<h4>欢迎来到吉野家</h4>
			</div>
            <div class="header_right">
				<div class="login_phone list-inset ">
					<label class="item item-phone">
						<input type="text" name="phone" v-model="phone"  placeholder="请输入正确手机号码"  required="" class="ng-pristine">
					</label>
				</div>
				<div class="list-inset">
					<div class="login_yznum">
                        <label class="item item-yznum">
                            <input v-model="code" type="password"  placeholder="请输入验证码"  class="">
                        </label>
                        <div class="login_verification"  @click="getCode">
                            <div class="login-button getYzm" >{{isResend?'重发('+resendTime+'s)':'发送验证码'}}</div>
                        </div>
                    </div>
				</div>  
			</div>
            <div class="goLogin">
                <button type="submit" class="login-button ">登录</button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    data(){
        return {
            isCodeShow: false,
            phone:'',
            isResend: false,
            resendTime: 30,
            code:'',
            isSendCode:false
        }
    },
    methods:{
        // getCode(){
        //     this.$http({
        //         url:'/jiyejia/Action',
        //         method:'POST',
        //         params:{
        //             serviceId:'4',
        //             actionId:'59',
        //             key:'132205579c6b7611',
        //             langType:'0'
        //         },
        //         data:{
        //             mobile: this.phone
        //         }
        //     }).then(res=>{
        //         console.log(11,res)
        //     })
        // },
        // 获取验证码
        async getCode(){
            if (this.isResend) return false;
            let res = await this.$http({
                url:'/mz/v4/api/code',
                method:'POST',
                data:{      
                    mobile:this.phone,
                    type: "2"
                }
            },true)
            if(res.data.status === 0){
                this.isSendCode = true
                this.authCode()
            }          
        },
        // 登录验证
        async login(){
            let res = await this.$http({
                url: '/mz/v4/api/login',
                method: 'POST',
                data: {
                    // "2f3ee20be6a12d25c541a3d1dfe2f839"
                    loginType: 1,
                    password: this.code,
                    username: this.phone
                }
            }, true)
            // console.log(res.data)
            if ( res.data.status && this.code!="") { // 验证码发送成功
                
            //     // 存储
                let info = {
                    phone:this.phone
                }
                localStorage.setItem('userInfo',JSON.stringify(info))
            //     for (const key in res.data.data.data) {
            //         this.$cookies.set(key, res.data.data.data[key])
            //     }

                this.$router.back()
            }else{
                console.log('shuruyanzhengma')
            }
        },
        // 开始倒计时
        authCode(){
            this.isResend = true
            this.timer = setInterval(() => {
                this.resendTime --
                if ( this.resendTime === 0 ) {
                    clearInterval(this.timer)
                    this.isResend = false
                    this.resendTime = 30
                }
            },1000)
        }
    },
    watch:{
        phone:{
            handler(val){
                let result = /^1[34578]\d{9}$/.test(this.phone.trim())
                this.isCodeShow =result
            }
        }
    },
    mounted(){
         this.$parent.$refs.header.isbackhome=true
    },
    beforeDestroy(){
        this.$parent.$refs.header.isbackhome=false
    }
}
</script>


<style lang="scss">
    #app-login{
        .login-form{
            height: 9.466667rem;
            width: 9.466667rem;
            margin: 0 auto;
            margin-top: .8rem;
            border-radius: 10px;
            box-shadow: 0px 0px 8px #888888;
            padding: .266667rem;
            .login-title{
                height: 1.6rem;
                line-height: 1.066667rem;
                color: #EF7F1D ;
                font-size: 25px;
                padding: .266667rem 0;
                text-align: center;
            }
            .header_right{
                height: 4rem;
                .list-inset{
                    height: 50%;
                    font-size: 14px;
                    color: #333;
                    padding-top: .266667rem;
                    display: flex;
                    flex-direction: column-reverse;
                    .item{
                        height: 1.093333rem;
                        border-bottom: 1px #EF7F1D solid;
                        padding: 0 .266667rem;
                        input{
                            width: 100%;
                            height: 100%;
                            border: none;
                            outline: none;
                        }
                    }
                    .item-yznum{
                        width: 5.733333rem;
                        margin-right: .266667rem;
                    }
                    
                    .login_yznum{
                        display: flex;
                        justify-content: space-between;
                        .login_verification{
                            flex-grow: 1;
                            .getYzm{
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center
                            }
                        }
                    }
                }
            }
            .login-button{
                background: #EF7F1D;
                color: #ffffff;
                border-radius: 10px;
                font-size: 16px;
                outline: none;
            }
            .goLogin{
                height: 4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                button{
                    height: 1.173333rem;
                    width: 4.8rem;
                    padding: 0 .106667rem;
                }
            }
        }
    }
</style>
