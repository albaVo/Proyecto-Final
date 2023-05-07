import { theme } from '@/themes/theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import "@/scss/global.scss"
import { SWRConfig } from 'swr'
import { AuthProvider } from '@/context/auth'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then(res => res.json())
      }}
    >
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </SWRConfig>
  )
  
}
