import React, { useEffect } from 'react';
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from "next/router";

export default function Nav() {
  const baseUrl = 'http://localhost:8080'
  const router = useRouter()


  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const level = 'user'

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token')
    return router.push('/signin')
  }

  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="header fixed-top scrolled">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <Image src="/assets/img/favicon.png" width="42" height="100" alt="favicon" priority />
            <span>ZIIP</span><span className='text-black'>FUND</span>
          </a>
          <nav id="navbar" className="navbar">
            <ul>

              {!token ?
                (<li><Link className="nav-link active" href="/">Home</Link></li>)
                : (<li><Link className="nav-link active" href="/dashboard/">Home</Link></li>)
              }

              {!token ?
                (<li><Link className="nav-link" href="#about">About</Link></li>)
                : ("")
              }

              {!token ?
                (<li><Link className="nav-link" href="#service">Services</Link></li>)
                : ("")
              }

              {!token ?
                (<li><Link className="nav-link" href="#footer">Contact</Link></li>)
                : ("")
              }

              {!token ?
                ("")
                : (<li><Link className="nav-link" href="/dashboard/packages">Packages</Link></li>)
              }

              {!token ?
                ("")
                : (<li><Link className="nav-link" href="/dashboard/teams">Teams</Link></li>)
              }

              {!token ?
                ("")
                : (<li><Link className="nav-link" href="/dashboard/grow">Growth</Link></li>)
              }

              {!token ?
                ("")
                : (<li><Link className="nav-link" href="/dashboard/profile">Profile</Link></li>)
              }

              {/* {!token ?
                ("")
                : (<li><Link className="nav-link" href="/dashboard/#"><i class="bi bi-wallet"></i>&nbsp;Withdraw</Link></li>)
              } */}

              {token && level === 'admin' ?
                (<li><Link className="nav-link" href="/dashboard/#">Member</Link></li>)
                : ("")
              }

              {!token ?
                (<li><Link className="getstarted-signup scrolltos" href="/signin">Get Started</Link></li>)
                : (<li><Link className="getstarted-signup scrolltos" href="#" onClick={handleLogout}>SignOut</Link></li>)
              }



            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
      </header>{/* End Header */}

    </>
  )
}