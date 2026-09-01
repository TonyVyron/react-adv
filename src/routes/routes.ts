import { JSX, lazy } from 'react';

const Page1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const Page2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'))
const Page3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'))

interface Route {
    to: string;
    name: string;
    component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
}

export const routes : Route[] = [
    {
        to: '/lazy1',
        name: 'Lazy Page 1',
        component: Page1
    },
    {
        to: '/lazy2',
        name: 'Lazy Page 2',
        component: Page2
    },
    {
        to: '/lazy3',
        name: 'Lazy Page 3',
        component: Page3
    }
];  