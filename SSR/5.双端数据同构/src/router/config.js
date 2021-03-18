import Index from '../client/pages/index';
import List from '../client/pages/list';

const routeList = [
    {
        path:'/index',
        component: Index,
        exact: true //是否精确匹配
    },
    {
        path: '/list',
        component: List,
        exact: true,
    }
];

export default routeList;