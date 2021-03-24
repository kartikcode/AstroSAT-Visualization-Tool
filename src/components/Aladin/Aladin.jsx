import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const Aladin = (props) => {

  function handlePopout(data) {
    var object_title = data.name;
    var genericDesc = `<b>AstroSAT Status:</b> ${data.astrosat}<br>`;
    var modal_description;

    var publicationList;
    var publicationListHtml;
    if(data.pubs.length==0){
      publicationListHtml="No publications are available for the source."
    }
    else{
      publicationList = data.pubs.map((publication)=>`<li style="text-align: left;"><a href="${publication.link}">${publication.title}</a></li>`)
      publicationListHtml = publicationList.join('');
    }

    if (data.astrosat) {
      //console.log(data.pubs);
      modal_description = `<script>var script=document.createElement("script");script.src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js";document.head.appendChild(script);var modal=document.getElementById("myModal");var btn=document.getElementById("myBtn");var span=document.getElementsByClassName("close")[0];function handleClick(){modal.style.display="block";}function handleClose(){modal.style.display="none";}function demoFromHTML(){var element=document.getElementsByClassName("modal-body")[0];var opt={margin:1,filename:'report.pdf',image:{type:'jpeg',quality:0.98},html2canvas:{scale:2},jsPDF:{unit:'in',format:'letter',orientation:'portrait'}};html2pdf().set(opt).from(element).save();}window.onclick=function(event){if(event.target==modal){modal.style.display="none";}}</script> <button id="myBtn" style="background-color: #555;border:none;color:white;text-align:center;text-decoration:none;display:inline-block;font-size:12px;margin:4px 2px;cursor:pointer;" onclick="handleClick()">More Info</button><div id="myModal" class="modal" style="display: none; position: fixed; z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"><div class="modal-content" style="position: relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"><div class="modal-header" style="padding: 2px 16px;background-color:#008CBA;color:white;"> <span class="close" style="color: white;float:right;font-size:28px;font-weight:bold;cursor:pointer;" onclick="handleClose()">&times;</span><h2>${data.name}</h2></div><div class="modal-body" style="padding: 2px 16px;"><h2><strong>AstroSAT Visualizer Object Report</strong></h2><p style="text-align: left;"><strong>General Information</strong></p><ul><li style="text-align: left;">Source Name:&nbsp;${data.name}</li><li style="text-align: left;">Source Type:&nbsp;${data.srctype}</li><li style="text-align: left;">RA:&nbsp;${data.ra}</li><li style="text-align: left;">DEC:&nbsp;${data.dec}</li><li style="text-align: left;">Date Observed:&nbsp;${data.dateobs}</li><li style="text-align: left;">Time Observed:&nbsp;${data.timeobs}</li><li style="text-align: left;">Proposal ID:&nbsp;${data.prop_id}</li><li style="text-align: left;">Target ID:&nbsp;${data.tgt_id}</li><li style="text-align: left;">Observation ID:&nbsp;${data.obs_id}</li><li style="text-align: left;">Instrument:&nbsp;${data.instrument}</li><li style="text-align: left;">Avg X-ray flux :&nbsp;${data.flux}&nbsp;uJy</li><li style="text-align: left;">Orbital Period:&nbsp;${data.porb}&nbsp;days</li></ul><p style="text-align: left;"><strong>Publications List</strong></p><ol>${publicationListHtml}</ol></div><div> <button style="background-color: #008CBA;border:none;color:white;padding:20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;" onclick="demoFromHTML()">Download Report</button></div></div></div>`;
    }
    else{
      modal_description = `<script>var script=document.createElement("script");script.src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js";document.head.appendChild(script);var modal=document.getElementById("myModal");var btn=document.getElementById("myBtn");var span=document.getElementsByClassName("close")[0];function handleClick(){modal.style.display="block";}function handleClose(){modal.style.display="none";}function demoFromHTML(){var element=document.getElementsByClassName("modal-body")[0];var opt={margin:1,filename:'report.pdf',image:{type:'jpeg',quality:0.98},html2canvas:{scale:2},jsPDF:{unit:'in',format:'letter',orientation:'portrait'}};html2pdf().set(opt).from(element).save();}window.onclick=function(event){if(event.target==modal){modal.style.display="none";}}</script> <button id="myBtn" style="background-color: #555;border:none;color:white;text-align:center;text-decoration:none;display:inline-block;font-size:12px;margin:4px 2px;cursor:pointer;" onclick="handleClick()">More Info</button><div id="myModal" class="modal" style="display: none; position: fixed; z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"><div class="modal-content" style="position: relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"><div class="modal-header" style="padding: 2px 16px;background-color:#008CBA;color:white;"> <span class="close" style="color: white;float:right;font-size:28px;font-weight:bold;cursor:pointer;" onclick="handleClose()">&times;</span><h2>${data.name}</h2></div><div class="modal-body" style="padding: 2px 16px;"><h2><strong>AstroSAT Visualizer Object Report</strong></h2><p style="text-align: left;"><strong>General Information</strong></p><ul><li style="text-align: left;">Source Name:&nbsp;${data.name}</li><li style="text-align: left;">Source Type:&nbsp;${data.srctype}</li><li style="text-align: left;">RA:&nbsp;${data.ra}</li><li style="text-align: left;">DEC:&nbsp;${data.dec}</li></ul><p style="text-align: left;"><strong>Publications List</strong></p><ol>${publicationListHtml}</ol></div><div><strong>NOTE:</strong> This source has not been observed by AstroSAT.</div><div> <button style="background-color: #008CBA;border:none;color:white;padding:20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;" onclick="demoFromHTML()">Download Report</button></div></div></div>`;
    }

    var object_description = genericDesc.concat(modal_description);
    
    return window.A.marker(data.ra, data.dec, {
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
      handlePopout(dataset) 
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