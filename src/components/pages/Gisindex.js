import React from 'react';
import '../../App.css'; 
import Table from 'react-bootstrap/Table';

export default function Gisindex() {
  return (
    <>
    <Table striped bordered hover className="my-md-5 p-2 gisindex_table_380px">
      <tbody>
        <tr><th colSpan="4" style={{background: "#FBDDD1", textAlign: "center"}}>Summary of GIS Based Applications received on e-service "NOC in respect of Block Forest " </th></tr>
        <tr>
          <td className="well span3">
            <center>
              <h5>Number of Applications</h5>
            </center>
            <div style={{textAlign: "center"}}> 10</div> 
          </td>
          <td className="well span3">
            <center>
              <h5>Approved Applications</h5>
            </center>
            <div style={{textAlign: "center"}}> 2</div> 
          </td>
          <td className="well span3">
            <center>
                <h5>Rejected Applications</h5>
            </center>
            <div style={{textAlign: "center"}}> 8</div> 
          </td>
        </tr>
      </tbody>
    </Table>
      
    {/* <div className='me-lg-5'>
    <b className="d-flex align-items-center justify-content-center mx-sm-auto my-md-5 p-2" style={{background: "#FBDDD1", width:"70%"}}>Summary of GIS Based Applications received on e-service "NOC in respect of Block Forest " </b>
      <Container className='text-center'>
        <Row  className='p-4' style={{background:"#ddd"}}>
          <Col xs={3}> <b>Number of Applications<br/>10</b></Col> 
          <Col xs={3}><b>Approved Applications<br/>2</b></Col> 
          <Col xs={2}><b>Rejected Applications<br/>3</b></Col> 
        </Row>
      </Container>
      </div> */}
    </>
  );
}
