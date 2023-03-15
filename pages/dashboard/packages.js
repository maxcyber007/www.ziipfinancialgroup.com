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

export default function Packages() {

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
      {/* ======= Pricing Section ======= */}
<section id="pricing" className="pricing d-flex align-items-center">
  <div className="container" data-aos="fade-up">
    <header className="section-header">
        <br></br>
    <p style={{color: '#07d5c0'}}>PACKAGES <span className="text-black">INVEST</span></p>
      <h2><span className="text-black">Choice Now</span></h2>
    </header>

    <div className="row gy-4" data-aos="fade-left">
      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
        <div className="box">
          <h3 style={{color: '#07d5c0'}}>Starter Plan</h3>
          <div className="price"><sup>$</sup>100</div>
          <Image src="/assets/img/pricing-free.png" className="img-fluid" alt="img" width={278} height={191} />
          <a href="#" className="btn-buy">Invest Now</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
        <div className="box">
          <h3 style={{color: '#65c600'}}>Basic Plan</h3>
          <div className="price"><sup>$</sup>300</div>
          <Image src="/assets/img/pricing-starter.png" className="img-fluid" alt="img" width={278} height={191} />
          <a href="#" className="btn-buy">Invest Now</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
        <div className="box">
          <h3 style={{color: '#ff901c'}}>Standard Plan</h3>
          <div className="price"><sup>$</sup>500</div>
          <Image src="/assets/img/pricing-business.png" className="img-fluid" alt="img" width={278} height={191} />
          <a href="#" className="btn-buy">Invest Now</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
        <div className="box">
          <span className="featured">Featured</span>
          <h3 style={{color: '#CC0000'}}>Personal Plan</h3>
          <div className="price"><sup>$</sup>1,000</div>
          <Image src="/assets/img/pricing-ultimate.png" className="img-fluid" alt="img" width={278} height={191} />
          <a href="#" className="btn-buy">Invest Now</a>
        </div>
      </div>
    </div>
    <br />
    <div className="row gy-4" data-aos="fade-left">
      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
        <div className="box">
          <h3 style={{color: '#996600'}}>Corporate Plan</h3>
          <div className="price"><sup>$</sup>2,000</div>
          <Image src="/assets/img/pricing-free.png" className="img-fluid" alt="img" width={278} height={191} />
          <a href="#" className="btn-buy">Invest Now</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
        <div className="box">
          <h3 style={{color: '#CCCC33'}}>Premium Plan</h3>
          <div className="price"><sup>$</sup>3,000</div>
          <Image src="/assets/img/pricing-starter.png" className="img-fluid" alt="img" width={278} height={191} />
          <a href="#" className="btn-buy">Invest Now</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
        <div className="box">
          <h3 style={{color: '	#6600CC'}}>Business Plan</h3>
          <div className="price"><sup>$</sup>5,000</div>
          <Image src="/assets/img/pricing-business.png" className="img-fluid" alt="img" width={278} height={191} />
          <a href="#" className="btn-buy">Invest Now</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
        <div className="box">
          <span className="featured">Featured</span>
          <h3 style={{color: '#ff1071'}}>Ultimate Plan</h3>
          <div className="price"><sup>$</sup>10,000</div>
          <Image src="/assets/img/pricing-ultimate.png" className="img-fluid" alt="img" width={278} height={191} />
          <a href="#" className="btn-buy">Invest Now</a>
        </div>
      </div>
    </div>

  </div>
</section>{/* End Pricing Section */}

        </main>{/* End #main */}
        <Footer />
      </>
    )
  }
}
