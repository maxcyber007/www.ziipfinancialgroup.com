import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>ZIIPFUND COMPANY LIMITED</title>
        <meta content="" name="description" />

        <meta content="" name="keywords" />

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
        <link href="assets/css/style.css" rel="stylesheet"/>

        {/* <!-- =======================================================
  * Template Name: FlexStart - v1.12.0
  * Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== --> */}

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
                <li><a className="nav-link scrollto active" href="#home">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                <li><a className="getstarted scrollto" href="#">Get Started</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                <h2 data-aos="fade-up" data-aos-delay="400"></h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Get Started</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
                <Image src="/assets/img/hero-img.png" className="img-fluid" width={539} height={438} />
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="#" className="logo d-flex align-items-center">
                    <Image src="/assets/img/favicon.png" width="42" height="100" alt />
                    <span>ZIIP</span><span className='text-black'>FUND</span>
                  </a>
                  <p>A type of investment fund that can use any strategy Freely go long or short to maximize returns as much as possible.</p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Home</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">About us</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Services</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Terms of service</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Financial</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Technology</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Product Management</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Marketing</a></li>
                    <li><i className="bi bi-chevron-right" /> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                  <h4>Contact Us</h4>
                  <p>
                  10 Bayfront Avenue <br />
                  Marina Bay Sands City 059020<br />
                    Singapore <br /><br />
                    <strong>Phone:</strong> +65 0000000<br />
                    <strong>Email:</strong> ziipfund@gmail.com<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
               Copyright © 2023<strong><span> ZIIPFUND COMPANY LIMITED</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ */}
              DESIGN BY <a href="https://www.zipptech.io">ZIIP TECHNOLOGY</a>
            </div>
          </div>
        </footer>{/* End Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

      </div>
    </>
  )
}
