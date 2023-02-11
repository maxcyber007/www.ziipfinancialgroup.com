import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function nav() {
  return (
    <>
    <Head>
    {/* <!-- Favicons --> */}
    <link href="/assets/img/favicon.png" rel="icon" />
<link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

{/* <!-- Google Fonts --> */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
<link href="/assets/css/style.css" rel="stylesheet" />

            {/*-Font icons css*/}
            <link href="/assets/plugins/iconfonts/plugin.css" rel="stylesheet" />
    <link href="/assets/plugins/iconfonts/icons.css" rel="stylesheet" />
    <link href="/assets/fonts/fonts/font-awesome.min.css" rel="stylesheet" />
</Head>
    <div>
        {/* ======= Header ======= */}
        <header id="header" className="header fixed-top">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="#" className="logo d-flex align-items-center">
              <Image src="/assets/img/favicon.png" width={42} height={100} />
              <span>ZIIP</span><span className='text-black'>FUND</span>
            </a>
            <nav id="navbar" className="navbar">
              <ul>
                <li><Link class="nav-link active" href="/">Home</Link></li>
                <li><Link class="nav-link" href="#about">About</Link></li>
                <li><Link class="nav-link" href="#services">Services</Link></li>
                <li><Link class="nav-link" href="#contact">Contact</Link></li>
                <li><Link class="getstarted" href="/signin">Get Started</Link></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
    </div>
    </>
  )
}
