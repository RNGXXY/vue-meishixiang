const path = require('path')

function resolve(url){
    return path.resolve(__dirname,url)
}

module.exports={
    devServer:{
        port:8000,
        proxy:{
            '/waimai':{
                target:'https://h5.ele.me/restapi/shopping/',
                changeOrigin:true,
                pathRewrite:{
                    '^/waimai': ''
                }
            },
            '/banner':{
                target:'http://jyj.4008-197-197.com/',
                changeOrigin:true,
                pathRewrite:{
                    '^/banner': ''
                }
            }
        }
    },
    // chainWebpack进行webpack中多个选项的配置
    chainWebpack(config){
        // resolve.alias（控制模块引入的别名）
        config.resolve
              .alias
              .set('@styles',resolve('src/stylesheets'))
              .set('@libs',resolve('src/libs'))
              .set('@c',resolve('src/components')) 
              .set('@pages',resolve('src/pages'))
              .set('@util', resolve('src/util'))
    }
}

