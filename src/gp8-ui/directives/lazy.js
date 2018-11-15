
// 监听滚动条的距离后，控制img区添加src属性
const lazy = (vue)=>{

    var hanler = (el,binding)=>{
        judgeDistance(el,binding)
    }

    Vue.directive('gp8-lazy',{
        bind(el,binding){
            // 绑定后只执行一次
            console.log('bind')
            el.handler = handler
            window.addEventListener('scroll',hanler)
        },
        inserted(el,binding){
            el.style.backgroundColor = 'red';
            // judgeDistance(el,binding)
            handler = hanler.bind(el,binding)
            hanler()
            // 只要出现在页面中就会执行
        },
        unbind(){
            // 解绑时执行（组件销毁）
            window.removeEventListener('scroll',)
        }
    })

    function judgeDistance(el,binding){
        let page = el.offectTop
        let scrollTop = document.documentElement.scrollTop
        let clientHeight  =document.documentElement.clientHeight
        let distance = 50
        if(page - (scrollTop + clientHeight + distance) <= 0 && !el.src){
            el.src = binding.value
        }
        
    }
}