import _ from 'lodash'

const api = {
    // 向购物车中增加一条数据
    addGoods({id,name,price,count=1,imgUrl}){
        // 返回一个promise对象,方便前端调用
        return new Promise(resolve=>{
            // 模拟后端请求接口
            setTimeout(async ()=>{
                // 1、先获取数据库（本地存储机制）中的数据
                let { payments } = await this.getGoods()
                // 2、判断数据库中是否已经存在该id的东西
                let payment = _.find(payments,item=>item.id===id)
                // 3、有就增加数量，没有就新增一条
                if (payment) {
                    payment.count += count
                } else {
                    payments.unshift({
                        id,name,price,count,imgUrl
                    })
                }
                // 4、更新数据库
                this.updataGoods(payments)
                // 5、响应请求 
                resolve({
                    status:200,
                    payments 
                })
            },200)
        })
    },

    // 获取数据库信息
    getGoods(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve({
                    status:200,
                    payments : localStorage.payments ? JSON.parse( localStorage.payments ) : [] 
                })
            },200)
        })
    },

    // 更新数据库
    updataGoods(payments){
        localStorage.payments = JSON.stringify(payments)
    },

    // 更改商品数量
    updateGoodsCount({id,isAdd}){
        return new Promise(resolve=>{
            setTimeout( async ()=>{
                // 1、从数据库中获取数据
                let { payments } = await this.getGoods()
                let payment = _.find(payments, item => item.id===id )
                // 2、改变数量，isAdd = 1/-1
                payment.count += isAdd 
                // 3、如果为0 了，就从数据库中删除这一商品
                if (payment.count <= 0) {
                    _.remove(payments, item => item.id===id )
                }
                // 4、更新数据库
                this.updataGoods(payments)
                // 5、响应请求
                resolve({
                    status:200,
                    payments
                })
            },200)
        })
    },

    // 结算，将订单数据存到消费记录中，然后清空订单数据，(*^▽^*)
    settleAccounts({time}){
        return new Promise(resolve=>{
            setTimeout(async ()=>{
                // 1、来个消费记录
                let consumption  =[]
                // 2、获取订单数据
                let  { payments } =await this.getGoods()
                // 3、拷贝
                payments.forEach(item=>{
                    item.time = time
                    consumption.unshift(item)
                })
                // 4、结算，并将数据保存到数据库当中
                this.saveSettleAccounts(consumption)
                // 5、结算完后获取一下消费记录数据，要返回给前端
                let { currentConsumption } =await this.getSettleAccounts()
                // 6、清空订单
                payments = []
                // 7、更新订单数据库
                this.updataGoods(payments)
                // 8、响应请求，返回数据
                resolve({
                    status:200,
                    currentConsumption,
                    payments
                })
            },200)
        })
    },

    // 将结算存入消费记录,并做更新
    async saveSettleAccounts(thisConsumption){ 
        // 上一次更新的消费记录
        let { currentConsumption } =await this.getSettleAccounts()
        // console.log(thisConsumption,currentConsumption)
        // 这一次的加上上一次的
        let thisSettleAccounts = _.concat( thisConsumption , currentConsumption )
        localStorage.setItem('consumption',JSON.stringify(thisSettleAccounts))
        return thisSettleAccounts
    },

    //获取消费记录 
    getSettleAccounts(){
       return new Promise (resolve=>{
            setTimeout(()=>{
                resolve({
                    status:200,
                    currentConsumption : localStorage.consumption ? JSON.parse( localStorage.consumption ) : [] 
                })
            },200)
       })
    }
}

export default api  