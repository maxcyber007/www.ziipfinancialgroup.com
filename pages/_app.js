import '@/styles/globals.css'
import '@/styles/style.css'
//import Script from 'next/script'
//import Head from 'next/head'
//import Navbar from 'components/nav'
//import Footer from 'components/footer'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}