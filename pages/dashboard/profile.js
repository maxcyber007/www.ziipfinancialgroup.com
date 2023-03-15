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

export default function Profile() {

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
                <p style={{ color: '#07d5c0' }}>ZIIP<span className="text-black">FUND PROFILE</span></p>
                <h2><span className="text-black">YOU ACCOUNT</span></h2>
              </header>
              <div className="row">
                <div className="col-lg-6 text-center">
                  <Image src="/assets/img/avatar/avatar.png" className="" width={'170'} height={'170'} alt="" />
                <br />
                <Link href={`/dashboard/editprofile`} className="btn-edit-profile">Edit Profile</Link>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                  <div className="row align-self-center gy-4">
                    <div className="col-md-12" data-aos="zoom-out" data-aos-delay={200}>
                      <div className="feature-boxs d-flex align-items-center">
                        <div className="card-body">
                          <div className="form-group">
                            <label className="form-label text-left">AFFILIATE LINK</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <div className="input-group-text">
                                  <Link href="#" onClick={handleCopy}><i className="fa fa-clone" /></Link>
                                </div>
                              </div>
                              <input id="referInput" className="form-control fc-datepicker" type="text" value={`${window.location.origin}/signup?ref=${data.Ref_code}`} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={600}>
                      <div className="feature-box d-flex align-items-center">
                      <i class="bi bi-person-bounding-box" />
                        <h7>Know Your Customer <br /><span className="text-green">KYC</span></h7>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay={600}>
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-phone-fill" />
                        <h6>Authentication <br /><span className="text-green">2FA</span></h6>
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
