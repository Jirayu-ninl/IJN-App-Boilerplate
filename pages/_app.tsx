import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import { SessionProvider } from 'next-auth/react'
import PageTransition from 'views/animations/hooks/usePageTransition'

import 'react-toastify/dist/ReactToastify.css'

import Header from 'contents/global/header'
import { pageview } from '@libs/analytics/gtm'
import { app } from '@config'

import MainLayout from 'layouts/MainLayout'
import Toast from 'layouts/components/toast'

import 'tailwindcss/tailwind.css'
import 'views/theme/css/tailwind.css'

type NextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactNode
  disableFooter?: boolean
  disableNav?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()
    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)
    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  const getLayout = Component.Layout ?? ((page) => page)


  return getLayout(
    <>
      <Script
        strategy='afterInteractive'
        id='GOOGLE_TAG_MANAGER'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${app.GOOGLE_TAG_MANAGER}');
          `,
        }}
      />
      <SessionProvider session={pageProps.session}>
        <Header
          title={pageProps.title}
          description={pageProps.description}
          coverImg={pageProps.coverImg}
        />
        <MainLayout showNav={!Component.disableNav} showFooter={!Component.disableFooter}>
          <PageTransition router={router}>
            <Component {...pageProps} />
          </PageTransition>
          <Toast />
        </MainLayout>
      </SessionProvider>
    </>
  )
}

export default App
