import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ShopPage = lazy(() => import('../pages/shop/page'));
const ProductPage = lazy(() => import('../pages/product/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const FAQPage = lazy(() => import('../pages/faq/page'));
const HowToOrderPage = lazy(() => import('../pages/how-to-order/page'));
const IndustrialSolutionsPage = lazy(() => import('../pages/industrial-solutions/page'));
const PartnershipsPage = lazy(() => import('../pages/partnerships/page'));
const SupportPage = lazy(() => import('../pages/support/page'));
const InvoicePage = lazy(() => import('../pages/invoice/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/how-to-order',
    element: <HowToOrderPage />,
  },
  {
    path: '/industrial-solutions',
    element: <IndustrialSolutionsPage />,
  },
  {
    path: '/partnerships',
    element: <PartnershipsPage />,
  },
  {
    path: '/support',
    element: <SupportPage />,
  },
  {
    path: '/invoice',
    element: <InvoicePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
