import '@/styles/globals.css'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/components/Layout'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.add('dark')
      // document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
