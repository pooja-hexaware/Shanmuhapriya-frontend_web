import { configureStore } from '@reduxjs/toolkit'
import RestaurantReducer from '../components/restaurants/store/RestaurantSlice'
import MenuReducer from '../components/menu/store/MenuSlice'
import ToppingReducer from '../components/topping/store/ToppingSlice'
import cartReducer from '../components/cart/store/cartSlice'

const store =  configureStore({
    reducer: {
        Restaurant: RestaurantReducer,
        Menu: MenuReducer,
        Topping: ToppingReducer,
        Cart: cartReducer
    },
})

export default store;
