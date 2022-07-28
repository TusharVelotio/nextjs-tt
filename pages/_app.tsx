import { Global, MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { appTheme, globalStyles } from '../theme'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Capitalmind Mutual Funds</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={appTheme}>
        <Global styles={globalStyles} />
        <QueryClientProvider client={queryClient}>
          
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />

        </QueryClientProvider>
      </MantineProvider>
    </>
  )
}
