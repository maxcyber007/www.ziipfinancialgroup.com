import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
