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

