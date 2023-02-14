import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
                        {/* <!-- Favicon --> */}
      <link rel="icon" href="/assets/dashboard/images/brand/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" type="image/x-icon" href="/assets/dashboard/images/brand/favicon.ico" />

      {/* <!--Bootstrap.min css--> */}
      {/* <link rel="stylesheet" href="/assets/dashboard/plugins/bootstrap/css/bootstrap.min.css" crossorigin /> */}

      {/* <!-- Dashboard css --> */}
      {/* <link href="/assets/dashboard/css/style.css" rel="stylesheet" /> */}

      {/* <!-- Custom scroll bar css--> */}
      <link href="/assets/dashboard/plugins/scroll-bar/jquery.mCustomScrollbar.css" rel="stylesheet" />

      {/* <!-- Sidemenu css --> */}
      <link href="/assets/dashboard/plugins/toggle-sidebar/full-sidemenu.css" rel="stylesheet" />

      {/* <!--Daterangepicker css--> */}
      <link href="/assets/dashboard/plugins/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />

      {/* <!-- Rightsidebar css --> */}
      <link href="/assets/dashboard/plugins/sidebar/sidebar.css" rel="stylesheet" />

      {/* <!-- Sidebar Accordions css --> */}
      <link href="/assets/dashboard/plugins/accordion1/css/easy-responsive-tabs.css" rel="stylesheet" />

      {/* <!-- Owl Theme css--> */}
      <link href="/assets/dashboard/plugins/owl-carousel/owl.carousel.css" rel="stylesheet" />

      {/* <!-- Morris  Charts css--> */}
      <link href="/assets/dashboard/plugins/morris/morris.css" rel="stylesheet" strategy />

      {/* <!---Font icons css--> */}
      <link href="/assets/dashboard/plugins/iconfonts/plugin.css" rel="stylesheet" />
      <link href="/assets/dashboard/plugins/iconfonts/icons.css" rel="stylesheet" />
      <link href="/assets/dashboard/fonts/fonts/font-awesome.min.css" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" rel="stylesheet" />
      </Head>
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