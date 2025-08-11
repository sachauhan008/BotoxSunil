import React from "react";

const Spinner = () => {
  return (
    <div className="w-100 mb-3 d-flex justify-content-center align-items-center">
      <div
        className="spinner-border"
        style={{ width: "1.5rem", height: "1.5rem", color: "#072bf2" }}
        role="status"
        aria-label="Loading..."
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
