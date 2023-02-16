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

export default function Home() {
  return (
    <>
      <Head>
        <title>ZIIPFUND COMPANY LIMITED</title>
      </Head>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We offer modern solutions for growing your fund.</h1>
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
              <Image src="/assets/img/hero-img.png" className="img-fluid" width={539} height={438} alt="hero-img" priority />
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
