import Home from '../component/home/index.js';
import Detail from '../component/detail/index.js';
import { getAsyncComponent } from '../lib/asyncComponent.js';

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
        component : getAsyncComponent(() => import(/* webpackChunkName:"login" */'../component/login/index.js')) //路由动态加载组件
    }
];