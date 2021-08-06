import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface IState{
    name: string;
    surname: string;
    email: string;
    phone: number;
    password: string;
    secondPassword: string;
    birthday: IGender,
    gender: number
}

interface IGender{
    day: number;
    month: number;
    year: number;
}

const initialState: IState = {
    name: "",
    surname: "",
    email: "",
    phone: 0,
    password: "",
    secondPassword: "",
    birthday: {
        day: 1,
        month: 0,
        year: 2021
    },
    gender: 0
}

const signup = createSlice({
  	name: 'signup',
  	initialState,
  	reducers: {
	    setName(state, action){
            state.name = action.payload;
        },
        setSurname(state, action){
            state.surname = action.payload;
        },
        setEmail(state, action){
            state.email = action.payload;
        },
        setPhone(state, action){
            state.phone = action.payload;
        },
        setPassword(state, action){
            state.password = action.payload;
        },
        setSecondPassword(state, action){
            state.secondPassword = action.payload;
        },
        setBirthday(state, action){
            state.birthday = action.payload;
        },
        setGender(state, action){
            state.gender = action.payload;
        }
  	},
	extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.signup,
            }
        },
    },
})

export const {
	setName,
    setSurname,
    setEmail,
    setPhone,
    setPassword,
    setSecondPassword,
    setBirthday,
    setGender
} = signup.actions;

export default signup.reducer;