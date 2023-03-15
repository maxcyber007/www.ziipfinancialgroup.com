import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { useRouter } from "next/router";
import { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import Navbar from 'components/nav'
import Footer from 'components/footer'

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

  const child_ref_code_url = router.asPath.substr(12, 10)
  var child_ref_code
  if(child_ref_code_url == ""){
    child_ref_code = "ziipfund"
  }else{
    child_ref_code = child_ref_code_url
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      ref_code: data.get('ref_code'),
      child_ref_code: data.get('child_ref_code'),
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      email: data.get('email'),
      password: data.get('password'),
      confirm_password: data.get('confirm_password'),
      confirm_accept: data.get('confirm_accept'),
    }

    console.log('Confirm Accept:', jsonData.confirm_accept);

    if(jsonData.password == jsonData.confirm_password && jsonData.confirm_accept > 0){

    //fetch('https://api.ziipfund.com/register', {
    fetch('http://localhost:8081/register', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'ok') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Register Success',
            showConfirmButton: false,
            timer: 1000
          })
          return router.push('/signin')
        } else {
          //alert('No Success')
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Register Failed',
            showConfirmButton: false,
            timer: 1500
          })
          return router.push(`${window.location.origin}/signup?ref=${data.Ref_code}`)
          console.log('Success:', data);
        }
       
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    }else if(jsonData.password != jsonData.confirm_password){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Passwords do NOT match',
        showConfirmButton: false,
        timer: 1500
      })
      return router.push(`/signup?ref=${child_ref_code}`)
    }else if(jsonData.confirm_accept == null){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please You Accept Policy',
        showConfirmButton: false,
        timer: 1500
      })
      return router.push(`/signup?ref=${child_ref_code}`)
    }else{

    }


  }; //end handleSubmit

  return (
    <>
      <Head>
        <title>ZIIPFUND COMPANY LIMITED</title>
      </Head>
      {/* ======= Hero Section ======= */}
      <section className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center hero-img d-none d-md-block" data-aos="zoom-out" data-aos-delay={200}>
            <br /><br /><br /><br />
              <Image src="/assets/img/signin/signup-img.png" className="img-fluid" width={539} height={438} alt="hero-img" priority />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up" data-aos-delay="400"></h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="container text-center text-dark">
                  <div className="col-lg-10 d-block mx-auto">
                    <div className="row">
                      <div className="col-xl-12 col-md-12 col-md-12">
                        <div className="text-center mb-12">
                        <br />
                          {/* <Image src="/assets/img/signin/logo.png" width={150} height={51} priority /> */}
                          <h1>SIGN<span className="text-black"> UP</span></h1>
                        </div>
                        {/* <h3>Login</h3> */}
                        <p className="text-dark">Sign Up to Your Account</p>
                        <form onSubmit={handleSubmit}>
                          <input type="hidden" name="child_ref_code" id="child_ref_code" className="form-control bg-white" placeholder="child_ref_code" defaultValue={child_ref_code} required />
                          <input type="hidden" name="ref_code" id="ref_code" className="form-control bg-white" placeholder="ref_code" defaultValue={makeid(10)} required />
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
                            <input type="password" name="confirm_password" id="confirm_password" className="form-control bg-white" placeholder="Confirm Password" required />
                          </div>
                          <div class="form-group">
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" name="confirm_accept" id="confirm_accept" value="1" />
                              <span class="custom-control-label">Agree the <Link href="#"><span style={{color: '#0033CC'}}>Terms and Policy</span></Link></span>
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
      <Footer />
    </>
  )
}
