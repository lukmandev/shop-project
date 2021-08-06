import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputMask from 'react-input-mask';

import { InputsInfo } from "../constants/signup";
import AuthService from '../services/auth';
import Layout from '../components/global/Layout';



const SignUp: NextPage = () => {
    const router = useRouter();

    const dispatch = useDispatch();
    const state = useSelector(state => {
        return {
            isAuth: state.auth.isAuth,
            authInfoLoaded: state.auth.authInfoLoaded,
            signup: state.signup
        }
    });


    const [hasError, setHasError] = useState<boolean>(false);
    const [errorKeys, setErrorKeys] = useState<[]>([]);

    // 'FETCH TO SERVER'
    const fetchToCreate = useCallback(async (info) => {
        const resp = await api.post('/auth/register', info);
    }, []);


    // 'HANDLERS'
    const createUser = (e) => {
        // e.preventDefault();
        // const {
        //     name,
        //     surname,
        //     email,
        //     password,
        //     secondPassword,
        // } = state.signup;
        // const info = {
        //     name,
        //     surname,
        //     email,
        //     password,
        //     secondPassword
        // }
        // let index = 0;

        // const errorArray: [] = [...errorKeys];
        // for(let i in info){
        //     if(info.hasOwnProperty(i)){
        //         if(!info[i].trim() && !info[i].trim().length){
        //             index++;
        //             errorArray.push({
        //                 key: i,
        //                 message: 'This field is empty'
        //             });
        //         }
        //     }
        // }
        // setErrorKeys(errorArray);
        // if(index){
        //     console.log('ALL IS GOOD')
        // }
        AuthService.register();
    }


    // if(state.authInfoLoaded){
    //     if(state.isAuth){
    //         router.push('/');
    //     }
    // }else{
    //     return <h1>LOADING ...</h1>
    // }
    return (
        <Layout>
        {/*====== Section 1 ======*/}
            <div className="u-s-p-y-60">
                {/*====== Section Content ======*/}
                <div className="section__content">
                <div className="container">
                    <div className="breadcrumb">
                    <div className="breadcrumb__wrap">
                        <ul className="breadcrumb__list">
                        <li className="has-separator">
                            <a href="index.html">Home</a></li>
                        <li className="is-marked">
                            <a href="signup.html">Signup</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/*====== End - Section 1 ======*/}
            {/*====== Section 2 ======*/}
            <div className="u-s-p-b-60">
                {/*====== Section Intro ======*/}
                <div className="section__intro u-s-m-b-60">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section__text-wrap">
                        <h1 className="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====== End - Section Intro ======*/}
                {/*====== Section Content ======*/}
                <div className="section__content">
                <div className="container">
                    <div className="row row--center">
                    <div className="col-lg-6 col-md-8 u-s-m-b-30">
                        <div className="l-f-o">
                        <div className="l-f-o__pad-box">
                            <h1 className="gl-h1">PERSONAL INFORMATION</h1>
                            <div className="l-f-o__form">
                            <div className="gl-s-api">
                                <div className="u-s-m-b-15">
                                <button className="gl-s-api__btn gl-s-api__btn--fb" type="button"><i className="fab fa-facebook-f" />
                                    <span>Signup with Facebook</span></button></div>
                                <div className="u-s-m-b-30">
                                <button className="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i className="fab fa-google" />
                                    <span>Signup with Google</span></button></div>
                            </div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="reg-fname">FIRST NAME *</label>
                                <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="First Name" /></div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>
                                <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Last Name" /></div>
                            <div className="gl-inline">
                                <div className="u-s-m-b-30">
                                {/*====== Date of Birth Select-Box ======*/}
                                <span className="gl-label">BIRTHDAY</span>
                                <div className="gl-dob"><select className="select-box select-box--primary-style">
                                    <option selected>Month</option>
                                    <option value="male">January</option>
                                    <option value="male">February</option>
                                    <option value="male">March</option>
                                    <option value="male">April</option>
                                    </select><select className="select-box select-box--primary-style">
                                    <option selected>Day</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    </select><select className="select-box select-box--primary-style">
                                    <option selected>Year</option>
                                    <option value="1991">1991</option>
                                    <option value="1992">1992</option>
                                    <option value="1993">1993</option>
                                    <option value="1994">1994</option>
                                    </select></div>
                                {/*====== End - Date of Birth Select-Box ======*/}
                                </div>
                                <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="gender">GENDER</label><select className="select-box select-box--primary-style u-w-100" id="gender">
                                    <option selected>Select</option>
                                    <option value="male">Male</option>
                                    <option value="male">Female</option>
                                </select></div>
                            </div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="reg-email">E-MAIL *</label>
                                <input className="input-text input-text--primary-style" type="text" id="reg-email" placeholder="Enter E-mail" /></div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="reg-password">PASSWORD *</label>
                                <input className="input-text input-text--primary-style" type="text" id="reg-password" placeholder="Enter Password" /></div>
                            <div className="u-s-m-b-15">
                                <button className="btn btn--e-transparent-brand-b-2" onClick={createUser} type="submit">CREATE</button></div>
                            <a className="gl-link" href="#">Return to Store</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====== End - Section Content ======*/}
            </div>
            {/*====== End - Section 2 ======*/}
        </Layout>
    )
}

export default SignUp;