import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Script from 'next/script'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={queryClient}>
<Script type="text/javascript" src="/static/script.js"></Script>
    <Component {...pageProps} />
  </QueryClientProvider>
  )
}

export default MyApp
