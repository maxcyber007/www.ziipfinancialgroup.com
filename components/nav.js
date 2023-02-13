import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

export default function Nav() {
  return (
    <>
      {/* ======= Header ======= */}
      <header className="header scrolled fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <Image src="/assets/img/favicon.png" width="42" height="100" alt="favicon" priority />
            <span>ZIIP</span><span className='text-black'>FUND</span>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link className="nav-link active" href="/">Home</Link></li>
              <li><Link className="nav-link" href="#about">About</Link></li>
              <li><Link className="nav-link" href="#service">Services</Link></li>
              <li><Link className="nav-link" href="#footer">Contact</Link></li>
              &nbsp;&nbsp;
              <li><Link className="getstarted-signup" href="/signup">Get Started</Link></li>
              &nbsp;&nbsp;
              <li><Link className="getstarted-signin" href="/signin">SignIn</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
      </header>{/* End Header */}
    </>
  )
}
