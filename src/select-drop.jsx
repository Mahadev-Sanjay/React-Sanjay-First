import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "jquery-ui-dist/jquery-ui";
import React, { useState, useEffect,} from "react";

const DropdownFromAPI = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Extracting user names for dropdown
        const dropdownOptions = data.map((user) => ({
          id: user.id,
          name: user.name,
        }));
        setOptions(dropdownOptions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
<>
<form id="myForm1">
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            
      <div className="row col-sm-12 col-md-12 col-lg-6 flex-nowrap mb-3" id="myForm">
         
                            <div className="row mb-3">
                                <label className="control-label text-right col-md-5 col-lg-4" for="scheme-type">Scheme Type: <span style={{color:"red"}}>*</span></label>
                                <div className="col-md-5 col-lg-8">
                                    <select value={selectedOption} className="form-control form-control-sm" id="scheme-type" onChange={(e) => setSelectedOption(e.target.value)}>
                            <option className="text-center" value=""> -- Select -- </option>
                            {options.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
                           
                        </select>
                        {selectedOption && <p>You selected: {selectedOption}</p>}
            <div id="error-message"  className="text-danger error" style={{fontSize:"12px"}}>Please select a valid option.</div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="control-label text-right col-md-5 col-lg-4" for="scheme">Scheme: <span style={{color:"red"}}>*</span></label>
                                <div className="col-md-5 col-lg-8">
                                    <select className="form-control form-control-sm" id="scheme" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}> 
                            <option className="text-center" value=""> -- Select -- </option>
                            {options.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
                        </select>
            <div id="error-message1" className="text-danger error" style={{fontSize:"12px"}}>Please select a valid option.</div>
                                </div>
                            </div>
         

            
                        
       </div>
       <div className="mb-3 d-flex flex-nowrap">
                                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                
                                    <button id="buttonSearch-1" type="button" className="btn py-1 btn-sm btn-primary btn-rounded font-12">Search</button>
                </div>
                            </div>

       </div>
</form>

</>
    
  );
};

export default DropdownFromAPI;
