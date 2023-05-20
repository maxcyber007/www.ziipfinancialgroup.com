import React, { useEffect } from 'react';
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from "next/router";

export default function Nav() {
  // const baseUrl = 'http://localhost:8081'
  // const router = useRouter()


  // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  // const level = 'user'

  // const handleLogout = (event) => {
  //   event.preventDefault();
  //   localStorage.removeItem('token')
  //   return router.push('/signin')
  // }


  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="header fixed-top scrolled">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <Image src="/assets/img/favicon.png" width="42" height="100" alt="favicon" priority />
           <span style={{ fontSize: 24 }}>ZIIP</span><span className="text-black" style={{ fontSize: 24 }}>FINANCIAL</span>
          </a>
          <nav id="navbar" className="navbar scolled">
            <ul>

              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><Link className="nav-link scrollto" href="#service">Services</Link></li>
              <li><Link className="nav-link scrollto" href="#academy">Academy</Link></li>
              <li><Link className="nav-link scrollto" href="#footer">Contact</Link></li>
              <li>&nbsp;&nbsp;</li>
              <li><Link className="getstarted-signup" href="https://ziipfund.ziipfinancialgroup.com" target="_blank">Login</Link></li>
              <li><Link className="getstarted-signup" href="https://ziipfund.ziipfinancialgroup.com/Signup" target="_blank">Signup</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
      </header>{/* End Header */}

    </>
  )
}