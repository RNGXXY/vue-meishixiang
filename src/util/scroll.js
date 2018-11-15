
import BetterScroll from 'better-scroll'

const scroll = (
    {
        el, // 拉动刷新的元素
        handler,
        onscroll
    }
)=>{
    
    let scroll = new BetterScroll(el,{
        probeType: 2,
        pullUpLoad: { //配置上拉加载
            threshold: 50 // 距离底部多少距离
        },
        click: true
    })

    scroll.on('pullingUp',async()=>{    //下拉加载
        await handler()     //请求数据
        scroll.finishPullUp() // 解决拉动刷新，上拉加载完数据后告诉scroll可以继续请求数据了，否则无法进行下一次请求
        scroll.refresh() // 重新计算
    })
    scroll.on('scroll', () => {     //滚动事件
        onscroll(scroll.y)  //滚动到哪里
    })
    return scroll
} 

export default scroll 