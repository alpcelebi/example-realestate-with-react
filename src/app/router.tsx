import { Suspense, lazy, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Container } from '../components/layout/Container'

const HomePage = lazy(() => import('../pages/Home'))
const ServicesPage = lazy(() => import('../pages/Services'))
const RegionsPage = lazy(() => import('../pages/Regions'))
const AboutPage = lazy(() => import('../pages/About'))
const FAQPage = lazy(() => import('../pages/FAQ'))
const ContactPage = lazy(() => import('../pages/Contact'))

const routeLoadingElement = (
  <Container className="py-24">
    <div className="section-surface flex items-center justify-center py-12">
      <p className="text-sm font-medium text-slate-600">Sayfa yükleniyor...</p>
    </div>
  </Container>
)

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={routeLoadingElement}>{element}</Suspense>
)

const routerBase =
  import.meta.env.BASE_URL === '/'
    ? '/'
    : import.meta.env.BASE_URL.replace(/\/$/, '')

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: withSuspense(<HomePage />),
      },
      {
        path: 'hizmetler',
        element: withSuspense(<ServicesPage />),
      },
      {
        path: 'bolgeler',
        element: withSuspense(<RegionsPage />),
      },
      {
        path: 'hakkimizda',
        element: withSuspense(<AboutPage />),
      },
      {
        path: 'sss',
        element: withSuspense(<FAQPage />),
      },
      {
        path: 'iletisim',
        element: withSuspense(<ContactPage />),
      },
    ],
  },
], {
  basename: routerBase,
})
