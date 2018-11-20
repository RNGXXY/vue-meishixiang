import _ from 'lodash'

const api = {
    addGoods({id,name,price,count=1,imgUrl}){
        return new Promise(resolve=>{
            setTimeout(async ()=>{
                // 1、先获取数据库中的数据
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
                let { payments } = await this.getGoods()
                let payment = _.find(payments, item => item.id===id )
                
                payment.count += isAdd 

                if (payment.count <= 0) {
                    _.remove(payments, item => item.id===id )
                }

                this.updataGoods(payments)

                resolve({
                    status:200,
                    payments
                })
            },200)
        })
    },

    // 结算并存入数据库
    settleAccounts({time}){
        return new Promise(resolve=>{
            setTimeout(async ()=>{
                let consumption  =[]
                let  { payments } =await this.getGoods()
                payments.forEach(item=>{
                    item.time = time
                    consumption.unshift(item)
                })
                // _.forEach( payments , item=>
                //     item.time = time ,
                //     consumption.unshift(item)
                // )
                // let consumption = payments
                this.saveSettleAccounts(consumption)
                let { currentConsumption } =await this.getSettleAccounts()
                payments = []
                this.updataGoods(payments)
                console.log(currentConsumption)
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