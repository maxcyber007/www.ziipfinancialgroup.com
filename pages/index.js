import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>ZIIPFUND COMPANY LIMITED</title>
        {/* <!-- Favicons --> */}
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" />

        {/*Bootstrap.min css*/}
        <link rel="stylesheet" href="../assets/plugins/bootstrap/css/bootstrap.min.css" />

        {/* <!-- Vendor CSS Files --> */}
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* <!-- Template Main CSS File --> */}
        <link href="/assets/css/style.css" rel="stylesheet" />

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
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                <h2 data-aos="fade-up" data-aos-delay="400"></h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <Link href="/signin" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Get Started</span>
                      <i className="bi bi-arrow-right" />
                    </Link>
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
                  <Link href="#" className="logo d-flex align-items-center">
                    <Image src="/assets/img/favicon.png" width="42" height="100" />
                    <span>ZIIP</span><span className='text-black'>FUND</span>
                  </Link>
                  <p>A type of investment fund that can use any strategy Freely go long or short to maximize returns as much as possible.</p>
                  <div className="social-links mt-3">
                    <Link href="#" className="twitter"><i className="bi bi-twitter" /></Link>
                    <Link href="#" className="facebook"><i className="bi bi-facebook" /></Link>
                    <Link href="#" className="instagram"><i className="bi bi-instagram" /></Link>
                    <Link href="#" className="linkedin"><i className="bi bi-linkedin" /></Link>
                  </div>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Home</Link></li>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">About us</Link></li>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Services</Link></li>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Terms of service</Link></li>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Privacy policy</Link></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Financial</Link></li>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Technology</Link></li>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Product Management</Link></li>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Marketing</Link></li>
                    <li><i className="bi bi-chevron-right" /> <Link href="#">Graphic Design</Link></li>
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
              DESIGN BY <Link href="https://www.zipptech.io">ZIIP TECHNOLOGY</Link>
            </div>
          </div>
        </footer>{/* End Footer */}
        <Link href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></Link>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
        <Link href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>

      </div>
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
    </>
  )
}
