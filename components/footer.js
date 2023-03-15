import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

export default function Footer() {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link href="#" className="logo d-flex align-items-center">
                  <Image src="/assets/img/favicon.png" width="42" height="100" alt="favicon" priority />
                  <span>ZIIP</span><span className='text-black'>FUND</span>
                </Link>
                <p className='text-left'>A type of investment fund that can use any strategy Freely go long or short to maximize returns as much as possible.</p>
                <div className="social-links mt-3 text-left">
                  <Link href="#" className="twitter"><i className="bi bi-twitter" /></Link>
                  <Link href="#" className="facebook"><i className="bi bi-facebook" /></Link>
                  <Link href="#" className="instagram"><i className="bi bi-instagram" /></Link>
                  <Link href="#" className="linkedin"><i className="bi bi-linkedin" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links className='text-left'">
                <h4 className='text-left'>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Home</Link></li>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">About us</Link></li>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Services</Link></li>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Terms of service</Link></li>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Privacy policy</Link></li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4 className='text-left'>Our Services</h4>
                <ul>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Financial</Link></li>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Technology</Link></li>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Product Management</Link></li>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Marketing</Link></li>
                  <li><i className="bi bi-chevron-right" /> <Link href="#">Graphic Design</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4 className='text-left'>Contact Us</h4>
                <p className='text-left'>
                  10 Banpu Ralyal <br />
                  Arina Bay Sands City 1059220<br />
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
            DEVELOPMENT BY <Link href="https://www.zipptech.io">ZIIP TECHNOLOGY</Link>
          </div>
        </div>
      </footer>{/* End Footer */}

      <Link href="#hero" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></Link>

    </>
  )
}
