const getters = {
    total(state){
        let totalCount = 0
        let totalPrice = 0
        if (state.payments.length) {
            state.payments.forEach(item => {
                totalCount += item.count
                totalPrice += Math.round((item.count * item.price) * 100) / 100
            });
        }
        return { totalCount , totalPrice }
    }
}

export default getters