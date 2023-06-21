import  ManLaptop  from '../assests/img/illustrations/man-with-laptop-light.png';
import Avatar1 from '../assests/img/avatars/1.png'
import ChartSuccess from '../assests/img/icons/unicons/chart-success.png';
import WalletInfo from '../assests/img/icons/unicons/wallet-info.png';
import Paypal from  '../assests/img/icons/unicons/paypal.png';
import CcPrimary from '../assests/img/icons/unicons/cc-primary.png';
import TotalChart from '../assests/img/illustrations/total-chart.png';
import GrowthChart from '../assests/img/illustrations/growth-chart.png';
import lineGraph from '../assests/img/illustrations/line-graph.png';
import { useEffect } from 'react';

export const MainLayout = () =>{
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "../assets/js/dashboards-analytics.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, []);
    return(
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="app-brand demo">
                            <a href="index.html" className="app-brand-link">
                                <span className="app-brand-logo demo">
                                    {/* <svg
                                        width="25"
                                        viewBox="0 0 25 42"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns: xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs>
                                            <path
                                                d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                                                id="path-1"
                                            ></path>
                                            <path
                                                d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                                                id="path-3"
                                            ></path>
                                            <path
                                                d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                                                id="path-4"
                                            ></path>
                                            <path
                                                d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                                                id="path-5"
                                            ></path>
                                        </defs>
                                        <g id="g-app-brand" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                                                <g id="Icon" transform="translate(27.000000, 15.000000)">
                                                    <g id="Mask" transform="translate(0.000000, 8.000000)">
                                                        <mask id="mask-2" fill="white">
                                                            <use xlink: href="#path-1"></use>
                                                        </mask>
                                                        <use fill="#696cff" xlink: href="#path-1"></use>
                                                        <g id="Path-3" mask="url(#mask-2)">
                                                            <use fill="#696cff" xlink: href="#path-3"></use>
                                                            <use fill-opacity="0.2" fill="#FFFFFF" xlink: href="#path-3"></use>
                                                        </g>
                                                        <g id="Path-4" mask="url(#mask-2)">
                                                            <use fill="#696cff" xlink: href="#path-4"></use>
                                                            <use fill-opacity="0.2" fill="#FFFFFF" xlink: href="#path-4"></use>
                                                        </g>
                                                    </g>
                                                    <g
                                                        id="Triangle"
                                                        transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                                                    >
                                                        <use fill="#696cff" xlink: href="#path-5"></use>
                                                        <use fill-opacity="0.2" fill="#FFFFFF" xlink: href="#path-5"></use>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg> */}
                                </span>
                                <span className="app-brand-text demo menu-text fw-bolder ms-2">Entrilo</span>
                            </a>

                            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                                <i className="bx bx-chevron-left bx-sm align-middle"></i>
                            </a>
                        </div>

                        <div className="menu-inner-shadow"></div>

                        <ul className="menu-inner py-1">
                            <li className="menu-item active">
                                <a href="index.html" className="menu-link">
                                    <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                    <div data-i18n="Analytics">Dashboard</div>
                                </a>
                            </li>
                        </ul>
                    </aside>

                    <div className="layout-page">

                        <nav
                            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar"
                        >
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i className="bx bx-menu bx-sm"></i>
                                </a>
                            </div>

                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center">
                                        <i className="bx bx-search fs-4 lh-0"></i>
                                        <input
                                            type="text"
                                            className="form-control border-0 shadow-none"
                                            placeholder="Search..."
                                            aria-label="Search..."
                                        />
                                    </div>
                                </div>
                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                

                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online">
                                                <img src={Avatar1} alt className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img src={Avatar1} alt className="w-px-40 h-auto rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-semibold d-block">John Doe</span>
                                                            <small className="text-muted">Admin</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bx bx-user me-2"></i>
                                                    <span className="align-middle">My Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bx bx-cog me-2"></i>
                                                    <span className="align-middle">Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <span className="d-flex align-items-center align-middle">
                                                        <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                                        <span className="flex-grow-1 align-middle">Billing</span>
                                                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="auth-login-basic.html">
                                                    <i className="bx bx-power-off me-2"></i>
                                                    <span className="align-middle">Log Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>


                        <div className="content-wrapper">

                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-lg-8 mb-4 order-0">
                                        <div className="card">
                                            <div className="d-flex align-items-end row">
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                                                        <p className="mb-4">
                                                            You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                                                            your profile.
                                                        </p>

                                                        <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5 text-center text-sm-left">
                                                    <div className="card-body pb-0 px-0 px-md-4">
                                                        <img
                                                            src={ManLaptop}
                                                            height="140"
                                                            alt="View Badge User"
                                                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                                            data-app-light-img="illustrations/man-with-laptop-light.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 order-1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src= {ChartSuccess}
                                                                    alt="chart success"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt3"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                                                    <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="fw-semibold d-block mb-1">Profit</span>
                                                        <h3 className="card-title mb-2">$12,628</h3>
                                                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src={WalletInfo}
                                                                    alt="Credit Card"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt6"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                                                    <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>Sales</span>
                                                        <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                                                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.42%</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                                        <div className="card">
                                            <div className="row row-bordered g-0">
                                                <div className="col-md-8">
                                                    <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                                                    <img src={TotalChart} className='totalChart'/>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-sm btn-outline-primary dropdown-toggle"
                                                                    type="button"
                                                                    id="growthReportId"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    2022
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                                                                    <a className="dropdown-item" href="javascript:void(0);">2021</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">2020</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">2019</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src={GrowthChart} />
                                                    <div className="text-center fw-semibold pt-3 mb-2">62% Company Growth</div>

                                                    <div className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                                                        <div className="d-flex">
                                                            <div className="me-2">
                                                                <span className="badge bg-label-primary p-2"><i className="bx bx-dollar text-primary"></i></span>
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <small>2022</small>
                                                                <h6 className="mb-0">$32.5k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="me-2">
                                                                <span className="badge bg-label-info p-2"><i className="bx bx-wallet text-info"></i></span>
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <small>2021</small>
                                                                <h6 className="mb-0">$41.2k</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img src= {Paypal} alt="Credit Card" className="rounded" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt4"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                                                    <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="d-block mb-1">Payments</span>
                                                        <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                                                        <small className="text-danger fw-semibold"><i className="bx bx-down-arrow-alt"></i> -14.82%</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img src={CcPrimary}  alt="Credit Card" className="rounded" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt1"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="cardOpt1">
                                                                    <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="fw-semibold d-block mb-1">Transactions</span>
                                                        <h3 className="card-title mb-2">$14,857</h3>
                                                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.14%</small>
                                                    </div>
                                                </div>
                                            </div>
                                             </div>
                                        <div className="row">
                                            <div className="col-12 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                                            <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                                                <div className="card-title">
                                                                    <h5 className="text-nowrap mb-2">Profile Report</h5>
                                                                    <span className="badge bg-label-warning rounded-pill">Year 2021</span>
                                                                </div>
                                                                <div className="mt-sm-auto">
                                                                    <small className="text-success text-nowrap fw-semibold"
                                                                    ><i className="bx bx-chevron-up"></i> 68.2%</small
                                                                    >
                                                                    <h3 className="mb-0">$84,686k</h3>
                                                                </div>
                                                            </div>
                                                            <img src={lineGraph} className='lineGraph'/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>


                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>

                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    )
} 