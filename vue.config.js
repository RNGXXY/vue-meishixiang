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
            '/eleme':{
                target:'https://h5.ele.me/',
                changeOrigin:true,
                pathRewrite:{
                    '^/eleme': ''
                }
            },
            '/eus':{
                target:'https://h5.ele.me/restapi/eus',
                changeOrigin:true,
                pathRewrite:{
                    '^/eus': ''
                }
            },
            '/pizza':{
                target:'https://h5.ele.me/pizza/shopping/',
                changeOrigin:true,
                pathRewrite:{
                    '^/pizza': ''
                }
            },
            '/jiyejia':{
                target:'http://jyj.4008-197-197.com/',
                changeOrigin:true,
                pathRewrite:{
                    '^/jiyejia': ''
                }
            },
            '/mz': {
                target: 'https://m.maizuo.com/',
                changeOrigin: true,
                pathRewrite: {
                  '^/mz': ''
                }
            },
            '/bd': {
                target: 'http://api.map.baidu.com/',
                changeOrigin: true,
                pathRewrite: {
                  '^/bd': ''
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
              .set('@store', resolve('src/store'))
    }
}

