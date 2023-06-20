import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';




const styles = {
  span:{
    color:"red"
  }
};
export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [fromStartDate, setFromStartDate] = useState(new Date().toISOString().split('T')[0]);

  const handleChange = (e) =>{
    setStartDate(e.target.value);
  }

  const handleChangeFrom = (e) =>{
    setFromStartDate(e.target.value);
  }
  
  return (
    <>
    <center>
      <h3 className='mt-sm-5'>Dashboard</h3>
    </center>
    <Form id="top-websites-cr-form" className='m-3' action="" method="GET">
      <div id="progress_report" style={{textAlign: "center", padding: "0.5%", backgroundColor: "#FFE0E1"}}>You are watching data from {fromStartDate} to {startDate}</div>
      <br />
      {/* <table className="table table-bordered table-hover table-condensed table-striped"> */}
      {/* <Table striped bordered hover>
        
          <tr>
            <td style={{fontSize : "14px"}}>From Date <span className="required">*</span>
            </td>
            <td>
              <input style={{width:"100px"}} readOnly="readonly" value="15-01-2023" name="CustomAdmin[from_date]" id="CustomAdmin_from_date" type="date" />
            </td>
            <td>
              <label htmlFor="CustomAdmin_to_date">To Date</label>
            </td>
            <td>
              <input style={{width:"100px"}} readOnly="readonly" value="15-02-2023" name="CustomAdmin[to_date]" id="CustomAdmin_to_date" type="text" />
            </td>
            <td rowSpan="2" style={{verticalAlign: "middle"}}>
              <center>
                <input className="btn" type="submit" value="View Dashboard" id="inspection_report" />
              </center>
            </td>
          </tr>
          
        
      </Table> */}
     
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>From Date <span style={styles.span}> *</span></Form.Label>
          <Form.Control type="date" placeholder="Select From Date" value={fromStartDate} onChange={handleChangeFrom} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>To Date<span style={styles.span}> *</span></Form.Label>
          <Form.Control type="date" placeholder="Select To Date" value={startDate} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridButton">
        <Button variant="primary" type="submit" className='m-4'> View Dashboard </Button>
        </Form.Group>
      </Row>
   
 


      {/* <table className="table"> */}
      <Table striped bordered hover>
        
          <tr style={{backgroundColor: "#d5e6ed"}}>
            <th width="18%">
              <center>Services</center>
            </th>
            <th width="12%">
              <center>Applications Received</center>
            </th>
            <th width="25%">
              <center>Approved</center>
            </th>
            <th width="25%">
              <center>Pending</center>
            </th>
            <th width="25%">
              <center>Rejected</center>
            </th>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr style={{fontSize:"14px"}}>
            <td style={{backgroundColor:"#37a0dd"}}>
              <b>
                <center>Permissions for felling of trees </center>
              </b>
            </td>
            <td style={{backgroundColor:"#ccc"}}>
              <b>
                <center>
                  <a href="view?records=7&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">2</a>
                </center>
              </b>
            </td>
            <td>
              <Table striped bordered hover>
                
                  <tr>
                    <td width="110px" style={{backgroundColor:"#ccc"}}>
                      <b>
                        <center>
                          <a href="view?records=1&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                        </center>
                      </b>
                    </td>
                    <td width="110px" style={{backgroundColor:"#43b270"}}>
                      <center>
                        <a href="view?records=2&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                      </center>
                    </td>
                    <td width="110px" style={{backgroundColor:"#f2842b"}}>
                      <center>
                        <a href="view?records=3&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                      </center>
                    </td>
                  </tr>
                
              </Table>
            </td>
            <td>
              <Table striped bordered hover>
                <tr>
                  <td width="110px" style={{backgroundColor:"#ccc"}}>
                    <b>
                      <center>
                        <a href="view?records=4&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">2</a>
                      </center>
                    </b>
                  </td>
                  <td width="110px" style={{backgroundColor:"#43b270"}}>
                    <center>
                      <a href="view?records=5&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">2</a>
                    </center>
                  </td>
                  <td width="110px" style={{backgroundColor:"#f2842b"}}>
                    <center>
                      <a href="view?records=6&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                    </center>
                  </td>
                </tr>
              </Table>
            </td>            
            <td>
              <Table striped bordered hover>
                  <tr>
                    <td width="110px" style={{backgroundColor:"#ccc"}}>
                      <b>
                        <center>
                          <a href="view?records=15&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                        </center>
                      </b>
                    </td>
                    <td width="110px" style={{backgroundColor:"#43b270"}}>
                      <center>
                        <a href="view?records=16&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                      </center>
                    </td>
                    <td width="110px" style={{backgroundColor:"#f2842b"}}>
                      <center>
                        <a href="view?records=17&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                      </center>
                    </td>
                  </tr>
                
              </Table>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
        <tr style={{fontSize:"14px"}}>
          <td style={{backgroundColor:"#37a0dd"}}>
            <b>
              <center>NOCs in respect of PLPA or Forest or Restricted lands and grant of NOC </center>
            </b>
          </td>
          <td style={{backgroundColor:"#ccc"}} >
            <b>
              <center>
                <a href="view?records=8&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">2</a>
              </center>
            </b>
          </td>
          <td>
            <Table striped bordered hover>
              
                <tr>
                  <td width="110px" style={{backgroundColor:"#ccc"}}>
                    <b>
                      <center>
                        <a href="view?records=9&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                      </center>
                    </b>
                  </td>
                  <td width="110px" style={{backgroundColor:"#43b270"}}>
                    <b>
                      <center>
                        <a href="view?records=10&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                      </center>
                    </b>
                  </td>
                  <td width="110px" style={{backgroundColor:"#f2842b"}}>
                    <center>
                      <b>
                        <a href="view?records=11&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                      </b>
                    </center>
                  </td>
                </tr>
              
            </Table>
          </td>
          <td>
            <Table striped bordered hover>
              <tr>
                <td width="110px" style={{backgroundColor:"#ccc"}}>
                  <b>
                    <center>
                      <a href="view?records=12&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">2</a>
                    </center>
                  </b>
                </td>
                <td width="110px" style={{backgroundColor:"#43b270"}}>
                  <b>
                    <center>
                      <a href="view?records=13&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">2</a>
                    </center>
                  </b>
                </td>
                <td width="110px" style={{backgroundColor:"#f2842b"}}>
                  <center>
                    <b>
                      <a href="view?records=14&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                    </b>
                  </center>
                </td>
              </tr>
            </Table>
          </td>
          <td>
          <Table striped bordered hover>
            <tr>
              <td width="110px" style={{backgroundColor:"#ccc"}}>
                <b>
                  <center>
                    <a href="view?records=18&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                  </center>
                </b>
              </td>
              <td width="110px" style={{backgroundColor:"#43b270"}}>
                <b>
                  <center>
                    <a href="view?records=19&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                  </center>
                </b>
              </td>
              <td width="110px" style={{backgroundColor:"#f2842b"}}>
                <center>
                  <b>
                    <a href="view?records=20&amp;from_date=15-01-2023&amp;to_date=15-02-2023" target="_blank">0</a>
                  </b>
                </center>
              </td>
            </tr>
            </Table>
          </td>
        </tr>
      </Table>
      <br />
      <br />
      <Container>
      <Row>
      <Col style={{backgroundColor:"#37a0dd"}} xs={1}> <b>Legends</b></Col> 
      <Col style={{backgroundColor:"#ccc"}} xs={1}><b>Total</b></Col> 
      <Col style={{backgroundColor:"#43b270"}} xs={2}><b>Within Time</b></Col> 
      <Col style={{backgroundColor:"#f2842b"}} xs={2}><b>Beyond Time</b></Col> 
      </Row>
    </Container>
      {/* <Table className="float-left">
        
          <tr>
            
            <td >
              <b>Total</b>
            </td>
            <td >
              
            </td>
            <td >
              
            </td>
          </tr>
        
      </Table> */}
      </Form>
    </>
  );
}
