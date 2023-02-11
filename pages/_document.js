import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
  return (
    <Html lang="en">
          <Head>
        <title>ZIIPFUND COMPANY LIMITED</title>
        {/* <!-- Favicons --> */}
        <link href="/assets/img/favicon.png" rel="icon"/>
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" />

        {/* <!-- Vendor CSS Files --> */}
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* <!-- Template Main CSS File --> */}
        <link href="/assets/css/style.css" rel="stylesheet"/>

        {/* <!-- =======================================================
  * Template Name: FlexStart - v1.12.0
  * Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== --> */}
    </Head>
      <body>
        <Main />
        <NextScript />

                      {/* <!-- Vendor JS Files --> */}
                      <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/php-email-form/validate.js" strategy="beforeInteractive"></Script>
        {/* <!-- Template Main JS File --> */}
        <Script src="/assets/js/main.js" strategy="beforeInteractive"></Script>
      </body>
    </Html>
  )
}
}

export default MyDocument