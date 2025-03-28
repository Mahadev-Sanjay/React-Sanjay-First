import React, { useState, useEffect } from "react";

const MultiDropdown = () => {
  const [data, setData] = useState({ categories: [], subcategories: {} });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subOptions, setSubOptions] = useState([]);

  // Fetch JSON data
  useEffect(() => {
    fetch("/drop1.json") // Adjust the path if necessary
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Handle Category Change
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSubOptions(data.subcategories[category] || []);
  };

  return (
    <div>
      <form id="myForm1">
	    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                
		  <div className="row col-sm-12 col-md-12 col-lg-6 flex-nowrap mb-3" id="myForm">
		     
                                <div className="row mb-3">
                                    <label className="control-label text-right col-md-5 col-lg-4" for="scheme-type">Scheme Type: <span style={{color:"red"}}>*</span></label>
                                    <div className="col-md-5 col-lg-8">
                                        <select className="form-control form-control-sm" id="scheme-type" onChange={handleCategoryChange}>
                                <option value="">--Select--</option>
            {data.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}

                            </select>
			     
			    <div id="error-message"  className="text-danger error" style={{fontSize:"12px"}}>Please select a valid option.</div>
                                    </div>
                                </div>
                               {/* Subcategory Dropdown */}
                                <div className="row mb-3">
                                    <label className="control-label text-right col-md-5 col-lg-4" for="scheme">Scheme: <span style={{color:"red"}}>*</span></label>
                                    <div className="col-md-5 col-lg-8">
                                        <select className="form-control form-control-sm" id="scheme" disabled={!selectedCategory}>
                                <option value="">--Select--</option>
            {subOptions.map((sub) => (
          <option key={sub.id} value={sub.id}>
            {sub.name}
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
};

export default MultiDropdown;
