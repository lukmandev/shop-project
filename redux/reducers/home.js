import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { allProduct } from '../../constants/home';

const initialState = {
 	activeTab: allProduct,
 	tabProducts: null,
 	tabProductsLoaded: false
}

const home = createSlice({
  	name: 'home',
  	initialState,
  	reducers: {
	    setActiveTab(state, action){
	    	state.activeTab = action.payload;
	    },
	    setTabProducts(state, action){
	    	state.tabProducts = action.payload;
	    },
	    setTabProductsLoaded(state, action){
	    	state.tabProductsLoaded = action.payload;
	    }
  	},
	extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.home,
            }
        },
    },
})

export const {
	setActiveTab,
	setTabProducts,
	setTabProductsLoaded
} = home.actions
export default home.reducer;