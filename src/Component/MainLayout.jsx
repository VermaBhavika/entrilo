
import { useState, React } from 'react';
import { DesignComponent } from './DesignComponent';
import { Dashboard } from './Dashboard'
import Avatar1 from '../assests/img/avatars/1.png'

export const MainLayout = () => {

    const [component, setComponent] = useState('dashboard');
    // const [design, setDesign] = useState(false);

    // function dashboardComponent() {
    //     setDashboard(!dashboard);
    // }
    // function designComponent() {
    //     setDesign(!design);
    // }



    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                    <div className="app-brand demo">
                        <a href="index.html" className="app-brand-link">
                            <span className="app-brand-text demo menu-text fw-bolder ms-2">Entrilo</span>
                        </a>
                    </div>
                    <div className="menu-inner-shadow"></div>
                    <ul className="menu-inner py-1">
                        <li className={`menu-item ${component == 'dashboard' && 'active'}`} onClick={() => {setComponent('dashboard')
                    }}>
                            <div className="menu-link" >
                                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                <div data-i18n="Analytics">Dashboard</div>
                            </div>
                        </li>

                        <li className={`menu-item ${component == 'design' && 'active'}`} onClick={() => setComponent('design')}>
                            <div className="menu-link">
                                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                <div data-i18n="Analytics">Design Component</div>
                            </div>
                        </li>
                    </ul>
                </aside>
                <div className="layout-page">
                    <div className='container-xxl'>
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

                        {component == 'dashboard' && <Dashboard />}
                        {component == 'design' && <DesignComponent /> }
                    </div>
                </div>
            </div>
        </div>
    );
};