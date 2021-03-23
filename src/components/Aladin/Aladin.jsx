import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const Aladin = (props) => {

  function handlePopout(ra, dec, name, astrosat) {
    var object_title = name;
    var genericDesc = `<b>AstroSat Observation:</b> ${astrosat}<br>`;
    var modal_description;


    if (astrosat) {
      modal_description = `<script>var script = document.createElement("script"); script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"; document.head.appendChild(script);var modal=document.getElementById("myModal");var btn=document.getElementById("myBtn");var span=document.getElementsByClassName("close")[0];function handleClick(){modal.style.display="block";} function handleClose(){modal.style.display="none";} function demoFromHTML(){console.log("function called");var pdf=new jsPDF('p','pt','letter');console.log(pdf);source=document.getElementsByClassName("modal-body")[0];console.log(source);specialElementHandlers={'#bypassme':function(element,renderer){return true}};margins={top:80,bottom:60,left:40,width:522};pdf.fromHTML(source,margins.left,margins.top,{'width':margins.width,'elementHandlers':specialElementHandlers},function(dispose){pdf.save('Test.pdf');},margins);} window.onclick=function(event){if(event.target==modal){modal.style.display="none";}}</script> <button id="myBtn" onclick="handleClick()">More Info</button><div id="myModal" class="modal" style="display: none; position: fixed; z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"><div class="modal-content" style="position: relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"><div class="modal-header" style="padding: 2px 16px;background-color:#91a3b0;color:white;"> <span class="close" style="color: white;float:right;font-size:28px;font-weight:bold;" onclick="handleClose()">&times;</span><h2>${name}</h2></div><div class="modal-body" style="padding: 2px 16px;"><h2><strong>AstroSAT Visualizer Object Report</strong></h2><p style="text-align: left;"><strong>General Information</strong></p><ul><li style="text-align: left;">Source Name:</li><li style="text-align: left;">ra:</li><li style="text-align: left;">dec:&nbsp;</li><li style="text-align: left;">Date Observed:&nbsp;</li><li style="text-align: left;">Time Observed:&nbsp;</li><li style="text-align: left;">Proposal ID:</li><li style="text-align: left;">Target ID:</li><li style="text-align: left;">Observation ID:</li><li style="text-align: left;">Instrument:</li></ul><p style="text-align: left;"><strong>Publications List</strong></p><ol><li style="text-align: left;">lol</li><li style="text-align: left;">lol2</li></ol></div><div><button style="margin:20px;" onclick="demoFromHTML()">print</button></div></div></div>`;
    
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

/* 
<script>
	var modal=document.getElementById("myModal");var btn=document.getElementById("myBtn");var span=document.getElementsByClassName("close")[0];function handleClick(){modal.style.display="block";} function handleClose(){modal.style.display="none";} window.onclick=function(event){if(event.target==modal){modal.style.display="none";}}
  </script>
  <script>
function demoFromHTML() {
        var pdf = new jsPDF('p', 'pt', 'letter');
        source = $('#modal-body')[0];

        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector
            '#bypassme': function (element, renderer) {
                return true
            }
        };
        margins = {
            top: 80, 
            bottom: 60,
            left: 40, 
            width: 522
        };
        pdf.fromHTML(
            source,
            margins.left,  
            margins.top, {
                'width': margins.width, 
                'elementHandlers': specialElementHandlers
            },

            function (dispose) {
                pdf.save('Test.pdf');
            }, margins
        );
    }
  </script>
  <script>
  function demoFromHTML() {
        var pdf = new jsPDF('p', 'pt', 'letter'); 
        source = document.getElementsByClassName("modal-body")[0];

        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector
            '#bypassme': function (element, renderer) {
                return true
            }
        }; 
        margins = {
            top: 80,
            bottom: 60,
            left: 40,  
            width: 522
        };
        pdf.fromHTML(
            source,
            margins.left, 
            margins.top, {
                'width': margins.width, 
                'elementHandlers': specialElementHandlers
            }, 

            function (dispose) {  
                pdf.save('Test.pdf');
            }, margins  
        ); 
    }
  </script>
<button id="myBtn" onclick="handleClick()">More Info</button> 
<div id="myModal" class="modal" style="display: none; position: fixed; z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"> 
	<div class="modal-content" style="position: relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);">  
		<div class="modal-header" style="padding: 2px 16px;background-color:#91a3b0;color:white;"> <span class="close" style="color: white;float:right;font-size:28px;font-weight:bold;" onclick="handleClose()">&times;</span>
			<h2>${name}</h2> 
		</div>
		<div class="modal-body" style="padding: 2px 16px;">
			<h2><strong>AstroSAT Visualizer Object Report</strong></h2>
<p style="text-align: left;"><strong>General Information</strong></p>
<ul> 
<li style="text-align: left;">Source Name:</li>
<li style="text-align: left;">ra:</li>
<li style="text-align: left;">dec:&nbsp;</li> 
<li style="text-align: left;">Date Observed:&nbsp;</li>
<li style="text-align: left;">Time Observed:&nbsp;</li>
<li style="text-align: left;">Proposal ID:</li>
<li style="text-align: left;">Target ID:</li>
<li style="text-align: left;">Observation ID:</li>
<li style="text-align: left;">Instrument:</li>
</ul>
<p style="text-align: left;"><strong>Publications List</strong></p>
<ol>
<li style="text-align: left;">lol</li>
<li style="text-align: left;">lol2</li>
</ol>
		</div>
		<div>
			<button ="javascript:demoFromHTML();">print</button>
		</div>
	</div>
</div>
*/