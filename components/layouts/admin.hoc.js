import React, { Component } from 'react';
import AdminHeader from './admin.header';
import AdminSidebar from './admin.sidebar';
import AdminFooter from './admin.footer';
import Script from 'next/script'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default class AdminHOC extends Component {
  render() {
    return (
      <>
            <Head>
              {/* <!-- Favicon --> */}
      <link rel="icon" href="/assets/dashboard/images/brand/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" type="image/x-icon" href="/assets/dashboard/images/brand/favicon.ico" />

      {/* <!--Bootstrap.min css--> */}
      <link rel="stylesheet" href="/assets/dashboard/plugins/bootstrap/css/bootstrap.min.css" crossorigin />

      {/* <!-- Dashboard css --> */}
      <link href="/assets/dashboard/css/style.css" rel="stylesheet" />

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
      <div class="app sidebar-mini rtl">
        <div className="page">
          <div className="page-main">
              <AdminHeader />
              <AdminSidebar />
              {this.props.children}
              {/* <AdminFooter /> */}
              </div>
          </div>
        </div>
        {/* // <!-- End Page --> */}

        {/* Back to top */}
        <Link href="#top" id="back-to-top"><i className="fa fa-angle-up" /></Link>

      </>
    )
  }
}

