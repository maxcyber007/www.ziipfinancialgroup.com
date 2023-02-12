import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AdminHOC from '../components/layouts/admin.hoc'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from "next/router";
import AdminFooter from '../components/layouts/admin.footer'
import Link from 'next/link'
import { useRef, useState } from 'react'


export default function Packages() {
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

        const handleCopy = async e => {
            e.preventDefault()
            // Get the text field
            var copyRefer = document.getElementById("referInput");
            // Copy the text inside the text field
            navigator.clipboard.writeText(copyRefer.value);
        }
        return (
            <AdminHOC>
                <Head>
                    <title>Precise Trading Systems Management</title>
                </Head>
                {/* app-content*/}
                <div className="app-content  my-3 my-md-5 toggle-content">
                    <div className="side-app">
                        <div className="bg-white p-3 header-secondary row">
                            <div className="col">
                                <div className="d-flex">
                                    <a className="btn btn-danger" href="#"><i className="fe fe-rotate-cw mr-1 mt-1" /> Upgrade </a>
                                </div>
                            </div>
                            <div className="col col-auto">
                                <a className="btn btn-light mt-4 mt-sm-0" href="#"><i className="fe fe-help-circle mr-1 mt-1" />  Support</a>
                                <a className="btn btn-success mt-4 mt-sm-0" href="#"><i className="fe fe-plus mr-1 mt-1" /> Add New</a>
                            </div>
                        </div>
                        {/* page-header */}
                        <div className="page-header">
                            <ol className="breadcrumb">{/* breadcrumb */}
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Pricing Tables</li>
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
                        {/* row */}
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                <div className="card-status bg-primary" />
                                    <div className="card-body text-center">
                                        <div className="card-category">BASIC</div>
                                        <div className="display-5 my-4">$100</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>4</strong> Ads</li>
                                            <li><i className="fe fe-check text-success mr-2" /> 30 days</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Private Messages</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Urgent Ads</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="#" className="btn btn-primary btn-block">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* col-end */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-status bg-success" />
                                    <div className="card-body text-center">
                                        <div className="card-category">Standard</div>
                                        <div className="display-5 my-4">$300</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>50</strong> Ads</li>
                                            <li><i className="fe fe-check text-success mr-2" /> 60 Days</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Private Messages</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Urgent ads</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="#" className="btn btn-success btn-block">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* col-end */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                <div className="card-status bg-warning" />
                                    <div className="card-body text-center">
                                        <div className="card-category">Personal</div>
                                        <div className="display-5 my-4">$500</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>100</strong> Ads</li>
                                            <li><i className="fe fe-check text-success mr-2" /> 180 days</li>
                                            <li><i className="fe fe-check text-success mr-2" /> Private Messages</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Urgent ads</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="#" className="btn btn-danger btn-block">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* col-end */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                <div className="card-status bg-danger" />
                                    <div className="card-body text-center">
                                        <div className="card-category">Corporate</div>
                                        <div className="display-5 my-4">$1000</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>Unlimited</strong> Ads</li>
                                            <li><i className="fe fe-check text-success mr-2" /> 365 Days</li>
                                            <li><i className="fe fe-check text-success mr-2" /> Private Messages</li>
                                            <li><i className="fe fe-check text-success mr-2" /> Urgent ads</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="#" className="btn btn-info btn-block">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* col-end */}
                        </div>
                        {/* row end */}

                                                {/* row */}
                                                <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                <div className="card-status bg-azure" />
                                    <div className="card-body text-center">
                                        <div className="card-category">ENTERPRISE</div>
                                        <div className="display-5 my-4">$2000</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>4</strong> Ads</li>
                                            <li><i className="fe fe-check text-success mr-2" /> 30 days</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Private Messages</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Urgent Ads</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="#" className="btn btn-primary btn-block">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* col-end */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-status bg-secondary" />
                                    <div className="card-body text-center">
                                        <div className="card-category">Premium</div>
                                        <div className="display-5 my-4">$3000</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>50</strong> Ads</li>
                                            <li><i className="fe fe-check text-success mr-2" /> 60 Days</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Private Messages</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Urgent ads</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="#" className="btn btn-success btn-block">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* col-end */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                <div className="card-status bg-orange" />
                                    <div className="card-body text-center">
                                        <div className="card-category">BUSINESS</div>
                                        <div className="display-5 my-4">$5000</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>100</strong> Ads</li>
                                            <li><i className="fe fe-check text-success mr-2" /> 180 days</li>
                                            <li><i className="fe fe-check text-success mr-2" /> Private Messages</li>
                                            <li><i className="fe fe-x text-danger mr-2" /> Urgent ads</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="#" className="btn btn-danger btn-block">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* col-end */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                <div className="card-status bg-cyan" />
                                    <div className="card-body text-center">
                                        <div className="card-category">Unlimited</div>
                                        <div className="display-5 my-4">$10000</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>Unlimited</strong> Ads</li>
                                            <li><i className="fe fe-check text-success mr-2" /> 365 Days</li>
                                            <li><i className="fe fe-check text-success mr-2" /> Private Messages</li>
                                            <li><i className="fe fe-check text-success mr-2" /> Urgent ads</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="#" className="btn btn-info btn-block">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* col-end */}
                        </div>
                        {/* row end */}

                                            </div>
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
                    <footer className="footer">
                        <div className="container">
                            <div className="row align-items-center flex-row-reverse">
                                <div className="col-lg-12 col-sm-12   text-center">
                                    Copyright © 2019 <a href="#">Hogo</a>. Designed by <a href="https://www.spruko.com/">Spruko</a> All rights reserved.
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* End Footer*/}
                </div>
                {/* End app-content*/}



            </AdminHOC>
        )
    }
}
