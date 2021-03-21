import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const Aladin = (props) => {

  // function for connecting the API endpoints
  const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { "Content-Type": "application/json" } : {},
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

  const [cardData, setCardData] = useState([]);

  function handlePopout(ra, dec, name, astrosat) {
    var object_title = name;
    var genericDesc = `<b>AstroSat Observation:</b> ${astrosat}<br>`;
    var modal_description;

    if (astrosat) {
      var ra_data = { "ra": ra, "dec": dec };
      sendHttpRequest("POST", "http://127.0.0.1:8000/isro/card/",ra_data).then(
      (responseData) => {
        console.log(responseData);
        setCardData(responseData); 
      }
      );
      modal_description = `<script>var modal=document.getElementById("myModal");var btn=document.getElementById("myBtn");var span=document.getElementsByClassName("close")[0];function handleClick(){modal.style.display="block";} function handleClose(){modal.style.display="none";} window.onclick=function(event){if(event.target==modal){modal.style.display="none";}}</script><button id="myBtn" onclick="handleClick()">Open Modal</button><div id="myModal" class="modal" style="display: none; position: fixed; z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"><div class="modal-content" style="position: relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"><div class="modal-header" style="padding: 2px 16px;background-color:#5cb85c;color:white;"> <span class="close" style="color: white;float:right;font-size:28px;font-weight:bold;" onclick="handleClose()">&times;</span><h2>${name}</h2></div><div class="modal-body" style="padding: 2px 16px;"><p><b>Ra:</b>${ra}<br><b>Dec:</b>${dec}<br></p><p><table><tr><th>Publication ID</th><th>Title</th></tr> ${cardData.map((publication)=><tr><td>{publication.id}</td><td><a href={publication.link}>{publication.title}</a></td></tr>)}</table></p></div><div class="modal-footer" style="padding: 2px 16px;background-color:#5cb85c;color:white;"><h3>Modal Footer</h3></div></div></div>`;
    
    }

    var object_description = (astrosat) ? genericDesc.concat(modal_description) : genericDesc;
    
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
 < script >
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
function handleClick () {  
	modal.style.display = "block"; 
}    
function handleClose() {     
	modal.style.display = "none"; 
} 
<table>  
  <tr> 
    <th>Publication ID</th>
    <th>Title</th>  
  </tr>
  {cardData.map((publication)=><tr><td>publication.id</td><td><a href=publication.title>publication.title</a></td></tr>)}
  </table>  
< /script>
 */
