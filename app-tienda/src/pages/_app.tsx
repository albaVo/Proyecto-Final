//theme
import { theme } from '@/themes/theme'
//styles
import "@/scss/global.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "semantic-ui-css/semantic.min.css"
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
//react
import { ThemeProvider } from '@emotion/react'
//next
import type { AppProps } from 'next/app'
//mui
import { CssBaseline } from '@mui/material'
//swr
import { SWRConfig } from 'swr'
//context
import { AuthProvider } from '@/context/auth'
import { CartProvider } from '@/context'
import { Suspense } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then(res => res.json())
        }}
      >
        <AuthProvider>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Component {...pageProps} />
            </ThemeProvider>
          </CartProvider>
        </AuthProvider>
      </SWRConfig>
    </Suspense>
  )
}
