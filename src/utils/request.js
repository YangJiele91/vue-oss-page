import axios from 'axios';
import router from "../router";

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    baseURL: '/api',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        if (localStorage.getItem("token")) {
            config.headers.Authorization = localStorage.getItem("token");
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                router.push("/login");
            }
        }
        console.log(error);
        return Promise.reject();
    }
);

export default service;
