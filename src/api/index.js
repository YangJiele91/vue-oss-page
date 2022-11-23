import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const loginCheck = query => {
    return request({
        url: './user-service/user/login',
        method: 'post',
        params: query
    });
};

export const logoutCheck = query => {
    return request({
        url: './user-service/user/logout',
        method: 'post',
        params: query
    });
};