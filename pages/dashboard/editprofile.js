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

export default function Editprofile() {

  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // default field states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const token = localStorage.getItem('token')
    //fetch('https://api.ziipfund.com/auth', {
    fetch('http://localhost:8081/users/profile', {

      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        if (data.status == 'ok') {
          setIsLoaded(true);
          console.log(data)
        } else {
          console.log('Auth Not Success')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  if (!isLoaded) {
    return <div></div>;
  } else {

  return (
    <>
      <Head>
        <title>ZIIPFUND COMPANY LIMITED</title>
      </Head>
      {/* ======= Hero Section ======= */}
      <section className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up" data-aos-delay="400"></h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="container text-center text-dark">
                  <div className="col-lg-10 d-block mx-auto">
                    <div className="row">
                      <div className="col-xl-12 col-md-12 col-md-12">
                        <div className="text-center mb-12">
                          {/* <Image src="/assets/img/signin/logo.png" width={150} height={51} priority /> */}
                          <h1 style={{color: '#07d5c0'}}>EDIT<span className="text-black"> PROFILE</span></h1>
                        </div>
                        {/* <h3>Login</h3> */}
                        <p className="text-dark">Your Account Update Profile</p>
                        <form>
                          <div className="input-group mb-3">
                            <div class="input-group-prepend">
                              <div class="input-group-text"><i className="fa fa-user-circle" /></div>
                            </div>
                            <input type="text" name="firstname" id="firstname" className="form-control bg-white" placeholder="Firstname" defaultValue={data.users.Firstname} required />

                          </div>
                          <div className="input-group mb-3">
                            <div class="input-group-prepend">
                              <div class="input-group-text"><i class="fa fa-user-circle-o" /></div>
                            </div>
                            <input type="text" name="lastname" id="lastname" className="form-control bg-white" placeholder="Lastname" defaultValue={data.users.Lastname} required />
                          </div>
                          <div className="input-group mb-3">
                            <div class="input-group-prepend">
                              <div class="input-group-text"><i className="fa fa-envelope" /></div>
                            </div>
                            <input type="email" name="email" id="email" className="form-control bg-white" placeholder="Email" defaultValue={data.users.Email} required />
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
                          <div className="input-group mb-3">
                            <div class="input-group-prepend">
                              <div class="input-group-text"><i className="fa fa-expeditedssl" /></div>
                            </div>
                            <input type="file" name="file" id="file" className="form-control bg-white" placeholder="Confirm Password" required />
                          </div>
                          <div className="row">
                            <div className="col-md-12 text-center text-lg-start">
                              <button type="submit" className="btn btn-get-started btn-block"><span>Update</span> <i className="bi bi-arrow-right" /></button>
                            </div>
                          </div>
                        </form>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* end col */}

            <div className="col-lg-6 d-flex flex-column justify-content-center hero-img d-none d-md-block" data-aos="zoom-out" data-aos-delay={200}>
            <br /><br /><br /><br />
              <Image src="/assets/img/signin/signup-img.png" className="img-fluid" width={539} height={438} alt="hero-img" priority />
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
}