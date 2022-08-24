import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

function App() {
  const [jobTitleArr, setJobTitleArr] = useState(["React.JS ", " Front-End ", " JavaScript ", " Full-stack "]);

  useEffect(() => {
    let link = window.location.href;
    console.log(link)
    if (/react-js/.test(link) === true) {
      console.log("the page is on react");
      setJobTitleArr("React.js")
    }
    else if (/frontend/.test(link) === true) {
      console.log("the page is on frontend");
      setJobTitleArr("Frontend")
    }
    else if (/javascript/.test(link) === true) {
      console.log("the page is on react");
      setJobTitleArr("JavaScript")
    }
    else if (/full-stack/.test(link) === true) {

      setJobTitleArr("MEAN/MERN Stack")
    }
  }, [])

  const downloadPDF = async () => {
    document.querySelector("button").style.display = "none";
    html2canvas(document.querySelector(".container")).then((canvas) => {
      var imgData = canvas.toDataURL("image/png", 1.0);
      var pageHeight = 980;
      var pageWidth = 900;
      var doc = new jsPDF('p', 'pt', 'letter');
      // doc.addImage(logo, "PNG",20,5 ,150, 40);
      doc.addImage(imgData, "PNG", 5, 5, 600, 770);
      doc.save("resume.pdf");
      document.querySelector("button").style.display = "block";
    })
    /*
     html2canvas(document.querySelector(".container")).then((canvas) => {
       //  console.log(document.querySelector("#resultsCapture"));
       //  console.log(canvas)
         //  document.body.appendChild(canvas)
         var imgData = canvas.toDataURL("image/png");
   
         var imgWidth = 300;
         // var imgWidth = 300;
         // var pageHeight = 290;
         var pageHeight = 859;
         var imgHeight = ((canvas.height * imgWidth) / canvas.width);
         var heightLeft = imgHeight;
         var doc = new jsPDF("p", "mm");
         var position = 5; // top padding to first page
        // doc.addImage(logo, "PNG", 5, 10, 50, 10);
         doc.addImage(imgData, "PNG", 5, position, 270, 280);
         heightLeft -= pageHeight;
   
         /*    while (heightLeft >= 0) {
               position += heightLeft - imgHeight+5; // top padding for other pages
               doc.addPage();
               doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
               heightLeft -= pageHeight;
             } 
             
             doc.save("resume.pdf");
             document.querySelector("button").style.display="block";
           });
    */
    // window.alert("Please wait while we generate your pdf")

    //  window.location.reload();

  };



  return (
    <div className="container">
      <button onClick={downloadPDF}>Download Resume</button>
      <div className="row">
        <div className="col sm-8 md-8 lg-8">
          <div className="row candidateName">NIKI KALWAR</div>
          <div className="row">Software Engineer</div>
          <hr></hr>
          <div className="row careerObjectives"><span>Career Objectives</span>
            <br></br>
            <div className="row">
              <div className="col">Seeking a challenging job role as {jobTitleArr}
                {" "}developer position where my education and work experience will have valuable
                application.</div>
            </div>
          </div>
          <hr></hr>
          <div className="row"><span style={{ fontWeight: 600 }}>Skills</span>
            <div className="row">
              <div className="row ">
                <span style={{ "margin-left": "20px" }}>
                  Programming: JavaScript,React.js, Angular, Node.js, TypeScript
                  <br></br>
                  Designing: HTML,CSS,Bootstrap
                  <br></br>
                  Methodology: Agile 
                  <br></br>Version Control: GIT
                
                  IDE: Microsoft Visual Studio
                  <br></br>
                  Tools: JIRA, Confluence, Jest, BitBucket
                  <br></br>
                  Testing: Selenium WebDriver
                </span>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">     <span style={{ fontWeight: 600 }}>PROFILE</span>
            <div className="row">
              <span style={{ "margin-left": "20px" }}>
                Confident, result oriented professional with
                4.2+ years of experience in React.js, Angular framework, Node.js and MySql
                development and defect management with
                Broadridge Financial Solutions Pvt Ltd. And Currently working for Brillio Technologies on MEAN Stack.

                Expertise in designing and improving the user experience, low latency throughout SDLC in
                agile. Excellent knowledge in Javascript, DOM
                manipulation, React.js, Angular, MySql, OOPS concepts with
                strong debugging skills. Good Understanding of SQL along with
                relational and non-relational
                databases,client-side scripting languages like php and node.js. Familiarity with development tools like npm,babel,visual studio code.
              </span></div>
          </div>
          <hr></hr>
          <div className="row" onClick={() => { console.log("clicked") }}> <span style={{ fontWeight: 600 }}>CONTACT</span>
            <div className="row details-row">
              <span style={{ "margin-left": "20px" }}>
                PHONE: +91-8431172298
                <br></br>
                EMAIL: niki.kalwar@outlook.com
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="row"> <span style={{ fontWeight: 600 }}>Personal Details</span>
            <div className="row details-row">
              <span style={{ "margin-left": "20px" }}>
                Gender: Male
                <br></br>
                Nationality: Nepali
                <br></br>
                Languages: English Hindi Nepali Bhojpuri
                <br />
              </span>
            </div>
          </div>
          <hr></hr>
         <div className='row misc-section'><span style={{ fontWeight: 600 }}>FreeLancing Career</span>
         <div className='row'><strong>Fiverr Jan 2021-Present (Part-time Contract)</strong><br></br>
         1. Project on openMaps API integration<br></br>
         2. Wrote complex Regular Expression to Sanitize Inputs and prevent HTML/JavaScript code Injection, Validate User Forms and User Inputs.<br></br>
         3. Debugging JavaScript Code and helping fix bugs for other Developers.<br></br>
         4. Worked on PHP project to Scrape Data Using DOM Traversal and DOM Manipulation.
         </div>
         <hr></hr>
         <div className='row'><strong>Bumsa International Pvt. Ltd 
          <br></br>Mar-2022 July-2022 (Part-Time Contract) </strong><br></br>
         1. Developed FrontEnd for Credibled application which automates the process for background Verification.<br></br>
         2. Designed CSS/HTML for the web Application and ensured its cross platform and cross device contents are pixel perfect.<br></br>
         3. Designed, handled and combined data from multiple API endpoints/AJAX requests to produce a single data source for better responsivesness of the page.<br></br>
         4. Designed and Developed Automated Test Cases using Selenium Web Driver.<br></br>
         5. Worked on API Integration for integrating all the API's in the frontend.
         </div>
         <hr></hr>
         <div className='row'><strong>Course Hero Sep-2021 Dec-2021 (Part-Time Contract)</strong><br></br>
         1. Tutoring Bachelor's Students from Computer Science and Information Science streams across the Globe.<br></br>
         2. Helping them with JavaScript, Comuter Science, Information Security, Web Security And Software Testing concepts.
         </div>
         <hr></hr>
         <div className='row'><strong>Chegg June-2021 Aug-2021 (Part-Time Contract)</strong><br></br>
         1. Advising/ Tutoring Students from Computer Science/Information Science Streams from India.<br></br>
         2. Mostly Solving JavaScript and frontend Bugs on React/Angular and explaining the root cause and solution to the students.
         </div>
         </div>
        </div>

        <div className="col sm-4 md-4 lg-4">

          <div className="row"><span style={{ fontWeight: 600 }}>Education</span>
            <div className="row" style={{ "margin-left": "20px" }}>
              New Horizon College of Engineering(VTU), Bangalore
              <br></br>
              B.E. in Computer Science (2014-2018)
            </div>
          </div>
          <hr></hr>
          <div className="row"><span style={{ fontWeight: 600 }}>Work experience</span>
            <div className="row"><span style={{ fontWeight: 600 }}>Broadridge Financial Solutions Pvt Ltd, Front-End Developer</span>
            </div>
            <br></br>
            <div className="row"><span style={{ fontWeight: 500 }}>Project: Global Post Trade Management(GPTM){"  "} Jun 2018-Jan 2021</span>
           
              <hr></hr>
              GPTM is a unified solution, across multiple asset classes, markets, currencies and business entities. It simplifies post trade processing by providing matching and confirmation, clearance
              and settlement, reconciliation, regulatory reporting across equity, fixed income, foreign
              exchange, money market, exchange-traded derivatives and securities finance.
              <br></br>
              <hr></hr>
              Roles and Responsibilities:
              <div className="row">
                1. Designing:Designing user Interfaces for Responsive SPA's leveraging HTML/HTML5, CSS3/CSS, JavaScript, BootStrap, React.js, Redux and Restful Web Services for QA/UAT environments.
                Creating interactive UI's in React.js using one-way data flow,Virtual DOM,JSX.
                <br></br>
              </div>
              <div className="row">
                2. Debugging and Bug Fixes: Analysing the bugs reported by the Testing Team/ Dev Team and performing a Root Cause Analysis and fixing the bugs/defect in the last step.
                <br></br>
              </div>
              <div className="row">
                3. UI/UX performance monitoring:  Identifying the production and non-production issues which impact user experience/performance of the web application. Implemented React JS code to handle cross browser compatibility issues.
                <br></br>
              </div>
              <div className="row">
                4. Integration & Implementation: Developing and designing new user interfaces/components based on the User Stories and performing Integration Checks.
                <br></br>
              </div>
              <div className="row">
                5. Daily Stand Ups: Communicating the latest progress on the bugs/issues/defects reported from the
                client/QA/support team in daily meetings and stand ups calls.
              </div>
              <div className="row">
                6. Documentation: Documentation of bugs/features using JIRA to maintain and track the progress of the bugs occurred during Testing/Integration Testing.
                <br></br>
              </div>
            </div>
            <hr></hr>
            <div className="row"><span style={{ fontWeight: 600 }}>Brillio Technologies Pvt. Ltd, Software-Engineer{" "}<br></br>Mar 2021-Present</span>
              <br></br>

              <div className='row'> </div>
            </div>
          </div>
          <div className="row">Roles And Responsibilites:</div>
          <div className="row"><span style={{ fontWeight: 600 }}>BrillioOne.ai</span>
            <hr></hr>
            1. Front-End Design: Developing HTML/HTML5 code and CSS from User Designs provided by the UI/UX Team. <br></br>
            2. Logic and User Interactions: Developing TypeScript functions for the user Interactions by Utilising Angular Framework.<br></br>
            3. Designing: Worked on SVG's to generate Dynamic, lightweight, high resolution icons or design.<br></br>
            4. Daily StandUp: Attending the Daily stand Up call and discussing the ongoing issues, roadblocks, with the team and Scrum Master.<br></br>
            5. Mobile Responsive Designs: Worked on mobile first design to ensure the contents are accessible on cross platform and cross-browser environment.<br></br>
            6. Bug Fixes and Reporting/Documentation: Fixing design Bugs, defects raised by Testing Team.
          </div>
          <br></br>
          <div className="row"><span style={{ fontWeight: 600 }}>BrillioFuel</span>
            <hr></hr>
            1. User Interactions And Front-End: Developing user Interactions and Pages with JavaScript, TypeScript and Angular, HTML, CSS <br></br>
            2. API Development: Developing API's on backend using Node.js and Axios<br></br>
            3. API Testing: Testing API's through POSTMAN and ensuring all the boundary conditions are checked<br></br>
            4. Daily StandUp: Attending the Daily stand Up call and discussing the ongoing issues, roadblocks, Clearing Doubts if Any<br></br>
            5. Logic Fixes: Debugging the defects provided by the Defects Team and Ensure the bugs don't reappear<br></br>
            6. Task Estimation: Preparing the task estimates, discussing with the team with the Task Estimates and Improvising.<br></br>
            7. Databases: Worked on MariaDB to query the database and serve it through API endpoints.<br></br>
            8. Code Optimization: Optimizing the code on the backend to reduce the page load times.
          </div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
