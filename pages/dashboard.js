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


export default function Dashboard() {
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
            {/* page-header */}
            <div className="page-header">
              <ol className="breadcrumb">{/* breadcrumb */}
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                {/* <li className="breadcrumb-item active" aria-current="page">Dashboard</li> */}
              </ol>{/* End breadcrumb */}
            </div>
            {/* End page-header */}
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel owl-carousel2 owl-theme mb-5">
                  <div className="item">
                    <div className="card mb-0">
                      <div className="row">
                        <div className="col-4">
                          <div className="feature">
                            <div className="fa-stack fa-lg fa-2x icon bg-primary-transparent">
                              <i className="si si-briefcase  fa-stack-1x text-primary" />
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="card-body p-3  d-flex">
                            <div>
                              <p className="text-muted mb-1">Total Income</p>
                              <h2 className="mb-0 text-dark">18,367K</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card mb-0">
                      <div className="row">
                        <div className="col-4">
                          <div className="feature">
                            <div className="fa-stack fa-lg fa-2x icon bg-success-transparent">
                              <i className="si si-drawer fa-stack-1x text-success" />
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="card-body p-3  d-flex">
                            <div>
                              <p className="text-muted mb-1">Total Profit</p>
                              <h2 className="mb-0 text-dark">35%</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card mb-0">
                      <div className="row">
                        <div className="col-4">
                          <div className="feature">
                            <div className="fa-stack fa-lg fa-2x icon bg-pink-transparent">
                              <i className="si si-layers fa-stack-1x text-pink" />
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="card-body p-3  d-flex">
                            <div>
                              <p className="text-muted mb-1">Total Revenue</p>
                              <h2 className="mb-0 text-dark">3,548K</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card mb-0">
                      <div className="row">
                        <div className="col-4">
                          <div className="feature">
                            <div className="fa-stack fa-lg fa-2x icon bg-warning-transparent">
                              <i className="si si-chart fa-stack-1x text-warning" />
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="card-body p-3  d-flex">
                            <div>
                              <p className="text-muted mb-1">Total Sales</p>
                              <h2 className="mb-0 text-dark">9,756</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-bgimg br-7">
                  <div className="row">
                    <div className="col-xl-2 col-lg-6 col-sm-6 pr-0 pl-0">
                      <div className="card-body text-center">
                        <h5 className="text-white">Today</h5>
                        <h2 className="mb-2 mt-3 fs-2 text-white mainvalue">863</h2>
                        <div><i className="si si-graph mr-1 text-danger" /><span className="text-white">Sales</span></div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-sm-6 pr-0 pl-0">
                      <div className="card-body text-center">
                        <h5 className="text-white">Yesterday</h5>
                        <h2 className="mb-2 mt-3 fs-2 text-white mainvalue">1,364</h2>
                        <div><i className="si si-graph mr-1 text-danger" /><span className="text-white">Sales</span></div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-sm-6 pr-0 pl-0">
                      <div className="card-body text-center">
                        <h5 className="text-white">Last Week</h5>
                        <h2 className="mb-2 mt-3 fs-2 text-white mainvalue">3,876</h2>
                        <div><i className="si si-graph mr-1 text-danger" /><span className="text-white">Sales</span></div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-sm-6 pr-0 pl-0">
                      <div className="card-body text-center">
                        <h5 className="text-white">Last Month</h5>
                        <h2 className="mb-2 mt-3 fs-2 text-white mainvalue">8,547</h2>
                        <div><i className="si si-graph mr-1 text-danger" /><span className="text-white">Sales</span></div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-sm-6 pr-0 pl-0">
                      <div className="card-body text-center">
                        <h5 className="text-white">Last 6Months</h5>
                        <h2 className="mb-2 mt-3 fs-2 text-white mainvalue">12,976</h2>
                        <div><i className="si si-graph mr-1 text-danger" /><span className="text-white">Sales</span></div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-sm-6 pr-0 pl-0">
                      <div className="card-body text-center">
                        <h5 className="text-white">Last Year</h5>
                        <h2 className="mb-2 mt-3 fs-2 text-white mainvalue">24,844</h2>
                        <div><i className="si si-graph mr-1 text-danger" /><span className="text-white">Sales</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-7 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header custom-header">
                    <div>
                      <h3 className="card-title">Click  Conversion</h3>
                      <h6 className="card-subtitle">Overview of Latest Month</h6>
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
                    <div>
                      <canvas id="conversion" className="chart-drop" />
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="text-center mt-0">
                          <h5 className="mb-1 text-muted">Total Users</h5>
                          <h2 className="mb-0 mt-2 fs-2 text-dark mainvalue">1,653</h2>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="text-center mt-4 mt-sm-0">
                          <h5 className="mb-1 text-muted">Total Leads</h5>
                          <h2 className="mb-0 mt-2 fs-2 text-dark mainvalue">639</h2>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="text-center mt-4 mt-lg-0">
                          <h5 className="mb-1 text-muted">Total Trials</h5>
                          <h2 className="mb-0 mt-2 fs-2 text-dark mainvalue">12,765</h2>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="text-center mt-4 mt-lg-0">
                          <h5 className="mb-1 text-muted">Total Wins</h5>
                          <h2 className="mb-0 mt-2 fs-2 text-dark mainvalue">24</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header custom-header">
                    <div>
                      <h3 className="card-title">Active Users</h3>
                      <h6 className="card-subtitle">Users</h6>
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
                    <div className="row">
                      <div className="col-md-4">
                        <div className="chart-circle mt-2 mb-2" data-value="0.80" data-thickness={10} data-color="#1753fc">
                          <div className="chart-circle-value"><div className="fs-2">80% </div></div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h4 className="mb-5">Active Users</h4>
                        <div className="mb-5">
                          <h5 className="mb-2 d-block">
                            <span className="fs-16"><b>74,526</b> Email Accounts</span>
                            <span className="float-right">80%</span>
                          </h5>
                          <div className="progress progress-md h-1">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-80" />
                          </div>
                        </div>
                        <div className="mb-0">
                          <h5 className="mb-2 d-block">
                            <span className="fs-16"><b>14,526</b> Requests</span>
                            <span className="float-right">30%</span>
                          </h5>
                          <div className="progress progress-md h-1">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger w-30" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h4 className="mb-5">Deactive Users</h4>
                        <div className="mb-5">
                          <h5 className="mb-2 d-block">
                            <span className="fs-16"><b>7,325</b> Email Accounts</span>
                            <span className="float-right">20%</span>
                          </h5>
                          <div className="progress progress-md h-1">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-20" />
                          </div>
                        </div>
                        <div className="mb-0">
                          <h5 className="mb-2 d-block">
                            <span className="fs-16"><b>1,425</b> Directly</span>
                            <span className="float-right">30%</span>
                          </h5>
                          <div className="progress progress-md h-1">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger w-1" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="chart-circle mt-2" data-value="0.30" data-thickness={10} data-color="#e34a42">
                          <div className="chart-circle-value"><div className="fs-2">30% </div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header custom-header">
                    <div>
                      <h3 className="card-title">Top Ongoing Projects</h3>
                      <h6 className="card-subtitle">Overview this Month</h6>
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
                  <div className="card-body p-0">
                    <div className="list-group projects-list">
                      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start border-top-0">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1 font-weight-sembold">PSD Projects</h5>
                          <small className="text-danger"><i className="fa fa-caret-down mr-1" />5 days ago</small>
                        </div>
                        <p className="mb-0 text-dark">Started:17-02-2019</p>
                        <small className="text-muted">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</small>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1 font-weight-sembold">Wordpress Projects</h5>
                          <small className="text-success"><i className="fa fa-caret-up mr-1" />2 days ago</small>
                        </div>
                        <p className="mb-0 text-dark">Started:15-02-2019</p>
                        <small className="text-muted">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</small>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1 font-weight-sembold">HTML &amp; CSS3 Projects</h5>
                          <small className="text-danger"><i className="fa fa-caret-down mr-1" />1 days ago</small>
                        </div>
                        <p className="mb-0 text-dark">Started:26-02-2019</p>
                        <small className="text-muted">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</small>
                      </a>
                      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start br-br-7 br-bl-7">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1 font-weight-sembold">Java Projects</h5>
                          <small className="text-success"><i className="fa fa-caret-up mr-1" />10 days ago</small>
                        </div>
                        <p className="mb-0">Started:06-02-2019</p>
                        <small>Donec id elit non mi porta gravida at eget metus.</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header custom-header">
                    <div>
                      <h3 className="card-title">Acquisitions by Campaign</h3>
                      <h6 className="card-subtitle">Overview of all Campaign</h6>
                    </div>
                    <div className="card-options d-none d-sm-block">
                      <div className="btn-group btn-sm">
                        <button type="button" className="btn btn-light btn-sm">
                          <span className>Today</span>
                        </button>
                        <button type="button" className="btn btn-light btn-sm">
                          <span className>Month</span>
                        </button>
                        <button type="button" className="btn btn-light btn-sm">
                          <span className>Year</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-xl-6 col-md-12">
                        <div className="card-body">
                          <h4 className="mb-1 text-center">CPC Campaign</h4>
                          <div id="morrisBar8" className="chartsh chart-dropshadow" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-12">
                        <div className="card-body">
                          <h4 className="mb-4 text-center">CTC Campaign</h4>
                          <div>
                            <canvas id="lineChart1" className />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-5 mb-lg-0">
                          <h4 className="mb-4 d-block">
                            <span className="fs-16">CPC Campagin 01</span>
                            <span className="float-right font-weight-bold">50%</span>
                          </h4>
                          <div className="progress progress-md h-1">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-50" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-5 mb-lg-0">
                          <h4 className="mb-4 d-block">
                            <span className="fs-16">CPC Campagin 02</span>
                            <span className="float-right font-weight-bold">25%</span>
                          </h4>
                          <div className="progress progress-md h-1">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary w-25" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-0 mb-md-0">
                          <h4 className="mb-4 d-block">
                            <span className="fs-16">CPC Campagin 03</span>
                            <span className="float-right font-weight-bold">15%</span>
                          </h4>
                          <div className="progress progress-md h-1">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-yellow w-15" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header ">
                    <h3 className="card-title ">Projects</h3>
                    <div className="card-options">
                      <button id="add__new__list" type="button" className="btn btn-sm btn-primary " data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-plus" /> Add a new Project</button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-striped table-vcenter table-outline table-bordered text-nowrap ">
                      <thead>
                        <tr>
                          <th scope="col" className="border-top-0">ID</th>
                          <th scope="col" className="border-top-0">Project Name</th>
                          <th scope="col" className="border-top-0">Backend</th>
                          <th scope="col" className="border-top-0">Deadline</th>
                          <th scope="col" className="border-top-0">Team Members</th>
                          <th scope="col" className="border-top-0">Edit Project Details </th>
                          <th scope="col" className="border-top-0">list info</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>At vero eos et accusamus et iusto odio</td>
                          <td>PHP</td>
                          <td>15/11/2018</td>
                          <td>15 Members</td>
                          <td>
                            <a className="btn btn-sm btn-primary" href="#"><i className="fa fa-edit" /> Edit</a>
                            <a className="btn btn-sm btn-danger" href="#"><i className="fa fa-trash" /> Delete</a>
                          </td>
                          <td><a className="btn btn-sm btn-info" href="#"><i className="fa fa-info-circle" /> Details</a> </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>voluptatum deleniti atque corrupti quos</td>
                          <td>Angular js</td>
                          <td>25/11/2018</td>
                          <td>12 Members</td>
                          <td>
                            <a className="btn btn-sm btn-primary" href="#"><i className="fa fa-edit" /> Edit</a>
                            <a className="btn btn-sm btn-danger" href="#"><i className="fa fa-trash" /> Delete</a>
                          </td>
                          <td><a className="btn btn-sm btn-info" href="#"><i className="fa fa-info-circle" /> Details</a> </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>dignissimos ducimus qui blanditiis praesentium </td>
                          <td>Java</td>
                          <td>5/12/2018</td>
                          <td>20 Members</td>
                          <td>
                            <a className="btn btn-sm btn-primary" href="#"><i className="fa fa-edit" /> Edit</a>
                            <a className="btn btn-sm btn-danger" href="#"><i className="fa fa-trash" /> Delete</a>
                          </td>
                          <td><a className="btn btn-sm btn-info" href="#"><i className="fa fa-info-circle" /> Details</a> </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>deleniti atque corrupti quos dolores</td>
                          <td>Phython</td>
                          <td>14/12/2018</td>
                          <td>10 Members</td>
                          <td>
                            <a className="btn btn-sm btn-primary" href="#"><i className="fa fa-edit" /> Edit</a>
                            <a className="btn btn-sm btn-danger" href="#"><i className="fa fa-trash" /> Delete</a>
                          </td>
                          <td><a className="btn btn-sm btn-info" href="#"><i className="fa fa-info-circle" /> Details</a> </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>et quas molestias excepturi sint occaecati</td>
                          <td>Phython</td>
                          <td>4/12/2018</td>
                          <td>17 Members</td>
                          <td>
                            <a className="btn btn-sm btn-primary" href="#"><i className="fa fa-edit" /> Edit</a>
                            <a className="btn btn-sm btn-danger" href="#"><i className="fa fa-trash" /> Delete</a>
                          </td>
                          <td><a className="btn btn-sm btn-info" href="#"><i className="fa fa-info-circle" /> Details</a> </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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

            <div className="panel-body tabs-menu-body side-tab-body p-0 border-0 ">
              <div className="tab-content border-top">
                <div className="tab-pane active " id="tab">
                  <div className="card-body p-0">
                    <div className="header-user text-center mt-4 pb-4">
                      <span className="avatar avatar-xxl brround"><img src="/assets/images/brand/avatar.jpg" alt="Profile-img" className="avatar avatar-xxl brround" /></span>
                      <div>
                        <span className="text-dark app-sidebar__user-name font-weight-semibold">{data.Firstname}{' '}{data.Lastname}</span>
                      </div>
                      <small>Web Designer</small>
                      <div className="card-body">
                        <div className="form-group">
                          <label className="form-label text-left">Referal Link</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <Link href="#" onClick={handleCopy}><i className="fa fa-clone tx-16 lh-0 op-6" /></Link>
                              </div>
                            </div>
                            <input id="referInput" className="form-control fc-datepicker" type="text" value={`${window.location.origin}/signup?ref=${data.Ref_code}`} />
                          </div>


                        </div>

                      </div>
                    </div>

                    <div className="card-body border-top">
                      <div className="row">
                        <div className="col-4 text-center">
                          <a className href><i className="fa fa-sitemap mdi  mdi-message-outline fs-20 m-0 leading-tight" /></a>
                          <div>TEAM</div>
                        </div>
                        <div className="col-4 text-center">
                          <a className href><i className="fa fa-drivers-license mdi mdi-tune fs-20 m-0 leading-tight" /></a>
                          <div>KYC</div>
                        </div>
                        <div className="col-4 text-center">
                          <Link href=""><i className="fa fa-expeditedssl mdi mdi-logout-variant fs-20 m-0 leading-tight" /></Link>
                          <div>2FA</div>
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
