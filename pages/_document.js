import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />


        {/* Dashobard Script */}
        <Script src="/assets/dashboard/js/vendors/jquery-3.2.1.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/bootstrap/popper.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/js/vendors/jquery.sparkline.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/js/vendors/circle-progress.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/rating/jquery.rating-stars.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/moment/moment.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/bootstrap-daterangepicker/daterangepicker.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/toggle-sidebar/sidemenu.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/accordion1/js/easyResponsiveTabs.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/scroll-bar/jquery.mCustomScrollbar.concat.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/owl-carousel/owl.carousel.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/owl-carousel/owl-main.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/sidebar/sidebar.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/chart/chart.bundle.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/chart/utils.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/counters/jquery.missofis-countdown.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/counters/counter.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/morris/raphael-min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/dashboard/plugins/morris/morris.js" strategy="beforeInteractive"></Script>
      </body>
    </Html>
  )
}