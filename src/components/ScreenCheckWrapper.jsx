import React, { useEffect, useState } from "react";

const ScreenCheckWrapper = ({ children }) => {
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isTabletOrLarger) {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center text-center">
        <div className="alert alert-warning rounded-4 p-4">
          <h5>⚠️ Your screen is not supported.</h5>
          <p>This application works only on tablets and larger devices (≥768px).</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ScreenCheckWrapper;
