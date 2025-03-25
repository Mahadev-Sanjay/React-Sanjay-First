
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "jquery-ui-dist/jquery-ui";
import React, {useState} from "react";



const DynamicDropdownA = () => {
    // Sample dynamic options
    const options = ["State Govt. Scheme", "BState Govt. Scheme-1", "State Govt. Scheme-2", "State Govt. Scheme-3", "State Govt. Scheme-4", "State Govt. Scheme-5", "State Govt. Scheme-6", "State Govt. Scheme-7"];
    const options1 = ["BFST Test Scheme [BR180]", "BFST Test Scheme [BR180]-1", "BFST Test Scheme [BR180]-2", "BFST Test Scheme [BR180]-3", "BFST Test Scheme [BR180]-4", "BFST Test Scheme [BR180]-5", "BFST Test Scheme [BR180]-6", "BFST Test Scheme [BR180]-7"];
  
    // State to store selected value
    const [selectedValue1, setSelectedValue1] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
  
    // Handle change event
    const handleChange1 = (event) => {
      setSelectedValue1(event.target.value);
    };
    const handleChange2 = (event) => {
      setSelectedValue2(event.target.value);
    };

    return (
        <div>
          <form id="myForm1">
	    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                
		  <div className="row col-sm-12 col-md-12 col-lg-6 flex-nowrap mb-3" id="myForm">
		     
                                <div className="row mb-3">
                                    <label className="control-label text-right col-md-5 col-lg-4" for="scheme-type">Scheme Type: <span style={{color:"red"}}>*</span></label>
                                    <div className="col-md-5 col-lg-8">
                                        <select className="form-control form-control-sm" id="scheme-type" value={selectedValue1} onChange={handleChange1}>
                                <option value="">--Select--</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}

                            </select>
			    <div id="error-message"  className="text-danger error" style={{fontSize:"12px"}}>Please select a valid option.</div>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="control-label text-right col-md-5 col-lg-4" for="scheme">Scheme: <span style={{color:"red"}}>*</span></label>
                                    <div className="col-md-5 col-lg-8">
                                        <select className="form-control form-control-sm" id="scheme" value={selectedValue2} onChange={handleChange2}>
                                <option value="">--Select--</option>
            {options1.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}

                            </select>
			  <div id="error-message1" className="text-danger error" style={{fontSize:"12px"}}>Please select a valid option.</div>
                                    </div>
                                </div>
		     

				
                            
		   </div>
		   {/*<div className="mb-3 d-flex flex-nowrap">
                                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                    
                                        <button id="buttonSearch-1" type="button" className="btn py-1 btn-sm btn-primary btn-rounded font-12">Search</button>
				    </div>
                                </div>*/}

	       </div>
</form>
        </div>
      );

}
export default DynamicDropdownA;