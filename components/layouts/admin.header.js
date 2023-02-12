import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useRouter } from "next/router";
import Head from 'next/head'

const AdminHeader = () => {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false);

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:8080/auth', {

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


    return (
      <>
        {/*app-header*/}
        <div className="app-header header d-flex">
          <div className="container-fluid">
            <div className="d-flex">
              <Link className="header-brand" href="/dashboard">
                <img src="/assets/dashboard/images/brand/logo.png" className="header-brand-img main-logo" alt="Hogo logo" />
                <img src="/assets/dashboard/images/brand/icon.png" className="header-brand-img icon-logo" alt="Hogo logo" />
              </Link>{/* logo*/}
              <Link aria-label="Hide Sidebar" className="app-sidebar__toggle" data-toggle="sidebar" href="#" />
              <Link href="#" data-toggle="search" className="nav-link nav-link  navsearch"><i className="fa fa-search" /></Link>{/* search icon */}
              <div className="d-flex order-lg-2 ml-auto">
                </div>

              <div className="d-flex order-lg-2 ml-auto header-rightmenu">
                <div className="dropdown">
                  <a className="nav-link icon full-screen-link" id="fullscreen-button">
                    <i className="fe fe-maximize-2" />
                  </a>
                </div>{/* full-screen */}
                <div className="dropdown header-notify">
                  <a className="nav-link icon" data-toggle="dropdown" aria-expanded="false">
                    <i className="fe fe-bell " />
                    <span className="pulse bg-success" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow ">
                    <a href="#" className="dropdown-item text-center">4 New Notifications</a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item d-flex pb-3">
                      <div className="notifyimg bg-green">
                        <i className="fe fe-mail" />
                      </div>
                      <div>
                        <strong>Message Sent.</strong>
                        <div className="small text-muted">12 mins ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item d-flex pb-3">
                      <div className="notifyimg bg-pink">
                        <i className="fe fe-shopping-cart" />
                      </div>
                      <div>
                        <strong>Order Placed</strong>
                        <div className="small text-muted">2  hour ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item d-flex pb-3">
                      <div className="notifyimg bg-blue">
                        <i className="fe fe-calendar" />
                      </div>
                      <div>
                        <strong> Event Started</strong>
                        <div className="small text-muted">1  hour ago</div>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item d-flex pb-3">
                      <div className="notifyimg bg-orange">
                        <i className="fe fe-monitor" />
                      </div>
                      <div>
                        <strong>Your Admin Lanuch</strong>
                        <div className="small text-muted">2  days ago</div>
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item text-center">View all Notifications</a>
                  </div>
                </div>{/* notifications */}
                <div className="dropdown header-user">
                  <a className="nav-link leading-none siderbar-link text-right" data-toggle="sidebar-right" data-target=".sidebar-right">
                    <span className="mr-3 d-none d-lg-block ">
                      <span className="text-gray-white"><span className="ml-6">{data.Firstname}{' '}{data.Lastname}</span></span>
                    </span>
                    <span className="avatar avatar-md brround"><img src="/assets/dashboard/images/brand/avatar.png" alt="Profile-img" className="avatar avatar-md brround" /></span>
                  </a>
                </div>

                {/* <div className="dropdown">
                <a className="nav-link icon siderbar-link" data-toggle="sidebar-right" data-target=".sidebar-right">
                  <i className="fe fe-more-horizontal" />
                </a>
              </div> */}
                {/* Right-siebar*/}

              </div>
            </div>
          </div>
        </div>
        {/*app-header end*/}
      </>

    )
  }
}
export default AdminHeader