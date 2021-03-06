import React from 'react';
import HomePage from './page/HomePage/HomePage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import ProductListPage from './page/ProductListPage/ProductListPage';
import ProductActionPage from './page/ProductActionPage/ProductActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path:'/product/add',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path:'/product/:id/edit',
        exact: false,
        main: ({match}) => <ProductActionPage match={match} />
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;