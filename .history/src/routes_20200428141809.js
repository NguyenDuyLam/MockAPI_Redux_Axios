import React from 'react';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;