import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
 	cart: {},
 	wishlist: {},
 	cartIsLoaded: false,
 	wishlistIsLoaded: false,
 	
 	allCatalogLoaded: false,
 	allCatalogInfo: null 
}

const main = createSlice({
  	name: 'main',
  	initialState,
  	reducers: {
	    setCart(state) {
	    	state.value++
	    },
	    setWishlist(state, action) {
	        state.cart = action.payload;
	    },
	    setCartLoaded(state, action){
	    	state.cartIsLoaded = action.payload;
	    },
	    setWishlistLoaded(state, action){
	    	state.wishlistIsLoaded = action.payload;
	    },
	    setAllCategoryLoaded(state, action){
	    	state.allCatalogLoaded = action.payload;
	    },
	    setAllCategory(state, action){
	    	state.allCatalogInfo = action.payload;
	    }
  	},
	extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.main,
            }
        },
    },
})

export const {
	setCart, 
	setWishlist, 
	setCartLoaded, 
	setWishlistLoaded,
	setAllCategoryLoaded,
	setAllCategory 
} = main.actions;

export default main.reducer;