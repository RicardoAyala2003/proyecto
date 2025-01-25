// components/Spinner/Spinner.jsx
import React from "react";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #ccc",
          borderTop: "5px solid #000",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
