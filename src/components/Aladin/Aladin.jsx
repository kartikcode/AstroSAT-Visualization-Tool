import { CallToActionRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const Aladin = (props) => {
  useEffect(() => {
    let aladin = window.A.aladin("#aladin-lite-div", {
      survey: "P/DSS2/color",
      fov: 60,
    });
    let markerLayer = window.A.catalog();
    aladin.addCatalog(markerLayer);
    var sources = props.data.map((dataset) =>
      window.A.marker(dataset.ra, dataset.dec, {
        popupTitle: dataset.name,
        popupDesc: "THis is so ${dataset.name} easy",
      })
    );
    markerLayer.addSources(sources);
  }, []);

  return (
    <div
      id="aladin-lite-div"
      style={{
        width: "74vw",
        height: "80vh",
      }}
    />
  );
};

export default Aladin;
