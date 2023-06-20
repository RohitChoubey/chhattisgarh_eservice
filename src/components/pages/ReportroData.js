/* Code By Rohit Choubey
** 20/02/2023
*/
import React, { Component }  from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
//For API Requests
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class ReportroData extends Component {
    // State array variable to save and show data
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
       //Get all users details in bootstrap table
        // axios.get('https://jsonplaceholder.typicode.com/comments').then(res =>  {
            axios.get('/user').then(res =>  {
                console.log(res);
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
                <div className="MainDiv">
                    <div className="m-md-5 p-5">
                        <table id="example" className="table table-striped table-hover table-responsive table-sm">
                            <thead>
                                <tr>
                                    <th>SRN/ Sr. No.</th>
                                    <th>Applicant Name</th>
                                    <th>Status</th>
                                    <th>Land Location</th>
                                    <th>Division</th>
                                    <th>Request Date</th>
                                    <th>Response Date</th>
                                    <th>Inspection Report</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((result) => {
                                    return (
                                        <tr>
                                            <td>{result.id}</td>
                                            <td>{result.name}</td>
                                            <td>{result.email}</td>
                                            <td>{result.body}</td>
                                            <td>{result.body}</td>
                                            <td>{result.body}</td>
                                            <td>{result.body}</td>
                                            <td>
                                                <Link to="" target="_blank">
                                                    <img src="" height="50" width="50" />
                                                </Link>
                                            </td>
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
