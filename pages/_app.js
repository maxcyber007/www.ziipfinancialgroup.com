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
        {/* <!-- Favicons --> */}
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" />

        {/*Bootstrap.min css*/}
        <link rel="stylesheet" href="/assets/plugins/bootstrap/css/bootstrap.min.css" />

        {/* <!-- Vendor CSS Files --> */}
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* <!-- Template Main CSS File --> */}
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

        {/*-Font icons css*/}
        <link href="/assets/plugins/iconfonts/plugin.css" rel="stylesheet" />
        <link href="/assets/plugins/iconfonts/icons.css" rel="stylesheet" />
        <link href="/assets/fonts/fonts/font-awesome.min.css" rel="stylesheet" />

      </Head>
      <Navbar />
      <Component {...pageProps} />
<Footer />
      {/* <!-- Vendor JS Files --> */}
      <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="/assets/vendor/aos/aos.js"></script>
      <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="/assets/vendor/php-email-form/validate.js"></script>
      {/* <!-- Template Main JS File --> */}
      <script src="/assets/js/main.js"></script>
    </>
  )
}
