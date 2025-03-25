import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect} from "react";
import DynamicDropdownA from "./components/DynamicDropdownA";
import React from "react";

function App() {

    

   
    

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
           
    
                let selectedRow = null; // Store the selected row
            
                //loadTableData();// Load stored data on page load
                // Click on a row to open the modal
                $("#table-1 tbody tr").on('click', function () {
                    selectedRow = $(this); // Store selected row
                    $("#remark-1").val(""); // Clear input field
                 });
                // Function to update selected row
                function updateRow(status) {
                    let remarkText = $("#remark-1").val().trim();
                    selectedRow.find(".remarks").text(remarkText);
                    selectedRow.find(".status").text(status).addClass(status);
                    if (status === "Approved") {
                        selectedRow.find(".remit").html('<a href="#sanjay">Remit Interest</a>');
                        selectedRow.find(".select-row, a.link-enebled").addClass("disabled").css("pointer-events", "none").css("color", "black").attr("aria-disabled", "true");
                    } else{
                        selectedRow.find(".select-row, a.link-enebled").addClass("disabled").css("pointer-events", "none").css("color", "black").attr("aria-disabled", "true");
                    }
                    //saveTableData();// Save changes to LocalStorage
                    window.$("#detailsaved").modal("hide"); // Close modal
                }
                // Approve button click
                $("#reDirectpage1").on('click', function () {
                    let remarkText = $("#remark-1").val();
                    if (remarkText !== ""){
                    updateRow("Approved");
                    $("div#approved").removeClass("d-none");
                    $("div#rejected").addClass("d-none");
                    selectedRow.find(".status").text("Approved").addClass("text-success");
                    
                    }
                    else if (remarkText === ""){
                        $("#error1").show();
    
                        selectedRow.find("#detailsaved").show();
                        
                        //window.$("#detailsaved").modal("hide");
                         } else {
                            //window.$("#detailsaved").show().css("display", "block");
                         }
                         //return false;
                    //selectedRow = null; // Remove selection after updating
                });
                $("#remark-1").on("input", function() {
                    $("#error1").hide();
                });
                // Reject button click
                $("#reDirectpage2").on('click', function() {
                    let remarkText = $("#remark-1").val().trim();
                    if (remarkText !== ""){
                    updateRow("Rejected");
                    $("div#approved").addClass("d-none");
                    $("div#rejected").removeClass("d-none");
                    selectedRow.find(".status").text("Rejected").addClass("text-danger");
                    
                    }else{
                        
                        $("#error1").show();
                        
                    }
                    //selectedRow = null; // Remove selection after updating
                });
                $("#reDirectpage3").on('click', function() {
                    selectedRow = [];
                    $(".selected").removeClass("selected"); // Remove selection highlight
                    $("#remark-1").val(""); // Clear remark input
                    //window.$("#detailsaved").hide();
                    
                   
                });

 // show approved and rejected message with popup box 
    
 $("#reDirectpage1").on('click', function(){
    let remarkText = $("#remark-1").val().trim();
    if(remarkText !== ""){
    window.$("#detailsaved1").modal("show");
    $("#error2").removeClass("error");
    $("#error3").addClass("error");
    
    }
    
});
$("#reDirectpage2").on('click', function(){
    let remarkText = $("#remark-1").val().trim();
    if(remarkText !== ""){
    window.$("#detailsaved1").modal("show");
    $("#error3").removeClass("error");
    $("#error2").addClass("error");
    //window.$("#detailsaved").modal("show");
    }
    
});
$("#reDirectpage4").on('click', function(){
    window.$("#detailsaved, #detailsaved1").modal("hide");
    
})


                 // Save table data to localStorage
                 function saveTableData() {
                    let tableData = [];
                    window.$("#table-1 tbody tr").each(function () {
                        let row = {
                            id: $(this).data("id"),
                            name: $(this).find("td:eq(1)").text(),
                            remark: $(this).find(".remarks").text(),
                            status: $(this).find(".status").text(),
                            remit: $(this).find(".remit").html()
                        };
                        tableData.push(row);
                    });
                    localStorage.setItem("tableData", JSON.stringify(tableData));
                }
                // Load table data from localStorage
                function loadTableData() {
                    let storedData = localStorage.getItem("tableData");
                    if (storedData) {
                        let tableData = JSON.parse(storedData);
                        tableData.forEach(row => {
                            let rowElement = $("#table-1 tbody tr[data-id='" + row.id + "']");
                            rowElement.find(".remarks").text(row.remark);
                            rowElement.find(".status").text(row.status).removeClass("approved rejected").addClass(row.status.toLowerCase());
                            rowElement.find(".remit").html(row.remit);
                        });
                    }
                }
       
        }, []);
        


    return (
<>


<div className="" id="body-id">
    

    
    <div className="wrapper">
        
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
    </div>

    <div className="pt-5 pb-2"></div>
    
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
                                        <span className="text-warning">2024-2025</span>
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
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
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
                                                tabindex="-1" aria-disabled="true">Change Password
                                            </a>
                                            <a href="#sanjay" className="list-group-item list-group-item-action active"
                                                aria-current="true">
                                                Sign Out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div className="content-page pt-1 mt-4">
        <div className="container-fluid">
	    <div id="card mb-2"
	      style={{ border: "2px solid white", borderTopLeftRadius: "0.8rem", borderTopRightRadius: "0.8rem" }}>
	       <div className="card-header p-0 d-flex" style={{ flexDirection: "column" }}>
                    <div className="header-title p-1 pl-3" style={{ width: "100%", borderTopLeftRadius: "0.7rem", borderTopRightRadius: "0.7rem", background: "linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%)" }}>
                        Manage Interest Earned on Unspent balance for SNA/CNA Schemes
                    </div>
	       	       
            <div className="card mt-5 ml-5 mr-5" style={{border:"1px solid #F98412"}} id="card1">
	      
<div className="label-input-group mb-5 validBorder">
<label className="input-label mb-5" for="interest-earned">Interest Earned In Scheme</label>
</div>
<div className="text-success text-center d-none mb-2" id="approved" style={{fontSize: "12px"}}>Request has been approved successfully</div>
<div className="text-danger text-center d-none mb-2" id="rejected" style={{fontSize: "12px"}}>Request has been rejected successfully</div>
<DynamicDropdownA />

<form id="myForm1">
	    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                
		  <div className="row col-sm-12 col-md-12 col-lg-6 flex-nowrap mb-3" id="myForm">
		     
                                <div className="row mb-3">
                                    {/*<label className="control-label text-right col-md-5 col-lg-4" for="scheme-type">Scheme Type: <span style={{color:"red"}}>*</span></label>
                                    <div className="col-md-5 col-lg-8">
                                        <select className="form-control form-control-sm" id="scheme-type">
                                <option className="text-center" select="" value=""> -- Select -- </option>
                                <option value="State Govt. Scheme">State Govt. Scheme</option>
                                <option value="State Govt. Scheme-1">State Govt. Scheme-1</option>
                                <option value="State Govt. Scheme-2">State Govt. Scheme-2</option>

                            </select>
			    
                                    </div>*/}
                                    <div id="error-message"  className="text-danger error" style={{fontSize:"12px"}}>Please select a valid option.</div>
                                </div>

                                <div className="row mb-3">
                                    {/*<label className="control-label text-right col-md-5 col-lg-4" for="scheme">Scheme: <span style={{color:"red"}}>*</span></label>
                                    <div className="col-md-5 col-lg-8">
                                        <select className="form-control form-control-sm" id="scheme">
                                <option className="text-center" select="" value=""> -- Select -- </option>
                                <option value="BFST Test Scheme [BR180]">BFST Test Scheme [BR180]</option>
                                <option value="BFST Test Scheme [BR180]-1">BFST Test Scheme [BR180]-1</option>
                                <option value="BFST Test Scheme [BR180]-2">BFST Test Scheme [BR180]-2</option>

                            </select>
			    
                                    </div>*/}
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
                                <table id="table-1" className="table w-100 tableintrest table-bordered bg-white text-center mb-1 table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>Scheme</th>
                                            <th>Remit Center Amount</th>
                                            <th>Controller</th>
                                            <th>PAO</th>
					                        <th>DDO</th>
                                            <th>Approver Remarks</th>
                                            <th>Created By</th>
                                            <th>Created Date</th>
					                        <th>Payment Mode</th>
                                            <th>Statue</th>
                                            <th>Pay through NTRP</th>                                           
                                         </tr>                                       
                                    </thead>
                                    <tbody>
                                        <tr data-id="1">
                                            <td className="text-center select-row"><a id="addButton-1" className="font-12 link-enebled" data-bs-toggle="modal" href="#detailsaved">BFST Test Scheme [BR180]</a></td>
                                            <td className="text-center">22446.75</td>
                                            <td className="text-center">001-AGRICULTURE</td>
                                            <td className="text-center">000001-PAO(Sectt)-I</td>
					                        <td className="text-center">200425-NATIONAL RAINEFED AREA AUTHORITY</td>
					                        <td className="text-center remarks"></td>
                                            <td className="text-center">BR3808DO</td>
                                            <td className="text-center">31/05/2023</td>
                                            <td className="text-center">NEFT\RTGS PAYMENT</td>
					                        <td className="text-center status">Submitted</td>
                                            <td className="text-center remit" id="remit-1"><a className="remitLink" style={{ display:"none" }} href="#sanjay">Remit Interest</a></td>
                                        </tr>
                                        <tr data-id="2">
                                            <td className="text-center select-row"><a id="addButton-2" className="font-12 link-enebled" data-bs-toggle="modal" href="#detailsaved">BFST Test Scheme [BR180]</a></td>
                                            <td className="text-center">24663.00</td>
                                            <td className="text-center">001-AGRICULTURE</td>
                                            <td className="text-center">000001-PAO(Sectt)-I</td>
					                        <td className="text-center">200425-NATIONAL RAINEFED AREA AUTHORITY</td>
					                        <td className="text-center remarks"></td>
                                            <td className="text-center">BR3808DO</td>
                                            <td className="text-center">31/05/2023</td>
                                            <td className="text-center">NEFT\RTGS PAYMENT</td>
					                        <td className="text-center status">Submitted</td>
                                            <td className="text-center remit" id="remit-2"><a className="remitLink" style={{ display:"none" }} href="#sanjay">Remit Interest</a></td>
                                        </tr>
                                        <tr data-id="3">
                                            <td className="text-center select-row"><a id="addButton-3" className="font-12 link-enebled" data-bs-toggle="modal" href="#detailsaved">BFST Test Scheme [BR180]</a></td>
                                            <td className="text-center">1285.46</td>
                                            <td className="text-center">001-AGRICULTURE</td>
                                            <td className="text-center">000001-PAO(Sectt)-I</td>
					                        <td className="text-center">200425-NATIONAL RAINEFED AREA AUTHORITY</td>
					                        <td className="text-center remarks"></td>
                                            <td className="text-center">BR3808DO</td>
                                            <td className="text-center">08/06/2023</td>
                                            <td className="text-center">NEFT\RTGS PAYMENT</td>
					                        <td className="text-center status">Submitted</td>
                                            <td className="text-center remit" id="remit-3"><a className="remitLink" style={{ display:"none" }} href="#sanjay">Remit Interest</a></td>
                                        </tr>
                                        <tr data-id="4">
                                            <td className="text-center select-row"><a id="addButton-4" className="font-12 link-enebled" data-bs-toggle="modal" href="#detailsaved">BFST Test Scheme [BR180]</a></td>
                                            <td className="text-center">1285.46</td>
                                            <td className="text-center">001-AGRICULTURE</td>
                                            <td className="text-center">000001-PAO(Sectt)-I</td>
					                        <td className="text-center">119830-ENFORCEMENT DIRECTORATE, AHMEDABAD</td>
					                        <td className="text-center remarks"></td>
                                            <td className="text-center">BR3808DO</td>
                                            <td className="text-center">31/05/2023</td>
                                            <td className="text-center">NEFT\RTGS PAYMENT</td>
					                         <td className="text-center status">Submitted</td>
                                            <td className="text-center remit" id="remit-4"><a className="remitLink" style={{ display:"none" }} href="#sanjay">Remit Interest</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
		   </div>
            </div>
	       </div>
		  </div>
	 
	       </div>
	       <div className="modal fade" id="detailsaved" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header py-2">
                            <h5 className="modal-title text-warning" id="exampleModalToggleLabel">Remarks</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center p-2">
                            <input type="text" id="remark-1" placeholder="Please Enter Remark..." className="text-center align-top" />
                            <p className="text-danger error" id="error1" style={{fontSize: "12px"}}>⚠ Please enter a remark before proceeding.</p>
                        </div>
			
                        <div className="modal-footer">
                <button className="mx-auto py-1 btn-sm btn-success btn-rounded font-12 btn" id="reDirectpage1" type="button">Approve</button>
			    <button className="mx-auto py-1 btn-sm btn-danger btn-rounded font-12 btn" id="reDirectpage2" type="button">Reject</button>
			    <button className="mx-auto py-1 btn-sm btn-secondary btn-rounded font-12 btn" id="reDirectpage3" data-bs-dismiss="modal" type="button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="detailsaved1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1"
                tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header py-2">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center p-2">
                            <h2 className="text-success error" id="error2"><strong>Approved</strong></h2>
                            <h2 className="text-danger error" id="error3"><strong>Rejected</strong></h2>
                        </div>
			
                        <div className="modal-footer">
                            
			    <button className="mx-auto py-1 btn-sm btn-success btn-rounded font-12 btn" id="reDirectpage4" data-bs-dismiss="modal" type="button" data-bs-target="#detailsaved">OK</button>
			    
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
                        <script>document.write(new Date().getFullYear())</script>©
                    </span> <a href="#sanjay" className="">PFMS</a>.
                </div>
            </div>
        </div>
    </footer>
  
    
    <script type="text/javascript" src="src/js/chart.js"></script>
    <script type="text/javascript" src="src/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="src/js/daterangepicker.js"></script>
    <script type="text/javascript" src="src/vendor/daterangepicker/moment.min.js"></script>
    <script type="text/javascript" src="src/vendor/daterangepicker/daterangepicker.min.js"></script>
    <script type="text/javascript" src="src/vendor/datetimepicker/js/bootstrap-datetimepicker.js"></script>
    
    
    <script src="src/js/custom.js"></script>
    
</div>
</>
        


  );
}

export default App;
