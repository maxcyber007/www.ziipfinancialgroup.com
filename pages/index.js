import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Navbar from 'components/nav'
import Footer from 'components/footer'
import { FONT_MANIFEST } from 'next/dist/shared/lib/constants'
import 'animate.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ziip Financial Group</title>
      </Head>
      <Navbar />
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-md-first order-last">
              <h1 data-aos="fade-up">Ziip Financial Group Company Limited</h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>Estate investment, Fin Tech, E-Commerce<br /><span className="text-gray">That is committed to providing investment opportunities Safe and legal to customers.</span></h2>
              <div data-aos="fade-up" data-aos-delay={600}>
                <br />
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img order-md-last order-first animate__animated animate__pulse animate__infinite animate__delay-10ms" data-aos="zoom-in" data-aos-delay={200}>
              <Image src="/assets/img/img-mobile.png" className="img-fluid" width={509} height={408} alt="img-mobile1" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">

        {/* ======= About Section ======= */}
        <section id="about" className="features2 d-flex align-items-center">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <p className="text-ziip">ABOUT</p>
              <span className="text-gray">ZIIP FINANCIAL</span>
            </header>

            <div className="row" data-aos="fade-up">
              <div className="col-lg-6">
                <h3>WHO WE ARE</h3>

                <div className="tab-pane fade show active" id="tab1">
                  <div className="d-flex align-items-center mb-2">
                    <h4>Registered</h4>
                  </div>
                  <p>We re registered in Singapore. We ve Licenses from Singapore, UK, France, Hong Kong, Australia and Canada.</p>
                  <p>We operate with transparency. Completely certified and verified This ensures that our clients can invest with confidence.Knowing that their money is in safe hands.</p>
                  <div className="d-flex align-items-center mb-2">
                    <h4>Our main purpose.</h4>
                  </div>
                  <p>Is to help investors increase wealth using Estate investment, Fin Tech, E-Commerce style that has been proven and commitment to management Funds safely.</p>
                </div>{/* End Tab 1 Content */}

              </div>
              <div className="col-lg-6 text-center">
                <Image src="/assets/img/hero-img.png" className="img-fluid" width={409} height={308} alt="hero-img" priority />
              </div>
            </div>{/* End Feature Tabs */}

          </div>
        </section>{/* End Features Section */}


        {/* ======= Service Section ======= */}
        <section id="service" className="features">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
            <p className="text-ziip">SERVICES</p>
              <span className="text-gray">ZIIP FINANCIAL</span>
            </header>
            <div className="row">
              <div className="col-lg-6">
                <Image src="/assets/img/teams.png" className="img-fluid" width={439} height={338} alt="hero-img" priority />
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={200}>
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-graph-up-arrow" />
                      <h3><Link className="getstarted-signup" href="https://ziipfund.ziipfinancialgroup.com" target="_blank">ZIIP FUND</Link></h3>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={300}>
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-buildings" />
                      <h3>ZIIP PLANET</h3>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={400}>
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-box-seam" />
                      <h3><Link className="getstarted-signup" href="https://www.ziipfin.io" target="_blank">ZIIP FIN</Link></h3>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={500}>
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-cart4" />
                      <h3><Link className="getstarted-signup" href="#" target="_blank">ZIIP COMMERCE</Link></h3>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={600}>
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-credit-card" />
                      <h3><Link className="getstarted-signup" href="https://www.ziippayment.com" target="_blank">ZIIP PAYMENT</Link></h3>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={700}>
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-x-diamond" />
                      <h3>ZIIP TOKEN</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* / row */}
          </div></section>

      </main>{/* End #main */}
      <Footer />
    </>
  )
}