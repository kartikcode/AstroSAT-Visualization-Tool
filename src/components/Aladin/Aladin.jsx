import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Aladin = (props) => {

  // function for connecting the API endpoints
  const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { "Content-Type": "application/x-www-form-urlencoded" } : {},
    }).then((response) => {
      if (response.status >= 400) {
        // !response.ok
        return response.json().then((errResData) => {
          const error = new Error("Something went wrong!");
          error.data = errResData;
          throw error;
        });
      }
      return response.json();
    });
  };

  const [cardData,setCardData] = useState([]);

  function handlePopout(ra, dec, name, astrosat) {
    var object_title = name;
    var genericDesc = `<b>AstroSat Observation:</b> ${astrosat}<br>`;
    var modal_description;

    if (astrosat) {
      var ra_data = { "ra": ra, "dec": dec };
      var cards= null;
      var publicationList;
      var object_description
      sendHttpRequest("POST", "http://127.0.0.1:8000/isro/card/",ra_data).then(
      (responseData) => { 
        
        //console.log(responseData);
        cards = responseData.pubs;
        console.log(cards);
      }
      );
      
      if(cards==null){
        publicationList = "No publications available for the source.";
      }
      else{
        var pubListHtml = cards.map((publication)=>`<li><a href="${publication.link}">${publication.title}</a><li>`);
        publicationList = pubListHtml.join('');
      }

      modal_description = `<script>var modal=document.getElementById("myModal");var btn=document.getElementById("myBtn");var span=document.getElementsByClassName("close")[0];function handleClick(){modal.style.display="block";} function handleClose(){modal.style.display="none";} window.onclick=function(event){if(event.target==modal){modal.style.display="none";}}</script><button id="myBtn" onclick="handleClick()">More Info</button><div id="myModal" class="modal" style="display: none; position: fixed; z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"><div class="modal-content" style="position: relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"><div class="modal-header" style="padding: 2px 16px;background-color:#91a3b0;color:white;"> <span class="close" style="color: white;float:right;font-size:28px;font-weight:bold;" onclick="handleClose()">&times;</span><h2>${name}</h2></div><div class="modal-body" style="padding: 2px 16px;"><p><b>Ra:</b>${ra}<br><b>Dec:</b>${dec}<br></p><p><b>Publications Available:</b><br><ol> ${publicationList}</ol></p></div></div></div>`;
    
    }

    object_description = (astrosat) ? genericDesc.concat(modal_description) : genericDesc;
    
    return window.A.marker(ra, dec, {
      popupTitle: object_title,
      popupDesc: object_description,
    });
  }

  useEffect(() => {
    let aladin = window.A.aladin("#aladin-lite-div", {
      survey: "P/DSS2/color",
      fov: 60,
    });
    let markerLayer = window.A.catalog();
    aladin.addCatalog(markerLayer);
    var sources = props.data.map((dataset) =>
      handlePopout(dataset.ra, dataset.dec, dataset.name, dataset.astrosat) 
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

/**
 import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import Hello from "./Hello";
import jsPDF from "jspdf";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const colstyle = {
  width: "30%"
};
const tableStyle = {
  width: "100%"
};
const Prints = () => (
  <div>
    <h3>
      <center> AstroSAT Visualizer Report</center>
    </h3>
    <span style={{ textDecoration: "underline" }}>
      <strong>General Information</strong>
    </span>
    <br />
    Object Name: <br />
    ra: <br />
    dec: <br />
    Proposal ID: <br />
    Target ID: <br />
    Date Observed: <br />
    Time Observed: <br />
    Observation ID: <br />
    Instrument: <br /> 
    <span style={{ textDecoration: "underline", margin: "20%" }}>
      <strong>Publication Details</strong>
    </span>
    <br />
    <div>&nbsp;</div>
    <ul>
      <li>pub1</li>
      <li>pub2</li>
    </ul>
  </div>
);

const print = () => {
  const string = renderToString(<Prints />);
  const pdf = new jsPDF("p", "mm", "a4");
  const columns = [
    "SOW Creation Date",
    "SOW Start Date",
    "Project",
    "Last Updated",
    "SOW End Date"
  ];
  var rows = [
    [
      "Dec 13, 2017",
      "Jan 1, 2018",
      "ABC Connect - ABCXYZ",
      "Dec 13, 2017",
      "Dec 31, 2018"
    ]
  ];
  pdf.fromHTML(string);
  pdf.save("pdf");
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <button onClick={print}>print</button>
  </div>
);

render(<App />, document.getElementById("root"));


 */
