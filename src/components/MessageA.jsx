// MessageA.jsx
import React from 'react';

const MessageA = ({ message, type }) => {
  return (
    <>
      {message && <div
  className={`alert alert-${type} d-flex align-items-center justify-content-center text-center mx-auto`}
  style={{ width: "fit-content" }}
>{message}</div>}
    </>
  );
};

export default MessageA;
