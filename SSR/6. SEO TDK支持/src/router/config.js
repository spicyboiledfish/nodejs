import Index from '../client/pages/index';
import List from '../client/pages/list';

const pageNotFound = () => {
    return <div>404页面</div>
}

const routeList = [
    {
        path: '/',
        component: Index,
        exact:true
    },
    {
        path:'/index',
        component: Index,
        exact: true //是否精确匹配
    },
    {
        path: '/list',
        component: List,
        exact: true,
    },
    {
        path: '*',
        component: pageNotFound,
        exact: true
    }
];

export default routeList;