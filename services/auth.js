import axios from "axios"

import { api } from '../http/api';


class AuthService{
    async register(){
        try {
            const res = await api.post('/auth/register');
            console.log(res)
        } catch (e) {
            console.log(e);
        }      
    }
}


export default new AuthService();