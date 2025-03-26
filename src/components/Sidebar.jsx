import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "jquery-ui-dist/jquery-ui";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    

<div className="wrapper">
{isSidebarVisible && (
        <div className="iq-sidebar sidebar-default ">
            <div className="iq-sidebar-logo d-flex align-items-center">
                <a href="index.html" className="header-logo">
                    <img src="images/logo.png" alt="logo" />
                </a>
                <div className="iq-menu-bt-sidebar ml-0">
                    <i className="las la-bars wrapper-menu open"></i>
                </div>
            </div>
            <div className="data-scrollbar" data-scroll="1">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li className="">
                                <a href="#accountinterestdetail" className="collapsed" data-toggle="collapse" aria-expanded="false">
    
                                    <i className="ri-file-chart-fill "></i>
                                    <span className="ml-3">Manage Interest Earned <br/>on Unspent balance for <br/>SNA/CNA Schemes</span>
                                    <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                    <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                </a>
    
    
                                <ul id="accountinterestdetail" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
    
                                    
    
                                </ul>
                            </li>
                    </ul>
                </nav>
                <div id="sidebar-bottom" className="position-relative sidebar-bottom">
                    <div className="card border-none  shadow-none">
                        <div className="card-body rounded-pill bg-secondary">
                            <div className="sidebarbottom-content">
                                <div className="image"><img src="images/sidebar.png" className="img-fluid" alt="sidebar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-2"></div>
            </div>
        </div>
        )}
    </div>


  );
};

export default Sidebar;
