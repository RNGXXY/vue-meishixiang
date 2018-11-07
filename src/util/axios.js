import axios from 'axios'

const ajax = (options)=>{
    return new Promise((resolve,rejected)=>{
        let _react = options.react === undefined ? true : options.react
        axios(options)
        .then(res=>{
            if(res){
                if(_react) console.log('数据获取成功')
            }else{
                if(_react) console.log('数据获取失败')
            }
            resolve(res.data)
        })
        .catch(err=>{
            console.log('数据请求失败')
            rejected(err)
        })
    })
}

export default ajax
