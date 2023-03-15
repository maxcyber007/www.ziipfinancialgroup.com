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
      <section id="home" className="hero d-flex align-items-center">
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
        
  {/* ======= About Section ======= */}
<section id="about" className="features">
  <div className="container" data-aos="fade-up">
    <header className="section-header">
      <h2>About</h2>
      <p>ZIIPFUND COMPANY</p>
    </header>
   
    {/* Feature Tabs */}
    <div className="row feture-tabs" data-aos="fade-up">
      <div className="col-lg-6">
        <h3>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>
        {/* Tabs */}
        <ul className="nav nav-pills mb-3">
          <li>
            <a className="nav-link active" data-bs-toggle="pill" href="#tab1">Saepe fuga</a>
          </li>
          <li>
            <a className="nav-link" data-bs-toggle="pill" href="#tab2">Voluptates</a>
          </li>
          <li>
            <a className="nav-link" data-bs-toggle="pill" href="#tab3">Corrupti</a>
          </li>
        </ul>{/* End Tabs */}
        {/* Tab Content */}
        <div className="tab-content">
          <div className="tab-pane fade show active" id="tab1">
            <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-check2" />
              <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
            </div>
            <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-check2" />
              <h4>Incidunt non veritatis illum ea ut nisi</h4>
            </div>
            <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
          </div>{/* End Tab 1 Content */}
          <div className="tab-pane fade show" id="tab2">
            <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-check2" />
              <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
            </div>
            <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-check2" />
              <h4>Incidunt non veritatis illum ea ut nisi</h4>
            </div>
            <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
          </div>{/* End Tab 2 Content */}
          <div className="tab-pane fade show" id="tab3">
            <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-check2" />
              <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
            </div>
            <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-check2" />
              <h4>Incidunt non veritatis illum ea ut nisi</h4>
            </div>
            <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
          </div>{/* End Tab 3 Content */}
        </div>
      </div>
      <div className="col-lg-6">
        <img src="assets/img/features-2.png" className="img-fluid" alt />
      </div>
    </div>{/* End Feature Tabs */}
    
  </div>
</section>{/* End Features Section */}
        

{/* ======= Service Section ======= */}
<section id="service" className="features">
  <div className="container" data-aos="fade-up">
    <header className="section-header">
      <h2>SERVICES</h2>
      <p>ZIIPFUND COMPANY</p>
    </header>
    <div className="row">
      <div className="col-lg-6">
        <img src="assets/img/features.png" className="img-fluid" alt />
      </div>
      <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
        <div className="row align-self-center gy-4">
          <div className="col-md-6" data-aos="zoom-out" data-aos-delay={200}>
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check" />
              <h3>Eos aspernatur rem</h3>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-out" data-aos-delay={300}>
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check" />
              <h3>Facilis neque ipsa</h3>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-out" data-aos-delay={400}>
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check" />
              <h3>Volup amet voluptas</h3>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-out" data-aos-delay={500}>
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check" />
              <h3>Rerum omnis sint</h3>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-out" data-aos-delay={600}>
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check" />
              <h3>Alias possimus</h3>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-out" data-aos-delay={700}>
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check" />
              <h3>Repellendus mollitia</h3>
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