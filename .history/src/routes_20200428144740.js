import React from 'react';
import HomePage from './page/HomePage/HomePage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import ProductListPage from './page/ProductListPage/ProductListPage';
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
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;