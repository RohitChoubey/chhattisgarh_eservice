import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Updateclar() {
    return (
        <div>
            <div className="dashboard-ecommerce">
              <div className="container-fluid dashboard-content me-xxl-0 custom-container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="page-header">
                          <h2 className="pageheader-title">Tree Felling</h2>
                          <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="" className="breadcrumb-link">Dashboard</a></li>
                                  <li className="breadcrumb-item"><a href="" className="breadcrumb-link">Clarification Records</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">View</li>
                                </ol>
                            </nav>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="container-fluid dashboard-content">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="page-header">
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="" className="breadcrumb-link"><strong>SRN : </strong> PKV-MCV-Q066 </a></li>&emsp;
                                    <li className="text-center flex-xxl-fill fw-bold" aria-current="page">View Details</li>&emsp;
                                    <li className="text-center flex-xxl-fill fw-bold" aria-current="page">Date : 21/04/2023</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-body">
                      <div className="form-popup" style={{marginLeft: "20px"}}>
                      <div align="center">
                          <div id="success"></div>
                          <div id="error"></div>
                      </div>
                      <form id="about_form"  method="post" >
                        {/* Personal Details section */}
                          <h4>Personal Details</h4>
                          <hr/>
                          <Row>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <label>Applicant Name : </label> Test
                                </div>
                            </Col>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <label>Father's Name : </label> Testing
                                </div>
                            </Col>
                            <Col Col xs={3} >
                                <div className="form-group">
                                  <label>Address : </label> Devinager, panchkula, Haryana
                                </div>
                            </Col>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <label>Mobile No : </label> 1234567890
                                </div>
                            </Col>
                            <Col Col xs={2} className='mt-3'>
                                <div className="form-group">
                                  <img className='float-lg-end w-50' src="https://164.100.137.227/eservices/images/noimg.jpeg" />
                                </div>
                            </Col>
                            <Col style={{marginTop: "-84px"}}>
                                <div className="form-group">
                                  <label>	Email Address : </label> Test@gmail.com
                                </div>
                            </Col>
                          </Row>
                           
                          {/* Individual Details section */}
                          <h4>Individual Details</h4>
                          <hr/>
                          <Row>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <label>Status : </label> 	Pending
                                </div>
                            </Col>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <label>Category	 : </label> Individual
                                </div>
                            </Col>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <label>Mobile No : </label> 1234567890
                                </div>
                            </Col>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <label>	User Type : </label> Operator
                                </div>
                            </Col>
                          </Row>
    
                          {/*  Uploaded Documents section */}
                          <h4 className='mt-lg-5'> Uploaded Documents</h4>
                          <hr/>
                          <Row>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <img src='https://164.100.137.227/eservices/images/pdf_view.jpeg' /><br/> &emsp;&emsp;Tatima
                                </div>
                            </Col>
                            <Col Col xs={2}>
                            <div className="form-group">
                                  <img src='https://164.100.137.227/eservices/images/pdf_view.jpeg' /><br/> &emsp;&emsp;Ownership
                                </div>
                            </Col>
                            <Col Col xs={2} >
                            <div className="form-group">
                                  <img src='https://164.100.137.227/eservices/images/pdf_view.jpeg' /><br/> &emsp;&emsp;Girdawari
                                </div>
                            </Col>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <img src='https://164.100.137.227/eservices/images/pdf_view.jpeg' /><br/> &emsp;&emsp;Plan
                                </div>
                            </Col>
                            <Col Col xs={2}>
                            <div className="form-group">
                                  <img src='https://164.100.137.227/eservices/images/pdf_view.jpeg' /><br/> &emsp;&emsp;Agreement
                                </div>
                            </Col>
                            <Col Col xs={2} >
                            <div className="form-group">
                                  <img src='https://164.100.137.227/eservices/images/pdf_view.jpeg' /><br/> &emsp;&emsp;Report
                                </div>
                            </Col>
                          </Row>
    
                          {/*   Land Details section */}
                          <h4 className='mt-lg-5'> Land Details</h4>
                          <hr/>
                          <Row>
                            <Col Col xs={3}>
                                <div className="form-group">
                                  <label>Purpose :</label> Petrol Pump
                                </div>
                            </Col>
                            <Col Col xs={2}>
                                <div className="form-group">
                                  <label>Village :</label> tEST
                                </div>
                            </Col>
                            <Col Col xs={3}>
                                <div className="form-group">
                                  <label>Forest Area near to Land :</label> PF (Protected Forest)
                                </div>
                            </Col>
                            <Col Col xs={3}>
                                <div className="form-group">
                                  <label>Land Measurement :</label> 34 (Acre)
                                </div>
                            </Col>
                            </Row>
                            <Row>
                            <Col Col xs={4} className='mt-4'>
                                <div className="form-group">
                                  <label>Ownership of Land :</label> Private
                                </div>
                            </Col>
                            <Col Col xs={4} className='mt-4'>
                                <div className="form-group">
                                  <label>Place :</label> Panchkula Of Panchkula In HARYANA
                                </div>
                            </Col>
                            <Col Col xs={4} className='mt-4'>
                                <div className="form-group">
                                  <label>Nature of Land :</label> Aravali Hillocks
                                </div>
                            </Col>
                            <Col Col xs={4} className='mt-4'>
                                <div className="form-group">
                                  <label>Khasra Number :</label>23
                                </div>
                            </Col>
                            <Col Col xs={4} className='mt-4'>
                                <div className="form-group">
                                  <label>Rect Number :</label>232
                                </div>
                            </Col>
                            <Col Col xs={4} className='mt-4'>
                                <div className="form-group">
                                  <label>Killa Number:</label>2322
                                </div>
                            </Col>
                          </Row>
    
                            {/*  Risk Category section */}
                            <h4 className='mt-lg-5'> Risk Category</h4>
                          <hr/>
                          <Row>
                            <Col Col xs={12}>
                              <div className="form-group">
                                <label>Risk Category :</label> Low Risk
                              </div>
                            </Col>
                          </Row>
    
                          {/*   RO Information section */}
                          <h4 className='mt-lg-5'> Risk Category</h4>
                          <hr/>
                          <Row>
                            <Col Col xs={4}>
                              <div className="form-group">
                                <label>Range Name :</label><span className='red-text'>*</span>
                                <select className='form-control' name='range_name' id="range_name">
                                    <option val="">Select Range Name</option>
                                    <option val="Pinjore">Pinjore</option>
                                    <option val="Panchkula">Panchkula</option>
                                </select>
                              </div>
                            </Col>
                            <Col Col xs={4}>
                              <div className="form-group modal-footer">
                                <label>RO Name :</label><span className='red-text'>*</span> &emsp;
                                Ramesh
                              </div>
                            </Col>
                          </Row>
    
    
                          <div className="col-2 col-lg-2 col-md-2 col-sm-2 col-xl-2 mt-lg-5">
                            <button type="submit" id="SaveRecord" className="btn btn-primary btn-block edit_faculty_btn" data-id="">Submit</button>&ensp;
                            <button type="submit" id="SaveRecord" className="btn btn-danger btn-block edit_faculty_btn" data-id="">Reject</button>                    
                          </div>
                      </form>
                    </div>
                </div>
              </div>
          </div>
        </div>
        </div>
      )
}
