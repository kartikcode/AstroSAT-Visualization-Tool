import React, { useEffect, useState } from "react";

const Aladin = () => {
  // function for connecting the API endpoints
  const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
      if (response.status >= 400) {
        // !response.ok
        return response.json().then(errResData => {
          const error = new Error('Something went wrong!');
          error.data = errResData;
          throw error;
        });
      }
      return response.json();
    });
  };
  
  // function for fetching the cpmplaint database
  const [data, setData] = useState([])
  useEffect(() => {
    sendHttpRequest('GET', 'http://localhost:8000/isro/getdata/').then(responseData => {
      console.log(responseData.data);
      setData(responseData.data);
    });
  },[])


  useEffect(() => {
    let aladin = window.A.aladin("#aladin-lite-div", {
      survey: "P/DSS2/color",
      fov: 60,
    });
    let markerLayer = window.A.catalog();
    aladin.addCatalog(markerLayer);
    var sources = data.map(dataset => window.A.marker(dataset.ra,dataset.dec, {popupTitle: dataset.name, popupDesc: "Available through AstroSAT:".concat((dataset.astrosat).toString())}));
    markerLayer.addSources(sources);
    aladin.setFov(1);
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
