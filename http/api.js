import axios from "axios";

export const authApi = axios.create({
    withCredentials: true,
	baseURL: `${'http://localhost:4000'}/api`
});

authApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

authApi.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${'http://localhost:4000'}/api/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return authApi.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    if(error.response.status != 401){
        return error.config;
    }
});


export const api = axios.create({
    baseURL: `${'http://localhost:4000'}/api`
});

