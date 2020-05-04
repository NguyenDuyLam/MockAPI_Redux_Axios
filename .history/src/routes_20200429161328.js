import React from 'react';
import HomePage from './page/HomePage/HomePage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import ProductListPage from './page/ProductListPage/ProductListPage';
import ProductActionPage from './page/ProductActionPage/ProductActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: ({match}) => <HomePage  match={match}/>
    },
    {
        path: '/product-list',
        exact: false,
        main: ({match}) => <ProductListPage  match={match}/>
    },
    {
        path:'/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path:'/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history} />
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;