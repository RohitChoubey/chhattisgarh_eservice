import React from 'react';
import '../../App.css';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div className='m-3'>
    <div className="breadcrumb mt-2">
      <a href="/">Dashboard</a> » <span>Login</span>
    </div>
      <Table striped bordered hover>
      <thead>
      <tr style={{textAlign: "center"}} >	
        <th colSpan="4">
        Information regarding Services notified under Haryana Right to Services Act, 2014</th>	
      </tr>
        <tr>
          <th>Sr. No.</th>
          <th>Name of Service</th>
          <th>Time Limit</th>
          <th>Documents Required</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Permission for felling of trees in areas notified under general section-4 of Haryana Land and Preservation Act, 1900 (Punjab Act II of 1900)</td>
          <td>15 Days</td>
          <td>Click here to download</td>
        </tr>
        <tr>
          <td>2</td>
          <td>NOC in respect of Haryana Land and Preservation Act, 1900 (Punjab Act, II of 1900) or Forest or Restricted lands</td>
          <td>15 Days</td>
          <td>Click here to download</td>
        </tr>
        <tr>
          <td colSpan="4">* Performas and Forms are available in User Manuals. </td>
        </tr>
        <tr>
        <td colSpan="4">
          Areas of  Haryana State under Punjab Land Preservation Act, 1900 (PLPA) : <a  href="https://164.100.137.227/eservices/iviss/pdf/landingPagePDF/PLPA Areas.pdf" target="_blank" rel="noreferrer"><b>1. PLPA Areas</b></a><br />	
          <a style={{marginLeft:"405px"}} target="_blank" rel="noreferrer" href="https://164.100.137.227/eservices/iviss/pdf/landingPagePDF/Sonepat District PLPA Areas.pdf"><b>2. Sonepat District PLPA Area</b></a>
          </td>
        </tr>
      </tbody>
    </Table>
    <b>Online Portals and User Manuals for applying applications for the above mentioned Services are given below:-</b>
    <div className="page-header">
	<h1 className='mt-2'>Login <small>to your account</small></h1>
  <hr/>
</div>
<Container>
  <Row>
    <Col sm={3}>
      <div>
        <center>
            <h3>Department Login</h3>
        </center>
        <div style={{textAlign: "center"}}>
          <Link to='DeptLogin'><input type="submit" className="btn btn-primary btn-large" data-loading-text="Loading..." value="Login" /></Link>
        </div> 
      </div>
    </Col>
    <Col sm={3}>
      <div>
          <center>
              <h3>Self Login</h3>
          </center>
          <div style={{textAlign: "center"}}>
              <Link to='SelfLogin'> <input type="submit" rel="noreferrer" className="btn btn-primary btn-large" data-loading-text="Loading..." value="Login" /></Link>     <br/>    
              <Link  to="https://164.100.137.227/eservices/iviss/pdf/manuals/SelfloginUserManual.pdf" rel="noreferrer" target="_blank"><b>Download User Manual</b></Link>
          </div> 
      </div>
    </Col>
    <Col sm={3}>
      <div>
        <center>
           <h3>CSC Connect</h3>
        </center>
        <div style={{textAlign: "center"}}>   
        <input type="submit" rel="noreferrer" className="btn btn-primary btn-large" data-loading-text="Loading..." value="Login" /> <br/>
          <a target="_blank" rel="noreferrer" href="https://164.100.137.227/eservices/iviss/pdf/manuals/CSCUserManual.pdf"><b>Download User Manual</b></a>                   
          </div> 
      </div>
    </Col>
    <Col sm={3}>
      <div>
        <center>
            <h3>Industrial Login</h3>
        </center>
        <div style={{textAlign: "center"}}>
          <input type="submit" rel="noreferrer" className="btn btn-primary btn-large" data-loading-text="Loading..." value="Login" />  <br />    
          <a target="_blank" rel="noreferrer" href="https://164.100.137.227/eservices/iviss/pdf/manuals/InvestHaryanaUserManual.pdf"><b>Download User Manual</b></a>                   
        </div> 
      </div>
    </Col>
  </Row>
</Container>
  <div className="form-signin m-lg-5" style={{backgroundColor: "#ddd"}}>
    <div style={{textAlign: "center"}}>
        <a href="http://saralharyana.gov.in/" target="_blank" rel="noreferrer"><img src="https://164.100.137.227/eservices/img/Antyodaya-Saral-Logo-new.png" width="120" /></a>                    
    </div> 
    <center>
        <h4>Forest Department eServices are now also available on Antyodaya SARAL</h4>
        <p>To avail schemes or services, please visit <a href="http://saralharyana.gov.in/" target="_blank" rel="noreferrer">www.saralharyana.gov.in
  </a><a target="_blank" rel="noreferrer" href="https://164.100.137.227/eservices/iviss/pdf/manuals/SARALHARYAN.pdf"><b>(Download User Manual for SARAL Portal)</b> </a>
  </p>
        <p>OR</p>
        <p>visit Antyodaya Kendras (<a href="/eservices/dashboard/downloadfile?doc=saral-kendras.pdf" target="_blank" rel="noreferrer">List of  Antyodaya SARAL Kendras</a>)</p>
        <p>For any queries to schemes/services, please call 0172-3968400 <sup style={{color: "red"}}>*7:00 AM - 8:00 PM (Monday to Saturday, excluding Government Holidays)</sup></p>
    </center>
  </div>
  <p style={{fontSize:"14px"}} colSpan="4"> For any queries, Kindly mail at <b>foresthry[at]gmail[dot]com</b></p>
</div>
    </>
  );
}
