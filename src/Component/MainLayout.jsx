
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { useEffect, useState } from 'react';

export const MainLayout = () =>{
  
    const [showMenu, setShowMenu] = useState(false)  ;
    const [showDashboard, setDashboard] = useState(true);
    function dashboardComponent() {
        setDashboard(!showDashboard);
    }
    return(
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="app-brand demo">
                            <a href="index.html" className="app-brand-link">
                                <span className="app-brand-text demo menu-text fw-bolder ms-2">Entrilo</span>
                            </a>
                            {/* <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                                <i className="bx bx-chevron-left bx-sm align-middle"></i>
                            </a> */}
                        </div>

                        <div className="menu-inner-shadow"></div>

                        <ul className="menu-inner py-1">
                            <li className="menu-item active">
                                <div className="menu-link" onClick={dashboardComponent}>
                                    <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                    <div data-i18n="Analytics">Dashboard</div>
                                </div>
                            </li>
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">Pages</span>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:void(0);" class="menu-link menu-toggle" onClick={() => setShowMenu(!showMenu)} >
                                    <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                                    <div data-i18n="Authentications">Authentications</div>
                                </a>
                                {showMenu && (
                                    <ul class="menu-sub">
                                        <li class="menu-item">
                                            <div class="menu-link" target="_blank">
                                                <div data-i18n="Basic">Login</div>
                                            </div>
                                        </li>
                                        <li class="menu-item">
                                            
                                            <a href="auth-register-basic.html" class="menu-link" target="_blank">
                                                <div data-i18n="Basic">Register</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="auth-forgot-password-basic.html" class="menu-link" target="_blank">
                                                <div data-i18n="Basic">Forgot Password</div>
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                
                            </li>
                        </ul>
                    </aside>
                   
                               
                    {showDashboard ? (
                        <Dashboard/>
                    ) : null}

                </div>

                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    )
} 