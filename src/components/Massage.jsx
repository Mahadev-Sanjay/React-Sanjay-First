import { useState } from "react";
import ChildComponent from "./ChildComponent"; // Import your child component

const ParentComponent = () => {
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // "success" or "danger"

    // Function to update message
    const showMessage = (type) => {
        if (type === "success") {
            setMessage("Request has been approved successfully");
            setMessageType("success");
        } else if (type === "danger") {
            setMessage("Request has been rejected successfully");
            setMessageType("danger");
        }
    };

    return (
        <div>
            {/* Message Display (Only visible when message is set) */}
            {message && (
                <div className={`text-${messageType} text-center mb-2`} style={{ fontSize: "12px" }}>
                    {message}
                </div>
            )}

            {/* Child Component (Passing showMessage function as prop) */}
            <ChildComponent onOkClick={showMessage} />
        </div>
    );
};

export default ParentComponent;
