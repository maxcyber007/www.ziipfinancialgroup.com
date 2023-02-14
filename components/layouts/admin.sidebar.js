import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from "next/router";
import { useRef, useState } from 'react'

const AdminSidebar = () => {

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token')
    //window.location = '/signin'
    return router.push('/signin')
  }

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
      'Authorization': 'Bearer '+token
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      if(data.status == 'ok'){
        setIsLoaded(true);
        console.log(data)
      }else{
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
        {/* Sidebar menu*/}
        <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside className="app-sidebar toggle-sidebar">
          <div className="app-sidebar__user pb-0">
            <div className="user-body">
              <Image
                src="/assets/dashboard/images/brand/avatar.png"
                className="avatar avatar-xxl brround text-center cover-image"
                width={500}
                height={500}
              />
            </div>
            <div className="user-info">
              <a href="#" className="ml-2"><span className="text-dark app-sidebar__user-name font-weight-semibold">{data.Firstname}{' '}{data.Lastname}</span><br />
                <span className="text-muted app-sidebar__user-name text-sm"> Web Designer</span>
              </a>
            </div>
          </div>
          <div className="tab-menu-heading siderbar-tabs border-0  p-0">
            <div className="tabs-menu ">
              {/* Tabs */}
              <ul className="nav panel-tabs">
                <li><a href="#index1" className="active" data-toggle="tab"><i className="fa fa-home fs-17" /></a></li>
                <li><a href="#index2" data-toggle="tab"><i className="fa fa-envelope fs-17" /></a></li>
                <li><a href="#index3" data-toggle="tab"><i className="fa fa-user fs-17" /></a></li>
                <li><a href="login.html" title="logout"><i className="fa fa-power-off fs-17" /></a></li>
              </ul>
            </div>
          </div>
          
          <div className="panel-body tabs-menu-body side-tab-body p-0 border-0 ">
            <div className="tab-content">
              <div className="tab-pane active " id="index1">
                <ul className="side-menu toggle-menu">
                  <li>
                    <Link className="side-menu__item" href="/dashboard"><i class="side-menu__icon fa fa-home"></i><span class="side-menu__label">Home</span></Link>
                  </li>

                  <li>
                    <Link className="side-menu__item" href="/packages"><i class="side-menu__icon fa fa-cart-plus"></i><span class="side-menu__label">Packages</span></Link>
                  </li>
                  <li>
                    <Link className="side-menu__item" href="/member"><i class="side-menu__icon fa fa-user"></i><span class="side-menu__label">Member</span></Link>
                  </li>
                  <li>
                    <Link className="side-menu__item" href="#"><i class="side-menu__icon fa fa-cog"></i><span class="side-menu__label">Setting</span></Link>
                  </li>
                  {/* <li className="slide">
                    <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon typcn typcn-device-desktop" /><span className="side-menu__label">Dashboard</span><i className="angle fa fa-angle-right" /></a>
                    <ul className="slide-menu">
                      <li><a className="slide-item" href="index.html"><span>Dashboard 01</span></a></li>
                      <li><a className="slide-item" href="index2.html"><span>Dashboard 02</span></a></li>
                      <li><a className="slide-item" href="index3.html"><span>Dashboard 03</span></a></li>
                      <li><a className="slide-item" href="index4.html"><span>Dashboard 04</span></a></li>
                      <li><a className="slide-item" href="index5.html"><span>Dashboard 05</span></a></li>
                    </ul>
                  </li> */}

                  <li>
                    <Link className="side-menu__item" href="#" onClick={handleLogout}><i className="side-menu__icon fa fa-sign-out" /><span className="side-menu__label">Logout</span></Link>
                  </li>

                </ul>
              </div>


            </div>
          </div>
        </aside>

        {/*sidemenu end*/}

      </>
    )
}
}
export default AdminSidebar