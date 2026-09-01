import { JSX, lazy } from 'react';
import { NoLazyPage } from '../01-lazyload/pages';

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

interface Route {
    to: string;
    name: string;
    path: string;
    component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
}

export const routes : Route[] = [
    {
        path:"/LazyLoad/*",
        to: '/LazyLoad',
        name: 'Lazy Layout',
        component: LazyLayout
    },
    {
        path:"/no-lazy",
        to: '/no-lazy',
        name: 'No Lazy Page',
        component: NoLazyPage
    }
];  