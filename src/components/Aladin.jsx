import React, { useEffect } from "react";

const Aladin = () => {
  useEffect(() => {
    let aladin = window.A.aladin("#aladin-lite-div", {
      survey: "P/DSS2/color",
      fov: 60,
    });
    aladin.setFov(1);
  }, []);

  return (
    <div
      id="aladin-lite-div"
      style={{
        width: "80vw",
        height: "80vh",
        marginTop: "10vh",
        marginBottom: "10vh",
      }}
    />
  );
};

export default Aladin;
