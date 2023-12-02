import {configureStore} from "@reduxjs/toolkit"
import wishlist from "./Slice/wishlist"
import cartSlice from "./Slice/cartSlice"
const store=configureStore({
    reducer:{
        wishlistReducer:wishlist,
        cartReducer:cartSlice

    }
})
export default store
