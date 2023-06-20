import React , { Component } from 'react'
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


export default class Mainrecord extends Component {
    // State array variable to save and show data
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        //Get all users details in bootstrap table
        axios.get('approvedRejectedApplications').then(res =>  {
            //Storing users detail in state array object
            this.setState({data: res.data});
            
        }); 
        //initialize datatable
        $(document).ready(function () {
            setTimeout(function(){
                $('#example').DataTable({
                    retrieve: true,
                    pagingType: 'full_numbers',
                    pageLength: 10,
                    processing: true,
                    dom: 'Bfrtip',
                    buttons: ['copy', 'csv', 'print']
                });
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
                        <h2 className="pageheader-title">Approved and Rejected Tree Felling Applications</h2>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="./mainrecord" className="breadcrumb-link">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link to="./mainrecord" className="breadcrumb-link">Manage RO</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Approved and Rejected Tree Felling Applications </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    </div>
                    <Link to="/mainrecord" className='me-xxl-5 ms-auto w-auto'>
                        <button className='btn' style={{backgroundColor: "#e91e63", color: "#fff"}}> <i className="fa fa-solid fa-arrow-left"></i> Back</button>
                    </Link>
                </div>
                <div className="MainDiv" style={{width: "initial", marginLeft: "210px" }}>
                    <div className="m-md-5 p-5 mt-lg-auto">
                        <table id="example" className="table table-striped table-hover table-responsive table-sm">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Applicant Name</th>
                                    <th>Request Date</th>
                                    <th>SRN</th>
                                    <th>Status</th>
                                    {/* <th>User Type</th>
                                    <th>CAF Pin</th>
                                    <th>Ageing</th>
                                    <th>Time Limit</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.data.map((result, element) => {
                                    return (
                                        <tr key={result.tree_feeling_id}>
                                            <td>{element + 1}</td>
                                            <td>{result.user_name}</td>
                                            <td>{result.tree_feeling_created_at}</td>
                                            <td>{result.SRN}</td>

                                            <td>{

                                                result.status==="Approved" ? <p><span _ngcontent-won-c271="" fxflex="100" fxlayoutalign="start center" className="ng-star-inserted approved-applications">{result.status}</span></p> : <p><span _ngcontent-won-c271="" className="ng-star-inserted rejected-application">{result.status}</span></p>
                                            }</td>
                                            <td><Link to={`../updatetreefallingrecord/${result.tree_feeling_id}`} title="View Records Details" className='btn btn-view'><i className="fa fa-eye" aria-hidden="true"></i></Link></td>
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
