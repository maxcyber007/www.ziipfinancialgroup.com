import '@/styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import Navbar from 'components/nav'
import Footer from 'components/footer'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" />


        <link rel="stylesheet" href="/assets/plugins/bootstrap/css/bootstrap.min.css" />


        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />


        <link href="/assets/css/style.css" rel="stylesheet" />


        <link href="/assets/plugins/iconfonts/plugin.css" rel="stylesheet" />
        <link href="/assets/plugins/iconfonts/icons.css" rel="stylesheet" />
        <link href="/assets/fonts/fonts/font-awesome.min.css" rel="stylesheet" />

      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}