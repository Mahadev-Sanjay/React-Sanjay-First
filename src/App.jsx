import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import {useEffect, useState} from "react";
import DynamicDropdownA from "./components/DynamicDropdownA";
import MultiDropList from "./components/MultiDropList";
import Sidebar from "./components/Sidebar";
import React from "react";
import DynamicTable1 from "./components/DynamicTable1";
import ThemeSwitcher from './components/ThemeSwitcher';
import MessageA from './components/MessageA';

function App() {

    const [externalMessage, setExternalMessage] = useState("");
    const [messageType, setMessageType] = useState("info");
       
    useEffect(() => {
                    $("#buttonSearch-1").on('click', function(event) {
                    let isValid = true;
    
                    $(".form-control").each(function() {
                        if ($(this).val() === "") {
                            $(this).next(".error").show();
                            isValid = false;
                        } else {
                            $(this).next(".error").hide();
                        }
                
                    });
            if (isValid) {
                $("div#search").removeClass("d-none");
                $('#scheme-type, #scheme').prop('disabled', true);
                $(this).prop('disabled', true);
                    }
                });
    
                // Hide error message when a dropdown is selected
                $(".form-control").on('change', function() {
                    if ($(this).val() !== "") {
                        $(this).next(".error").hide();
                    }
                });
       
        }, []);

         // Optional: Auto-hide messages
  useEffect(() => {
    if (externalMessage) {
      //const timer = setTimeout(() => setExternalMessage(""), 5000);
      //return () => clearTimeout(timer);
    }
  }, [externalMessage]);

    return (
<>
<div className="" id="body-id"> 


        
       
<Sidebar />

    <div className="iq-top-navbar fixed">
        <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                    <i className="ri-menu-line wrapper-menu"></i>
                    <a href="index.html" className="header-logo">
                        <h4 className="logo-title text-uppercase"><img src="images/logo.png" alt="PFMS" /></h4>
                    </a>
                </div>
                
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation">
                        <i className="ri-menu-3-line"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-list align-items-center">
                           
                            <li className="nav-item nav-iconmr-3  mr-3 d-flex">
                                <div className="d-flex align-items-center">
                                    <div className=""><i className="text-warning  ri-user-line mr-1 mr-2"></i>
                                    </div>
                                    <div className=""> User Type :<br />
                                        <span className="text-warning">DEMODO</span>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item nav-iconmr-3 d-flex">
                                <div className="d-flex align-items-center">
                                    <div className=""> <i className="text-warning  ri-calendar-2-line mr-2"></i>
                                    </div>
                                    <div className=""> Financial Year:<br />
                                        <span className="text-warning">2025-2026</span>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item nav-icon dropdown caption-content">
                                <a href="#sanjay" className="search-toggle dropdown-toggle  d-flex align-items-center"
                                    id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="images/user/2.jpg" className="img-fluid rounded" alt="user" />
                                    <div className="caption ml-3">
                                        <h6 className="mb-0 line-height"> PFMS USER
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2"
                                                viewBox="0 0 20 20" fill="currentColor" height="20px" width="20px">
                                                <path fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        </h6>
                                    </div>
                                </a>
                                <div className="iq-sub-dropdown dropdown-menu mt-2" aria-labelledby="dropdownMenuButton4">
                                    <div className="profile-header">
                                        <div className="list-group">
                                            <a href="#sanjay" className="list-group-item list-group-item-action">
                                                My Profile</a>
                                            <a href="#sanjay" className="list-group-item list-group-item-action">
                                                Login History</a>
                                            <a href="#sanjay" className="list-group-item list-group-item-action disabled"
                                                tabIndex="-1" aria-disabled="true">Change Password
                                            </a>
                                            <a href="#sanjay" className="list-group-item list-group-item-action active"
                                                aria-current="true">
                                                Sign Out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item nav-icon dropdown caption-content"><ThemeSwitcher /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div className="content-page pt-1 mt-5">
        <div className="container-fluid mt-4">
	    <div id="card mb-5"
	      style={{ border: "2px solid white", borderTopLeftRadius: "0.8rem", borderTopRightRadius: "0.8rem" }}>
	       <div className="card-header p-0 d-flex" style={{ flexDirection: "column" }}>
                    <div className="header-title p-1 pl-3" style={{ width: "100%", borderTopLeftRadius: "0.7rem", borderTopRightRadius: "0.7rem", background: "linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%)" }}>
                        Manage Interest Earned on Unspent balance for SNA/CNA Schemes
                    </div>
	       	       
            <div className="card mt-5 ml-5 mr-5" style={{border:"1px solid #F98412"}} id="card1">
	      
<div className="label-input-group mb-5 validBorder">
<label className="input-label mb-5" htmlFor="interest-earned">Interest Earned In Scheme</label>
</div>
<DynamicDropdownA />
<MultiDropList />
<MessageA message={externalMessage} type={messageType} />
<form id="myForm1">
	    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">   
		  <div className="row col-sm-12 col-md-12 col-lg-6 flex-nowrap mb-3" id="myForm">
		                              <div className="row mb-3">
                                    <div id="error-message"  className="text-danger error" style={{fontSize:"12px"}}>Please select a valid option.</div>
                                </div>
                                <div className="row mb-3">                               
                                    <div id="error-message1" className="text-danger error" style={{fontSize:"12px"}}>Please select a valid option.</div>
                                </div>
		   </div>
    		   <div className="mb-3 d-flex flex-nowrap">
                  <div className="col-sm-12 col-md-12 col-lg-12 text-center">                       
                <button id="buttonSearch-1" type="button" className="btn py-1 btn-sm btn-primary btn-rounded font-12">Search</button>
			  </div>
            </div>
          </div>
        </form>
	   </div>

<div className="card mb-2 mr-5 ml-5 d-none" id="search">
		   <div className="card-body p-2">
                <div className="col-sm-12 col-md-auto">
                   <div className="overflow-auto">                       
                   <DynamicTable1 onSuccess={(msg, type) => {
                                     setExternalMessage(msg);
                                     setMessageType(type);
                    }} />
                   </div>
                 </div>
		        </div>
              </div>
	         </div>
		    </div> 
	       </div>	       
        </div>
    <footer className="iq-footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="#sanjay">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="#sanjay">Terms of Use</a></li>
                    </ul>
                </div>
                <div className="col-lg-6 text-right">
                    <span className="mr-1">
                    <span>{new Date().getFullYear()} ©</span>
                    </span> <a href="#sanjay" className="">PFMS</a>.
                </div>
            </div>
        </div>
    </footer>
 </div>
</>
  );
}
export default App;
export { MessageA };