import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from "next/router";
import Link from 'next/link'
import { useRef, useState } from 'react'
import Footer from 'components/footer'

export default function Grow() {

  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    //fetch('https://api.ziipfund.com/auth', {
    fetch('http://localhost:8081/auth', {

      method: 'POST', // or 'PUT'
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
          router.push('/signin')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  if (!isLoaded) {
    return <div></div>;
  } else {

    const handleCopy = async e => {
      e.preventDefault()
      // Get the text field
      var copyRefer = document.getElementById("referInput");
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyRefer.value);
    }
    return (
      <>
        <Head>
          <title>Precise Trading Systems Management</title>
        </Head>
        {/* ======= Hero Section ======= */}

        <main id="main">

          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              <br /><br />
              <header className="section-header">
                <p style={{ color: '#07d5c0' }}>ZIIP<span className="text-black">FUND GROW</span></p>
                <h2><span className="text-black">SUMMARY</span></h2>
              </header>
              <div className="row">
                <div className="col-lg-6">
                  <Image src="/assets/img/growing.png" className="img-fluid" width={'1043'} height={'663'} alt="" />
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                  <div className="row align-self-center gy-4">
                    <div className="col-md-12" data-aos="zoom-out" data-aos-delay={200}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h4>GROW AFFILIATE <span className="text-green">+3.25%</span></h4>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={300}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h5>GROW DAYLY <br /><span className="text-green">+6.12%</span></h5>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={400}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h5>GROW WEEKLY <br /><span className="text-green">+2.22%</span></h5>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={500}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h5>GROW MONTHLY <br /><span className="text-green">+5.65%</span></h5>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={600}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check" />
                        <h5>GROW YEARLY <br /><span className="text-green">+3.45%</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* / row */}

            </div>
          </section>{/* End Features Section */}


        </main>{/* End #main */}
        <Footer />
      </>
    )
  }
}
