import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Voltarian Technologies - Pterodactyl Powered Hosting</title>
        <meta name="description" content="Voltarian Technologies offers affordable Pterodactyl powered website hosting and Discord bot hosting services with 99.9% uptime, DDoS protection, and 24/7 support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
