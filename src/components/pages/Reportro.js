/* Code By Rohit Choubey
** 20/02/2023
*/
import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
//Bootstrap and Col, row and Form libraries
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'; 
import Row from 'react-bootstrap/Row';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import ReportroData from './ReportroData';

export default function Reportro() {
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [fromStartDate, setFromStartDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

  const handleChange = (e) =>{
    setStartDate(e.target.value);
  }

  
  const handleChangeFrom = (e) =>{
    setFromStartDate(e.target.value);
  }


  return (
    <>
    <div className='m-3 m-lg-4'>
    <div className="breadcrumb mt-2 ">
      <Link to={'/'}>Dashboard</Link>&nbsp; » &nbsp;<span>Reports</span>
    </div>
    <center>
      <h3 className='mt-sm-5'> RO Inspection Reports</h3>
    </center>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <div id="progress_report" style={{textAlign: "center", padding: "0.5%", backgroundColor: "#FFE0E1"}}>You are watching data from {fromStartDate} to {startDate} </div>
      <Row className="mb-3 mt-4">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>From Date *</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="First name"
            value={fromStartDate} onChange={handleChangeFrom}
          />
           <Form.Control.Feedback type="invalid">
           Please provide From Date
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>To Date</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="To Date"
            value={startDate} onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide To Date
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Button className="mt-4" type="submit" id="inspection_report" >View Reports</Button>
        </Form.Group>
      </Row>
    </Form>
    </div>
    <ReportroData />
    </>
  );
}
