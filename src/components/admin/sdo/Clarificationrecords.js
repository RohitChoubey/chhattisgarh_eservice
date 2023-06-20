import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//import Jquery
import axios from 'axios';
import $ from 'jquery'; 

export default class Clarificationrecords extends Component {
    // State array variable to save and show data
    constructor(props) {
      super(props)
      this.state = {
          data: [],
      }
  }
  componentDidMount() {
     //Get all users details in bootstrap table
      axios.get('https://jsonplaceholder.typicode.com/comments').then(res =>  {
        //Storing users detail in state array object
        this.setState({data: res.data});
      }); 
      //initialize datatable
      $(document).ready(function () {
          setTimeout(function(){
          $('#example').DataTable(
                {
                  retrieve: true,
                  pagingType: 'full_numbers',
                  pageLength: 10,
                  processing: true,
                  dom: 'Bfrtip',
                      buttons: ['copy', 'csv', 'print'
                  ]
                }
          );
          } ,
          1000
          );
      });
   }
  render(){
      return (
          <>
            <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header my-lg-4" style={{marginLeft: "268px"}}>
                        <h2 className="pageheader-title">Clarification Records</h2>
                        <div className="page-breadcrumb">
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><Link to="./clarificationrecords" className="breadcrumb-link">Dashboard</Link></li>
                                  <li className="breadcrumb-item"><Link to="./clarificationrecords" className="breadcrumb-link">Clarification Records</Link></li>
                                  <li className="breadcrumb-item active" aria-current="page">Manage </li>
                              </ol>
                          </nav>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="MainDiv" style={{width: "initial", marginLeft: "210px" }}>
                  <div className="m-md-5 p-5 mt-lg-auto ">
                      <table id="example" className="table table-striped table-hover table-responsive table-sm">
                          <thead>
                              <tr>
                                  <th>Sr. No.</th>
                                  <th>Applicant Name</th>
                                  <th>SRN</th>
                                  <th>Request Date</th>
                                  <th>Status</th>
                                  <th>User Type</th>
                                  <th>CAF Pin</th>
                                  <th>Ageing</th>
                                  <th>Time Limit</th>
                                  <th>Block Forest Approved</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {this.state.data.map((result) => {
                                  return (
                                      <tr>
                                          <td>{result.id}</td>
                                          <td>Rohit</td>
                                          <td>Y82UNTHM9C</td>
                                          <td>12/08/1988</td>
                                          <td>Pending</td>
                                          <td>Invest Haryana</td>
                                          <td>4049376768</td>
                                          <td>970</td>
                                          <td>-540</td>
                                          <td>--</td>
                                          <td><Link to="" title="View Map" className='btn btn-warning'><i class="fa fa-map"></i></Link> <Link to="" title="View Operator Details" className='btn btn-info'><i className="fa fa-eye"></i></Link></td>
                                      </tr>
                                  )
                              }) }
                          </tbody>
                      </table>
                  </div>
              </div>
          </>
      );
  }
  }