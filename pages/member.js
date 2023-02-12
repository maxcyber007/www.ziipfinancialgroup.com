import React, { Component, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import AdminHOC from '../components/layouts/admin.hoc'
import { useRouter } from "next/router";
import AdminFooter from '../components/layouts/admin.footer'
import { useRef, useState } from 'react'

export default function Member() {
  // const { data: session, status } = useSession()
  // const router = useRouter()

  // if (status === "loading") {
  //   return <p></p>
  // }

  // if (status === "unauthenticated") {
  //   return (<>{router.push('/api/auth/signin')}</>)
  // }

  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false);
  
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
      if(data.status == 'ok'){
        setIsLoaded(true);
        console.log('Auth Success')
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

    <AdminHOC>
            <Head>
        <title>Precise Trading Systems Management</title>
      </Head>
      <div className="app-content  my-3 my-md-5 toggle-content">
        <div className="side-app">
                  <div class="bg-white p-5 header-secondary row">


        </div>
          {/* page-header */}
          <div className="page-header">
            <ol className="breadcrumb">{/* breadcrumb */}
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Member</li>
            </ol>{/* End breadcrumb */}
            <div className="ml-auto">
              <div className="input-group">
                <a className="btn btn-primary text-white mr-2" id="daterange-btn">
                  <span>
                    <i className="fa fa-calendar" /> Events Settings
                  </span>
                  <i className="fa fa-caret-down" />
                </a>
                <a href="#" className="btn btn-secondary text-white" data-toggle="tooltip" title data-placement="bottom" data-original-title="Rating">
                  <span>
                    <i className="fa fa-star" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* End page-header */}

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header custom-header">
                  <div>
                    <h3 className="card-title">Products Details</h3>
                    <h6 className="card-subtitle">Over of this week</h6>
                  </div>
                  <div className="card-options">
                    <a href className="mr-4 text-default" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                      <li><a href="#"><i className="si si-plus mr-2" />Add</a></li>
                      <li><a href="#"><i className="si si-trash mr-2" />Remove</a></li>
                      <li><a href="#"><i className="si si-eye mr-2" />View</a></li>
                      <li><a href="#"><i className="si si-settings mr-2" />More</a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered text-nowrap mb-0">
                      <thead>
                        <tr>
                          <th>Product ID</th>
                          <th>Product</th>
                          <th>Product Cost</th>
                          <th>Payment Mode</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="#">PRO12345</a></td>
                          <td>Mi LED Smart TV 4A 80</td>
                          <td>$14,500</td>
                          <td>Online Payment</td>
                          <td><span className="badge badge-success">Available</span></td>
                        </tr>
                        <tr>
                          <td><a href="#">PRO8765</a></td>
                          <td>Thomson R9 122cm (48 inch) Full HD LED TV </td>
                          <td>$30,000</td>
                          <td>Cash on delivered</td>
                          <td><span className="badge badge-primary">Available</span></td>
                        </tr>
                        <tr>
                          <td><a href="#">PRO54321</a></td>
                          <td>Vu 80cm (32 inch) HD Ready LED TV</td>
                          <td>$13,200</td>
                          <td>Online Payment</td>
                          <td><span className="badge badge-warning">Limited</span></td>
                        </tr>
                        <tr>
                          <td><a href="#">PRO97654</a></td>
                          <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
                          <td>$15,100</td>
                          <td>Cash on delivered</td>
                          <td><span className="badge badge-danger">No stock</span></td>
                        </tr>
                        <tr>
                          <td><a href="#">PRO4532</a></td>
                          <td>HP 200 Mouse &amp; Wireless Laptop Keyboard </td>
                          <td>$5,987</td>
                          <td>Online Payment</td>
                          <td><span className="badge badge-danger">No stock</span></td>
                        </tr>
                        <tr>
                          <td><a href="#">PRO6789</a></td>
                          <td>Digisol DG-HR3400 Router </td>
                          <td>$11,987</td>
                          <td>Cash on delivered</td>
                          <td><span className="badge badge-success">Available</span></td>
                        </tr>
                        <tr>
                          <td><a href="#">PRO4567</a></td>
                          <td>Dell WM118 Wireless Optical Mouse</td>
                          <td>$4,700</td>
                          <td>Online Payment</td>
                          <td><span className="badge badge-secondary">Available</span></td>
                        </tr>
                        <tr>
                          <td><a href="#">PRO32156</a></td>
                          <td>Dell 16 inch Laptop Backpack </td>
                          <td>$678</td>
                          <td>Cash On delivered</td>
                          <td><span className="badge badge-cyan">Limited</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/*End side app*/}
        {/* Right-sidebar*/}
        <div className="sidebar sidebar-right sidebar-animate">
          <div className="tab-menu-heading siderbar-tabs border-0">
            <div className="tabs-menu ">
              {/* Tabs */}
              <ul className="nav panel-tabs">
                <li className><a href="#tab" className="active" data-toggle="tab">Profile</a></li>
                <li className><a href="#tab1" data-toggle="tab">Chat</a></li>
                <li><a href="#tab2" data-toggle="tab">Activity</a></li>
                <li><a href="#tab3" data-toggle="tab">Todo</a></li>
              </ul>
            </div>
          </div>
          <div className="panel-body tabs-menu-body side-tab-body p-0 border-0 ">
            <div className="tab-content border-top">
              <div className="tab-pane active " id="tab">
                <div className="card-body p-0">
                  <div className="header-user text-center mt-4 pb-4">
                    <span className="avatar avatar-xxl brround"><img src="../assets/images/users/female/33.png" alt="Profile-img" className="avatar avatar-xxl brround" /></span>
                    <div className="dropdown-item text-center font-weight-semibold user h3 mb-0">Alison</div>
                    <small>Web Designer</small>
                    <div className="card-body">
                      <div className="form-group ">
                        <label className="form-label  text-left">Offline/Online</label>
                        <select className="form-control select2 " data-placeholder="Choose one">
                          <option label="Choose one">
                          </option>
                          <option value={1}>Online</option>
                          <option value={2}>Offline</option>
                        </select>
                      </div>
                      <div className="form-group ">
                        <label className="form-label text-left">Website</label>
                        <select className="form-control select2 " data-placeholder="Choose one">
                          <option label="Choose one">
                          </option>
                          <option value={1}>Spruko.com</option>
                          <option value={2}>sprukosoft.com</option>
                          <option value={3}>sprukotechnologies.com</option>
                          <option value={4}>sprukoinfo.com</option>
                          <option value={5}>sprukotech.com</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <a className="dropdown-item  border-top" href="#">
                    <i className="dropdown-icon mdi mdi-account-outline " /> Spruko technologies
                  </a>
                  <a className="dropdown-item border-top" href="#">
                    <i className="dropdown-icon  mdi mdi-account-plus" /> Add another Account
                  </a>
                  <div className="card-body border-top">
                    <div className="row">
                      <div className="col-4 text-center">
                        <a className href><i className="dropdown-icon mdi  mdi-message-outline fs-30 m-0 leading-tight" /></a>
                        <div>Inbox</div>
                      </div>
                      <div className="col-4 text-center">
                        <a className href><i className="dropdown-icon mdi mdi-tune fs-30 m-0 leading-tight" /></a>
                        <div>Settings</div>
                      </div>
                      <div className="col-4 text-center">
                        <a className href><i className="dropdown-icon mdi mdi-logout-variant fs-30 m-0 leading-tight" /></a>
                        <div>Sign out</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab1">
                <div className="chat">
                  <div className="contacts_card">
                    <div className="input-group p-3">
                      <input type="text" placeholder="Search..." className="form-control search" />
                      <div className="input-group-prepend">
                        <span className="input-group-text search_btn  "><i className="fa fa-search" /></span>
                      </div>
                    </div>
                    <ul className="contacts mb-0">
                      <li className="active">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="../assets/images/users/male/3.jpg" className="rounded-circle user_img" alt="img" />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <h6 className="mt-1 mb-0 ">Maryam Naz</h6>
                            <small className="text-muted">Maryam is online</small>
                          </div>
                          <div className="float-right text-right ml-auto mt-auto mb-auto"><small>01-02-2019</small></div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="../assets/images/users/female/1.jpg" className="rounded-circle user_img" alt="img" />
                          </div>
                          <div className="user_info">
                            <h6 className="mt-1 mb-0 ">Sahar Darya</h6>
                            <small className="text-muted">Sahar left 7 mins ago</small>
                          </div>
                          <div className="float-right text-right ml-auto mt-auto mb-auto"><small>01-02-2019</small></div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="../assets/images/users/female/9.jpg" className="rounded-circle user_img" alt="img" />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <h6 className="mt-1 mb-0 ">Maryam Naz</h6>
                            <small className="text-muted">Maryam is online</small>
                          </div>
                          <div className="float-right text-right ml-auto mt-auto mb-auto"><small>01-02-2019</small></div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="../assets/images/users/female/12.jpg" className="rounded-circle user_img" alt="img" />
                          </div>
                          <div className="user_info">
                            <h6 className="mt-1 mb-0 ">Yolduz Rafi</h6>
                            <small className="text-muted">Yolduz is online</small>
                          </div>
                          <div className="float-right text-right ml-auto mt-auto mb-auto"><small>02-02-2019</small></div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="../assets/images/users/male/15.jpg" className="rounded-circle user_img" alt="img" />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <h6 className="mt-1 mb-0 ">Nargis Hawa</h6>
                            <small className="text-muted">Nargis left 30 mins ago</small>
                          </div>
                          <div className="float-right text-right ml-auto mt-auto mb-auto"><small>02-02-2019</small></div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="../assets/images/users/male/17.jpg" className="rounded-circle user_img" alt="img" />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <h6 className="mt-1 mb-0 ">Khadija Mehr</h6>
                            <small className="text-muted">Khadija left 50 mins ago</small>
                          </div>
                          <div className="float-right text-right ml-auto mt-auto mb-auto"><small>03-02-2019</small></div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img src="../assets/images/users/female/18.jpg" className="rounded-circle user_img" alt="img" />
                          </div>
                          <div className="user_info">
                            <h6 className="mt-1 mb-0 ">Khadija Mehr</h6>
                            <small className="text-muted">Khadija left 50 mins ago</small>
                          </div>
                          <div className="float-right text-right ml-auto mt-auto mb-auto"><small>03-02-2019</small></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane  " id="tab2">
                <div className="list d-flex align-items-center border-bottom p-4">
                  <div className>
                    <span className="avatar bg-primary brround avatar-md">CH</span>
                  </div>
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 d-flex">
                      <b>New Websites is Created</b>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1" />
                        <small className="text-muted ml-auto">30 mins ago</small>
                        <p className="mb-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom p-4">
                  <div className>
                    <span className="avatar bg-danger brround avatar-md">N</span>
                  </div>
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 d-flex">
                      <b>Prepare For the Next Project</b>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1" />
                        <small className="text-muted ml-auto">2 hours ago</small>
                        <p className="mb-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom p-4">
                  <div className>
                    <span className="avatar bg-info brround avatar-md">S</span>
                  </div>
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 d-flex">
                      <b>Decide the live Discussion Time</b>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1" />
                        <small className="text-muted ml-auto">3 hours ago</small>
                        <p className="mb-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom p-4">
                  <div className>
                    <span className="avatar bg-warning brround avatar-md">K</span>
                  </div>
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 d-flex">
                      <b>Team Review meeting at yesterday at 3:00 pm</b>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1" />
                        <small className="text-muted ml-auto">4 hours ago</small>
                        <p className="mb-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom p-4">
                  <div className>
                    <span className="avatar bg-success brround avatar-md">R</span>
                  </div>
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 d-flex">
                      <b>Prepare for Presentation</b>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1" />
                        <small className="text-muted ml-auto">1 days ago</small>
                        <p className="mb-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center  border-bottom p-4">
                  <div className>
                    <span className="avatar bg-pink brround avatar-md">MS</span>
                  </div>
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 d-flex">
                      <b>Prepare for Presentation</b>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1" />
                        <small className="text-muted ml-auto">1 days ago</small>
                        <p className="mb-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom p-4">
                  <div className>
                    <span className="avatar bg-purple brround avatar-md">L</span>
                  </div>
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 d-flex">
                      <b>Prepare for Presentation</b>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1" />
                        <small className="text-muted ml-auto">45 mintues ago</small>
                        <p className="mb-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center p-4">
                  <div className>
                    <span className="avatar bg-blue brround avatar-md">U</span>
                  </div>
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0 d-flex">
                      <b>Prepare for Presentation</b>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1" />
                        <small className="text-muted ml-auto">2 days ago</small>
                        <p className="mb-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab3">
                <div className>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                      <span className="custom-control-label">Do Even More..</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox2" defaultValue="option2" defaultChecked />
                      <span className="custom-control-label">Find an idea.</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox3" defaultValue="option3" defaultChecked />
                      <span className="custom-control-label">Hangout with friends</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox4" defaultValue="option4" />
                      <span className="custom-control-label">Do Something else</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox5" defaultValue="option5" />
                      <span className="custom-control-label">Eat healthy, Eat Fresh..</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox6" defaultValue="option6" defaultChecked />
                      <span className="custom-control-label">Finsh something more..</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox7" defaultValue="option7" defaultChecked />
                      <span className="custom-control-label">Do something more</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox8" defaultValue="option8" />
                      <span className="custom-control-label">Updated more files</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox9" defaultValue="option9" />
                      <span className="custom-control-label">System updated</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="d-flex p-3 border-top border-bottom">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input" name="example-checkbox10" defaultValue="option10" />
                      <span className="custom-control-label">Settings Changings...</span>
                    </label>
                    <span className="ml-auto">
                      <i className="si si-pencil text-primary mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Edit" />
                      <i className="si si-trash text-danger mr-2" data-toggle="tooltip" title data-placement="top" data-original-title="Delete" />
                    </span>
                  </div>
                  <div className="text-center pt-5">
                    <a href="#" className="btn btn-primary btn-pill">Upgrade more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End Rightsidebar*/}
        {/*footer*/}
        <AdminFooter />
        {/* End Footer*/}

      </div>
      {/* End app-content*/}
    </AdminHOC>
  )
}
}
