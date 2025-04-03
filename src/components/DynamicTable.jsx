import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";

const DynamicTable = () => {
  const [tableData, setTableData] = useState([]); // Store JSON data
  const [selectedRow, setSelectedRow] = useState(null);

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/dynamicTable.json") // Adjust the path if needed
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // Handle row click
  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  // Handle Approve
  const handleApprove = (id) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, Statue: "Approved", approverRemarks: "Approved", } : row
      )
    );
    setSelectedRow(null);
  };

  // Handle Reject
  const handleReject = (id) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, Statue: "Rejected", approverRemarks: "Rejected" } : row
      )
    );
    setSelectedRow(null);
  };
 
            
 
  return (
    <div>
      <h3>Dynamic Table with JSON Data</h3>
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
          {tableData.map((row) => (
            <tr key={row.id} onClick={() => handleRowClick(row.id)} style={{ cursor: "pointer" }}>
              <td className="text-center select-row"><a id="addButton-1" className="font-12 link-enebled" data-bs-toggle="modal" href="#detailsaved">{row.scheme}</a></td>
              <td className="text-center">{row.remitCenterAmount}</td>
              <td className="text-center">{row.controller}</td>
              <td className="text-center">{row.pao}</td>
              <td className="text-center">{row.ddo}</td>
              <td className="text-center remarks">{row.approverRemarks}</td>
              <td className="text-center">{row.createdBy}</td>
              <td className="text-center">{row.createdDate}</td>
              <td className="text-center">{row.paymentMode}</td>
              <td className="text-center status">{row.Statue}</td>
              <td className="text-center remit" id="remit-1"><a className="remitLink" style={{ display:"none" }} href="#sanjay">Remit Interest</a></td>
            </tr>
          ))}
        </tbody>
      </table>
{/*}
      {selectedRow && (
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={() => handleApprove(selectedRow)}
            style={{ marginRight: "10px", background: "green", color: "white" }}
          >
            Approve
          </button>
          <button onClick={() => handleReject(selectedRow)} style={{ background: "red", color: "white" }}>
            Reject
          </button>
        </div>
      )}
        */}


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

    </div>
  );
};

export default DynamicTable;
