import { PageLayout, CollectionLayout } from '~/layouts';

// pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import PageNotFound from '~/pages/PageNotFound';
import Search from '~/pages/Search';
import Introduction from '~/pages/Introduction';
import ReturnPolicy from '~/pages/ReturnPolicy';
import PrivacyPolicy from '~/pages/PrivacyPolicy';
import TermsOfService from '~/pages/TermsOfService';
import BangSize from '~/pages/BangSize';

// Public router
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/collections/:product', component: Product, layout: CollectionLayout },
    { path: '/search', component: Search },
    { path: '/pages/about-us', component: Introduction, layout: PageLayout },
    { path: '/pages/chinh-sach-doi-tra', component: ReturnPolicy, layout: PageLayout },
    { path: '/pages/chinh-sach-bao-mat', component: PrivacyPolicy, layout: PageLayout },
    { path: '/pages/dieu-khoan-dich-vu', component: TermsOfService, layout: PageLayout },
    { path: '/pages/bang-size', component: BangSize, layout: PageLayout },
    { path: '*', component: PageNotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
