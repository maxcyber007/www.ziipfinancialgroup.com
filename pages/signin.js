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

export default function Signin() {

    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        fetch('54.255.217.77:8080/login', {

            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status == 'ok') {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                    //alert('Success')
                    //window.location = '/about'

                    // Swal.fire({
                    //   position: 'center',
                    //   icon: 'success',
                    //   title: 'Login Success',
                    //   showConfirmButton: false,
                    //   timer: 1000
                    // })
                    return router.replace('/dashboard');
                    //return router.push('/dashboard')
                } else {
                    //alert('No Success')
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Login Failed<br /><h6>Please Your Check Again.</h6>',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    return router.push('/signin')
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
            {/* ======= Hero Section ======= */}
            <section className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 d-flex flex-column justify-content-center hero-img d-none d-lg-block" data-aos="zoom-out" data-aos-delay={200}>
                            <Image src="/assets/img/signin/signin-img.png" className="img-fluid" width={539} height={438} alt="hero-img" priority />
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
                                                    <h1>SECURE<span className="text-black"> LOGIN</span></h1>
                                                </div>
                                                {/* <h3>Login</h3> */}
                                                <p className="text-dark">Sign In to your account</p>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text"><i className="fa fa-envelope" /></div>
                                                        </div>
                                                        <input type="text" name="email" id="email" className="form-control bg-white" placeholder="Email" required />

                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text"><i className="fa fa-expeditedssl" /></div>
                                                        </div>
                                                        <input type="password" name="password" id="password" className="form-control bg-white" placeholder="Password" required />

                                                    </div>
                                                    <div className="row">

                                                        <div className="col-md-12 text-center text-lg-start">
                                                            <button type="submit" className="btn btn-get-started btn-block"><span>Sign In</span> <i className="bi bi-arrow-right" /></button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <p></p>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <Link href="/signup"><i className="fa fa-user-circle" data-toggle="tooltip" title="fa fa-user"></i> Create Account</Link>&nbsp;&nbsp;
                                                        <Link href="#"><i className="fa fa-expeditedssl" data-toggle="tooltip" title="fa fa-expeditedssl"></i> Forgot Password</Link>
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
