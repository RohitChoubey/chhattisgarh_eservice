import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios'
import $ from 'jquery';


export default function Updatetreefallingrecord() {
  let params = useParams();
  let id = params.id;
  const  url="../getTreeFeelingRecords/" + params.id;

  const [speciesData, setSpeciesData] = useState([]);
  const [file, setFile] = useState(null);
  const [reportData, setReportData] = new useState({
    range_name: "",
    officer_name: "",
    tree_felling_id: params.id,    
  });
 
  //  const finalUrl = url + params.id;

  // const myImageStyle = { width: '500px', height: '600px' };
  useEffect(() => {
    getAllData();
  }, []);

  //get all data to show on the pdf file
  const getAllData = () => {
    axios.get(`${url}`).then((res) => {
      const species =  res.data;
      setSpeciesData(species);      
    })
  }

  //get the uploaded file
  const handleFileChange    = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  //download insepection report
  const handleDownload = () => {
    // Make a request to the CodeIgniter backend to generate the dynamic PDF
    fetch('../getTreeSpecies/' + id, {
      method: 'PUT',
      responseType: 'blob' // Set the response type to blob
    })
    .then((response) => response.blob())
    .then((blob) => {
      // Create a URL for the blob object
      const url = window.URL.createObjectURL(new Blob([blob]));

      // Create a link element and click it programmatically to initiate the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Inspection Report .pdf');
      document.body.appendChild(link);
      link.click();

      // Clean up the URL and remove the link element
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  //get the input fields values
  const inputEvents = (event) =>{
    const {name,value} = event.target;
    // const data = {...reportData, [name]:value};
    setReportData({...reportData, [name]:value});
  }

  //set the response of application
  $(".edit_faculty_btn").click(function(){
    var reportStatus = $(this).data('id'); // set the element with the id john to have the retrieved value
    setReportData({...reportData, reportStatus});
  });

  //submit the officer response
  const onSubmit = async (event) => {
    event.preventDefault();    
    const formData = new FormData();
    formData.append('reportData', JSON.stringify(reportData));
    formData.append('file', file);
    await axios.post('../inspectionReportAction', formData)
      .then((response) => {
        console.log(response);
        // Handle the API response
        if(response.status===200){
          Swal.fire({
            title: "Success!",
            text: "Inspection Report Updated",
            icon: "success",
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then((result) => {
            if (result.isConfirmed) {
              // Set the redirect URL
              window.location.href = '../approvedRejectedApplications';
            }
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          text: "Something Went Wrong",
          icon: "error",
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          allowEscapeKey: false
        });
      });
  };
  
  return (
    <div>
        <div className="dashboard-ecommerce">
          <div className="container-fluid dashboard-content me-xxl-0 custom-container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="page-header">
                      <h2 className="pageheader-title"const >Tree Felling</h2>
                      <div className="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><a href="" className="breadcrumb-link">Dashboard</a></li>
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
                                <li className="breadcrumb-item">
                                  <a href="" className="breadcrumb-link"><strong>SRN :</strong>  
                                    {speciesData.map((res,index) =>  res.SRN )}
                                  </a>
                                </li>&emsp;
                                <li className="text-center flex-xxl-fill fw-bold" aria-current="page">View Details</li>&emsp;
                                <li className="text-center flex-xxl-fill fw-bold" aria-current="page">Date :</li>
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
                  {speciesData.map((result, element) => {
                    return(
                  <div id="about_form" key={result}>
                    {/* Personal Details section */}
                      <h4>Personal Details</h4>
                      <hr/>
                     
                      <Row>
                        <>
                        <Col xs={2}>
                            <div className="form-group">
                              <label>Applicant Name : </label> { result.user_name }
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className="form-group">
                              <label>Father's Name : </label> {result.father_name}
                            </div>
                        </Col>
                        <Col xs={3} >
                            <div className="form-group">
                              <label>Address : </label> {result.address}
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className="form-group">
                              <label>Mobile No : </label> {result.mobile_number}
                            </div>
                        </Col>
                        <Col xs={2} className='mt-3'>
                          <div className="form-group">
                          <i className="fa fa-user h1" aria-hidden="true"></i>
                          </div>
                        </Col>
                        <Col>
                          <div className="form-group mt-2">
                            <label>	Email Address : </label> {result.email}
                          </div>
                        </Col>
                        </>
                      </Row>
                    
                       <h4 className='mt-lg-5'>Land Details</h4>
                      <hr/>
                      <Row>
                        <Col xs={2}>
                          <div className="form-group">
                            <label>Khasra Number : </label> 	{result.khasra_number}
                          </div>
                        </Col>
                        <Col xs={3} >
                          <div className="form-group">
                            <label>Village : </label> {result.land_village}
                          </div>
                        </Col>
                        <Col xs={3}>
                          <div className="form-group">
                            <label>Patwari Halka Number  : </label> {result.patwari_halka_number}
                          </div>
                        </Col>
                      </Row>


                      {/* Individual Details section */}
                      {/* <h4 className='mt-lg-5'>Individual Details</h4>
                      <hr/>
                      <Row>
                        <Col Col xs={2}>
                          <div className="form-group">
                            <label>Status : </label> 	Pending
                          </div>
                        </Col>
                        <Col Col xs={2} >
                            <div className="form-group">
                              <label>Type : </label> Tree Felling
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
                      </Row> */}

                      {/*  Uploaded Documents section */}

                      


                      <h4 className='mt-lg-5'> Uploaded Documents</h4>
                      <hr/>
                      <Row>
                        <Col xs={2}>
                            <div className="form-group">
                              <Link to = {"http://10.26.0.54/eservices/asset/treeFellingfiles/" +result.khasra} target='_blank' download>
                                <i className="fa fa-border fa-file-pdf h1 text-danger"></i><br/> Khasra
                              </Link>
                            </div>
                        </Col>
                        <Col xs={2}>
                        <div className="form-group">
                            <Link to = {"http://10.26.0.54/eservices/asset/treeFellingfiles/" +result.affidavit} target='_blank'>
                              <i className="fa fa-border fa-file-pdf h1 text-danger" aria-hidden="true"></i><br/>Affidavit of Co-owner
                            </Link>
                          </div>
                        </Col>
                        <Col xs={2} >
                        <div className="form-group">
                          <Link to = {"http://10.26.0.54/eservices/asset/treeFellingfiles/" +result.bank_details} target='_blank'>
                            <i className="fa fa-border fa-file-pdf h1 text-danger" aria-hidden="true"></i><br/>Bank Account Details
                          </Link>
                         </div>
                        </Col>
                        <Col xs={2} >
                        <div className="form-group">
                          <Link to = {"http://10.26.0.54/eservices/asset/treeFellingfiles/" +result.site_photograph} target='_blank'>
                            <i className="fa fa-border fa-file-pdf h1 text-danger" aria-hidden="true"></i><br/>Site Photographs 
                          </Link>
                         </div>
                        </Col>
                        <Col xs={2} >
                        <div className="form-group">
                        <Link to = {"http://10.26.0.54/eservices/asset/treeFellingfiles/" +result.caste_certificate} target='_blank' >
                          <i className="fa fa-border fa-file-pdf h1 text-danger" aria-hidden="true"></i><br/>Caste Certificate
                          </Link>
                         </div>
                        </Col>
                        <Col xs={2} >
                        <div className="form-group"  onClick={handleDownload}>
                          <i className="fa fa-border fa-file-pdf h1 text-danger" aria-hidden="true"></i><br/>Download Inspection File
                         </div>
                        </Col>
                      </Row>

                      {/*  GPS Reading section */}
                      {/* <h4 className='mt-lg-5'> GPS Reading</h4>
                      <hr/>
                      <Row>
                        <Col xs={3}>
                            <div className="form-group">
                              <label>GPS Longitude :</label>
                              <input type='text' name="longitude" id="longitude" className='form-control' />
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="form-group">
                              <label>GPS Latitude : </label>
                              <input type="text" name="latitude" id="latitude" className='form-control' /> 
                            </div>
                        </Col>
                        {/* <Col xs={4} className='modal-footer3'>
                            <div className="form-group">
                              <label>	KML/KMZ File</label>
                            </div>
                        </Col> */}
                      {/* </Row> */} 
                      {/*   RO Information section */}
                      <h4 className='mt-lg-5'> Inspection Done By</h4>
                      <hr/>
                      <form method="post" onSubmit={onSubmit} encType="multipart/form-data">
                        <Row>
                          <Col xs={4}>
                            <div className="form-group">
                              <label>Range Name :</label><span className='red-text'>*</span>
                              <select className='form-control' name='range_name' id="range_name" onChange={inputEvents} >
                                  <option val="">Select Range Name</option>
                                  <option val="Pinjore">Pinjore</option>
                                  <option val="Panchkula">Panchkula</option>
                              </select>
                            </div>
                          </Col>
                          <Col xs={4}>
                            <div className="form-group">
                              <label>Revenue/Forest officer Name <span className='red-text'>*</span></label>
                              <input type="text" name ="officer_name" id ="officer_name" className='form-control' placeholder='Enter Ranger Name' onChange={inputEvents}  required />
                            </div>
                          </Col>
                          <Col xs={4}>
                            <div className="form-group">
                              <label>Upload Inspection Report <span className='red-text'>*</span></label>
                              <input type="file" name ="inspection_report" id ="inspection_report" className='form-control' onChange={handleFileChange} />
                            </div>
                          </Col>
                        </Row>
                        <div className="col-2 col-lg-2 col-md-2 col-sm-2 col-xl-2 mt-lg-5">
                          <button type="submit" id="approveApplication" className="btn btn-primary btn-block edit_faculty_btn" data-id="1">Submit</button>&ensp;
                          <button type="submit" id="rejectApplication" className="btn btn-danger btn-block edit_faculty_btn" data-id="0" >Reject</button>                    
                        </div>
                      </form>
                  </div>
                      )
                    })}
                      
                </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}
