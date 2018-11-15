import { CHANGE_CITY } from '../chunks/muntation-types'


const saveCityInStorage = (store)=>{
    store.subscribe((mutations,state)=>{
        if (mutations.type === 'chunks/'+ CHANGE_CITY) {
            if (mutations.payload.cities) localStorage.cities = JSON.stringify(mutations.payload.cities);
            localStorage.city = JSON.stringify(mutations.payload.city)
        }
    })
}

export { saveCityInStorage }  