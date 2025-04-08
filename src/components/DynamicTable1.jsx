import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DynamicTable1 = ({ onSuccess }) => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [remark, setRemark] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [actionType, setActionType] = useState("");

    useEffect(() => {
        // Simulating fetching data from a JSON file or API
        fetch("/dynamicTable.json") // Load JSON file (ensure it's available in public folder)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error("Error loading JSON data:", error));
    }, []);

    const handleOpenModal = (row) => {
        setSelectedRow(row);
        setRemark("");
        setError("");
        setShowModal(true);
    };

    const validateAndProceed = (action) => {
        if (!remark.trim()) {
            setError("Remark is required!");
            return; // Stop execution if remark is empty
        }
        setError("");
        setActionType(action);
        setShowModal(false); // Move this line inside the validation
        setShowConfirmModal(true);
    };

    const handleConfirmAction = () => {
        const status = actionType === "approve" ? "Approved" : "Rejected";
        const color = actionType === "approve" ? "green" : "red";
        
        setData(data.map(row => 
            row.id === selectedRow.id 
                ? { ...row, Status: status, remark, statusColor: color, remit: actionType === "approve" ? "Remit Interest" : "", hyperlinkDisabled: true } 
                : row
        ));
        
        setShowConfirmModal(false);
        setMessage("Record saved successfully!");
        
        // Send message to App.jsx
    if (onSuccess) {
        const statusMessage = `Scheme "${selectedRow.scheme}" was ${status.toLowerCase()} successfully.`;
        const alertType = actionType === "approve" ? "info" : "danger";
        onSuccess(statusMessage, alertType);
      }
      setTimeout(() => setMessage(""), 3000);
    };

    return (
        <div>
            {message && <div className="alert alert-success">{message}</div>}
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
          <th>Status</th>
          <th>Pay through NTRP</th>
          </tr>
        </thead>  
                <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="text-center" style={{ cursor: "pointer" }}>
                {!row.hyperlinkDisabled ? (
                  <a className="font-12 link-enebled" href="#" onClick={() => handleOpenModal(row)}>{row.scheme}</a>
                ) : (
                  row.scheme
                )}
              </td>
              <td className="text-center">{row.remitCenterAmount}</td>
              <td className="text-center">{row.controller}</td>
              <td className="text-center">{row.pao}</td>
              <td className="text-center">{row.ddo}</td>
              <td className="text-center">{row.remark}</td>
              <td className="text-center">{row.createdBy}</td>
              <td className="text-center">{row.createdDate}</td>
              <td className="text-center">{row.paymentMode}</td>
              <td className="text-center" style={{ color: row.statusColor }}>{row.Status}</td>
              <td className="text-center">{row.remit ? <a href="#">{row.remit}</a> : ""}</td>
            </tr>
          ))}
        </tbody>
            </table>

            {/* Update Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}> 
                <Modal.Header closeButton>
                    <Modal.Title>Update Status for Approve and Reject</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Approver Remark</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={remark} 
                            onChange={(e) => setRemark(e.target.value)}
                            isInvalid={!!error}
                            placeholder="Please enter Remark"
                        />
                        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => validateAndProceed("approve")}>Approve</Button>
                    <Button variant="danger" onClick={() => validateAndProceed("reject")}>Reject</Button>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>

            {/* Confirmation Modal */}
            <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Action Massage</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to {actionType} this record?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleConfirmAction}>OK</Button>
                    <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DynamicTable1;
