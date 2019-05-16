import Home from '../component/home/index.js';
import Login from '../component/login/index.js';
import Detail from '../component/detail/index.js';

export default [
    {
        name : '首页',
        path : '/',
        component : Home
    },
    {
        name : '详情页',
        path : '/detail',
        component : Detail
    },
    {
        name : '登录页',
        path : '/login',
        component : Login
    }
];