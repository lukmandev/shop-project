import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
 	isAuth: false,
    authInfoLoaded: false,
    userProfile: null
}

const home = createSlice({
  	name: 'auth',
  	initialState,
  	reducers: {
	    setAuthInfo(state, action){
            state.isAuth = action.payload;
        },
        setAuthLoaded(state, action){
            state.authInfoLoaded = action.payload;
        },
        setUserProfile(state, action){
            state.userProfile = action.payload;
        }
  	},
	extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.auth,
            }
        },
    },
})

export const {
	setAuthInfo,
	setAuthLoaded,
	setUserProfile
} = home.actions
export default home.reducer;