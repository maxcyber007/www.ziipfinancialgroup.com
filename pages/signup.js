import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Navbar from 'components/nav'
import { useRouter } from "next/router";
import { useRef, useState } from 'react'
import Swal from 'sweetalert2'

export default function Signup(prop) {
  //Referal Generate
  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  const router = useRouter()

  const child_ref_code = router.asPath.substr(12, 10)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      ref_code: data.get('ref_code'),
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      email: data.get('email'),
      password: data.get('password'),
      //child_ref_code: data.get('child_ref_code'),
    }

    fetch('http://localhost:8080/register', {
    
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  })
    .then((response) => response.json())
    .then((data) => {
      if(data.status == 'ok'){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Register Success',
          showConfirmButton: false,
          timer: 1000
        })
        return router.push('/signin')
      }else{
        //alert('No Success')
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Register Failed',
          showConfirmButton: false,
          timer: 1500
        })
        return router.push('/register')
      }
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    

  };

    return (
        <>
            <Head>
                <title>ZIIPFUND COMPANY LIMITED</title>
            </Head>
            <div>
                <Navbar />
                {/* ======= Hero Section ======= */}
                <section className="hero d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column justify-content-center hero-img" data-aos="zoom-out" data-aos-delay={200}>
                                <Image src="/assets/img/signin/signup-img.png" className="img-fluid d-none d-lg-block" width={539} height={438} alt="hero-img" priority />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-center">
                                <h2 data-aos="fade-up" data-aos-delay="400"></h2>
                                <div data-aos="fade-up" data-aos-delay="600">
                                    <div className="container text-center text-dark">
                                        <div className="col-lg-10 d-block mx-auto">
                                            <div className="row">
                                                <div className="col-xl-12 col-md-12 col-md-12">
                                                    <div className="text-center mb-12">
                                                        {/* <Image src="/assets/img/signin/logo.png" width={150} height={51} priority /> */}
                                                        <h1>SIGN<span className="text-black"> UP</span></h1>
                                                    </div>
                                                    {/* <h3>Login</h3> */}
                                                    <p className="text-dark">Sign Up to Your Account</p>
                                                    <form onSubmit={handleSubmit}>
                                                            <input type="hidden" name="child_ref_code" id="child_ref_code" className="form-control bg-white" placeholder="child_ref_code" value={child_ref_code} required />
                                                            <input type="hidden" name="ref_code" id="ref_code" className="form-control bg-white" placeholder="ref_code" value={makeid(10)} required />
                                                        <div className="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i className="fa fa-user-circle" /></div>
                                                            </div>
                                                            <input type="text" name="firstname" id="firstname" className="form-control bg-white" placeholder="Firstname" required />

                                                        </div>
                                                        <div className="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fa fa-user-circle-o" /></div>
                                                            </div>
                                                            <input type="text" name="lastname" id="lastname" className="form-control bg-white" placeholder="Lastname" required />

                                                        </div>
                                                        <div className="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i className="fa fa-envelope" /></div>
                                                            </div>
                                                            <input type="email" name="email" id="email" className="form-control bg-white" placeholder="Email" required />
                                                        </div>
                                                        <div className="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i className="fa fa-expeditedssl" /></div>
                                                            </div>
                                                            <input type="password" name="password" id="password" className="form-control bg-white" placeholder="Password" required />
                                                        </div>
                                                        <div className="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i className="fa fa-expeditedssl" /></div>
                                                            </div>
                                                            <input type="password" name="cf_password" id="cf_password" className="form-control bg-white" placeholder="Confirm Password" required />
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" />
                                                                <span class="custom-control-label">Agree the <a href="terms.html">Terms and Policy</a></span>
                                                            </label>
                                                        </div>
                                                        <div className="row">

                                                            <div className="col-md-12 text-center text-lg-start">
                                                                <button type="submit" className="btn btn-get-started btn-block"><span>Sign Up</span> <i className="bi bi-arrow-right" /></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <p></p>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <Link href="/signin"><i className="fa fa-random" data-toggle="tooltip" title="fa fa-random"></i> i have already account</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>{/* End Hero */}
                <main id="main">

                </main>{/* End #main */}
                {/* ======= Footer ======= */}
                <footer id="footer" className="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row gy-4">
                                <div className="col-lg-5 col-md-12 footer-info">
                                    <Link href="#" className="logo d-flex align-items-center">
                                        <Image src="/assets/img/favicon.png" width="42" height="100" alt="favicon" />
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
                            DEVELOPMENT BY <Link href="https://www.zipptech.io">ZIIP TECHNOLOGY</Link>
                        </div>
                    </div>
                </footer>{/* End Footer */}
                <Link href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></Link>
                {/* Vendor JS Files */}
                {/* Template Main JS File */}
                <Link href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
            </div>
        </>
    )
}
