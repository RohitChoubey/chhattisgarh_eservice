import React from 'react'
import { Link } from 'react-router-dom';
//Bootstrap and Col, row and Form libraries
import Table from 'react-bootstrap/Table';

export default function Viewuser() {
  return (
    <div>
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="page-header my-lg-4" style={{marginLeft: "268px"}}>
                    <h2 className="pageheader-title">View User</h2>
                    <div className="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="./managerouser" className="breadcrumb-link">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Manageusers </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginLeft: "210px" }}>
        <Link to="/" className='float-sm-end btn btn-outline-primary' ><i class="fa fa-arrow-left"></i> Back</Link>
        <Table striped responsive hover className="my-md-5 p-2 view_user_table_380px" variant="primary">
      <tbody>
        <tr></tr>
        <tr>
          <td className="well span3">
            <strong> Officer Name </strong>:
          </td>
          <td className="well span3">Karan </td>
          <td className="well span3">
            <strong strong>District Name </strong>:
          </td>
          <td className="well span3">
            Panchkula
          </td>
        </tr>
        <tr>
            <td className="well span3">
                <strong strong>User Role </strong>:
            </td>
            <td className="well span3"> Operator </td>

            <td className="well span3">
                <strong strong>Is Active </strong>:
            </td>
          <td className="well span3">Yes </td>

        </tr>
      </tbody>
    </Table>
        </div>
    </div>
  )
}
