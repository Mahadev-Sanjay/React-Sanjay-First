function loadNavDiv() {
    var navbar_code_str = '  <div class="iq-sidebar sidebar-default "> <!-- <div class="sidebarshow"></div> --> <div class="iq-sidebar-logo d-flex align-items-center"> <a href="index.html" class="header-logo"> <img src="assets/images/logo.png" alt="logo"> </a> <div class="iq-menu-bt-sidebar ml-0"> <i class="las la-bars wrapper-menu open"></i> </div> </div> <div class="data-scrollbar" data-scroll="1"> <nav class="iq-sidebar-menu"> <ul id="iq-sidebar-toggle" class="iq-menu"> <li class="active"> <a href="index.html" class="svg-icon"> <i class="ri-home-4-fill "></i> <span class=" ml-3">Home</span> </a> </li> <li class=""> <a href="#infuencers" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-file-chart-fill "></i> <span class="ml-3">Scholarship Management</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="infuencers" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li class=""> <a href="#settings2" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Upload Student List</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="settings2" class="iq-submenu collapse" data-parent=""> <li class=""> <a href="#"> <span>Registered Issue Tracker</span> </a> </li> </ul> </li> <li class=""> <a href="#"> <span>Application Dashboard</span> </a> </li> </ul> </li> <li class=""> <a href="#tsa" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-calendar-todo-fill"></i> <span class="ml-3">TSA</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="tsa" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li class=""> <a href="#Transfer" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Transfer</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="Transfer" class="iq-submenu collapse" data-parent="#tsa"> <li class=""> <a href="#"> <span>Manage Assignment</span> </a> </li> <li class=""> <a href="#"> <span>Manage Bulk Assignment</span> </a> </li> <li class=""> <a href="#"> <span>AB Manage Return Assignment</span> </a> </li> <li class=""> <a href="#"> <span>PAO Manage Return Assignment</span> </a> </li> </ul> </li> <li class=""> <a href="#Expenditure" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Expenditure</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="Expenditure" class="iq-submenu collapse" data-parent="#tsa"> <li class=""> <a href="#"> <span>Manage TSA Expenditure</span> </a> </li> <li class=""> <a href="#"> <span>Manage TSA Bulk Expenditure</span> </a> </li> </ul> </li> <li class=""> <a href="#dscManagement" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>TSA DSC Management</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="dscManagement" class="iq-submenu collapse" data-parent="#tsa"> <li class=""> <a href="#"> <span>TSA Enroll Account DSC</span> </a> </li> </ul> </li> <li class=""> <a href="#interBankTransfer" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Inter Bank Transfert</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="interBankTransfer" class="iq-submenu collapse" data-parent="#tsa"> <li class=""> <a href="#"> <span>TSA Manage InterBank Transfer</span> </a> </li> </ul> </li> <li class=""> <a href="#dbtPayment" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>DBT Payment</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="dbtPayment" class="iq-submenu collapse" data-parent="#tsa"> <li class=""> <a href="#"> <span>Approve TSA DBT Payment</span> </a> </li> </ul> </li> <li class=""> <a href="#"> <span>Digitally Sign Assignement File</span> </a> </li> <li class=""> <a href="#MyAssignmentFunds" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>My Assignment Funds</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="MyAssignmentFunds" class="iq-submenu collapse" data-parent="#tsa"> <li class=""> <a href="#"> <span>Funds Received From Central Govt.</span> </a> </li> <li class=""> <a href="#"> <span>Funds Received From Agency</span> </a> </li> </ul> </li> <li class=""> <a href="#"> <span>TSA DSC Batch Creation</span> </a> </li> <li class=""> <a href="#"> <span>TSA Digital Sign Batch</span> </a> </li> </ul> </li> <li class=""> <a href="#EPayment" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-secure-payment-fill 2"></i> <span class="ml-3">E-Payment</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="EPayment" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li class=""> <a href="#"> <span>Download Benef. for Payment</span> </a> </li> <li class=""> <a href="#"> <span>Approve Payment</span> </a> </li> <li class=""> <a href="#"> <span>Print Payment Advice</span> </a> </li> <li class=""> <a href="#"> <span>Digitally Sign Payment File</span> </a> </li> <li class=""> <a href="#"> <span>Files Returned by Ministry</span> </a> </li> <li class=""> <a href="#"> <span>DSC Sign Payment File WinApp</span> </a> </li> </ul> </li> <li class=""> <a href="#HealthModule" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-hospital-fill"></i> <span class="ml-3">Health Module</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="HealthModule" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li class=""> <a href="#"> <span>Approve Event</span> </a> </li> <li class=""> <a href="#"> <span>HM Reports</span> </a> </li> </ul> </li> <li class=""> <a href="#Sanctions" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-pie-chart-fill"></i> <span class="ml-3">Sanctions</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="Sanctions" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li class=""> <a href="#"> <span>Manage UC</span> </a> </li> </ul> </li> <li class=""> <a href="#Reports"> <i class="ri-folders-fill"></i> <span class="ml-3">Reports</span> </a> </li> <li class=""> <a href="#MyDetails" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-user-2-fill"></i> <span class="ml-3">My Details</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="MyDetails" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li class=""> <a href="#"> <span>My Profile</span> </a> </li> <li class=""> <a href="#"> <span>Agency Profile Status</span> </a> </li> </ul> </li> <li> <a href="#Masters" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-database-2-fill"></i> <span class="ml-3">Masters</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="Masters" class=" iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li class=""> <a href="#BulkCustomization" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Bulk Customization</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="BulkCustomization" class="iq-submenu collapse" data-parent="#Masters"> <li class=""> <a href="#"> <span>Bulk Customization using Excel</span> </a> </li> <li class=""> <a href="#"> <span>Manage</span> </a> </li> </ul> </li> <li class=""> <a href="#BeneficiaryManagemen" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Beneficiary Management</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="BeneficiaryManagemen" class="iq-submenu collapse" data-parent="#Masters"> <li> <a href="upload_beneficiary_data.html"> <span>Upload Beneficiary Data</span> </a> </li> <li> <a href="add_new_beneficiary.html"> <span>Add New Beneficiary</span> </a> </li> <li> <a href="beneficiaries_pending_for_approval.html" class="active fw-bold"> <span>Edit Beneficiary</span> </a> </li> <li> <a href="#"> <span>Import Beneficiary Data</span> </a> </li> <li> <a href="manage_beneficiary.html"> <span>Manage Beneficiaries</span> </a> </li> <li> <a href="#"> <span>Manage Payment Status Due Flag</span> </a> </li> <li> <a href="#"> <span>Crowd Seeding of Aadhaar</span> </a> </li> <li> <a href="#"> <span>Agency Beneficiary Mapping</span> </a> </li> <li> <a href="#"> <span>Map/Unmap BeneficiaryType </span> </a> </li> </ul> </li> <li> <a href="#DSCManagement" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>DSC Management</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="DSCManagement" class="iq-submenu collapse" data-parent="#Masters"> <li> <a href="#"> <span>Enroll DSC</span> </a> </li> <li> <a href="#"> <span>Sanction EnrollDigitalSignature</span> </a> </li> <li> <a href="#"> <span>Enroll DSC Win App</span> </a> </li> </ul> </li> <li> <a href="#Vendors" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Vendors</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="Vendors" class="iq-submenu collapse" data-parent="#Masters"> <li> <a href="#"> <span>Manage</span> </a> </li> <li> <a href="#"> <span>Add New</span> </a> </li> <li> <a href="#"> <span>Account Revalidation</span> </a> </li> <li> <a href="#"> <span>Upload Vendors Data</span> </a> </li> <li> <a href="#"> <span>Bulk Mapping of Vendors</span> </a> </li> </ul> </li> <li> <a href="#Locations" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Locations</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="Locations" class="iq-submenu collapse" data-parent="#Masters"> <li> <a href="#"> <span>Manage</span> </a> </li> <li> <a href="#"> <span>Add New </span> </a> </li> </ul> </li> </ul> </li> <li> <a href="#MySchemes" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="las la-layer-group font-size-22"></i> <span class="ml-3">My Schemes</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="MySchemes" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li> <a href="#AnnualActioPlan" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Annual Action Plan</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="AnnualActioPlan" class="iq-submenu collapse" data-parent="#MySchemes"> <li> <a href="#"> <span>AAP Creation</span> </a> </li> <li> <a href="#"> <span>Manage AAP</span> </a> </li> </ul> </li> <li> <a href="#" aria-expanded="false"> <span>View Scheme Component</span> </a> </li> <li> <a href="#SchemeHierarchy" class="collapsed thirdmenu" data-toggle="collapse" aria-expanded="false"> <span>Scheme Hierarchy </span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="SchemeHierarchy" class="iq-submenu collapse" data-parent="#MySchemes"> <li> <a href="#"> <span>Manage Scheme Hierarchy</span> </a> </li> </ul> </li> </ul> </li> <li> <a href="#EATMISProcess" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-pie-chart-2-fill"></i> <span class="ml-3">EAT MIS Process</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="EATMISProcess" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li> <a href="#" aria-expanded="false"> <span>Manage Exp/Adv MIS Data</span> </a> </li> </ul> </li> <li> <a href="#MyFunds" class="collapsed" data-toggle="collapse" aria-expanded="false"> <i class="ri-bank-card-fill"></i> <span class="ml-3">My Funds</span> <i class="las la-angle-right iq-arrow-right arrow-active"></i> <i class="las la-angle-down iq-arrow-right arrow-hover"></i> </a> <ul id="MyFunds" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle"> <li> <a href="#" aria-expanded="false"> <span>Opening Balance</span> </a> </li> <li> <a href="#" aria-expanded="false"> <span>Received from Central Govt</span> </a> </li> <li> <a href="#" aria-expanded="false"> <span>Received from Other Agency</span> </a> </li> <li> <a href="#" aria-expanded="false"> <span>Returned by Other Agency</span> </a> </li> <li> <a href="#" aria-expanded="false"> <span>Received from State Govt</span> </a> </li> </ul> </li> </ul> </nav> <div id="sidebar-bottom" class="position-relative sidebar-bottom"> <div class="card border-none shadow-none"> <div class="card-body rounded-pill bg-secondary"> <div class="sidebarbottom-content"> <div class="image"><img src="assets/images/sidebar.png" class="img-fluid" alt="sidebar"> </div> <!-- <p class="mb-0 mt-3 text-capitalize">Check out more feature<br> by getting upgrade</p> <!-- <button type="button" class="btn sidebar-bottom-btn mt-3">Go Premium</button>--> </div> </div> </div> </div> <div class="pt-5 pb-2"></div> </div> </div>'

    $('.sidebarshow').append(navbar_code_str);
}


$(document).ready(function () {
    // alert('sidebar');
    loadNavDiv();
}); 