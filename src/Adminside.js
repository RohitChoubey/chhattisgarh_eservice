import React from 'react'
import AdminHome from './components/admin/AdminHome';
import { Route, Routes } from 'react-router-dom';
import Header from './components/admin/Header';
import Felling  from './components/admin/user/Felling';
import Mainrecord from './components/admin/sdo/Mainrecord';
import Manageoperator from './components/admin/sdo/Manageoperator';
import Managerouser from './components/admin/sdo/Managerouser';
import Viewuser from './components/admin/sdo/Viewuser';
import Updateuser from './components/admin/sdo/Updateuser';
import Clarificationrecords from './components/admin/sdo/Clarificationrecords';
import Updatetreefallingrecord from './components/admin/sdo/Updatetreefallingrecord';
import Updateclar from './components/admin/sdo/Updateclar';
import InspectionReport from './components/admin/sdo/InspectionReport';
import ApprovedRejectedApplications from './components/admin/sdo/ApprovedRejectedApplications';


export default function Adminside() {
  var getRole = JSON.parse(localStorage.getItem('token-info'))
  console.log(getRole.role);
  return (
    <div>
      <Header />
      {(getRole.role==='user' )?
        <div className='container-full-home'>
          <Routes>
            <Route exact path="/" element={<AdminHome />} />
            <Route exact path='/felling' element={<Felling />} />
          </Routes>
        </div>
        :
        <Routes>
          <>
            <Route exact path='/mainrecord' element={<Mainrecord />} />
            <Route exact path='/manageoperator' element={<Manageoperator />} />
            <Route exact path='/managerouser' element={<Managerouser />} />
            <Route exact path='/viewuser' element={<Viewuser/>} />
            <Route exact path='/updateuser' element={<Updateuser/>} />
            <Route exact path='/Clarificationrecords' element={<Clarificationrecords/>} />
            <Route exact path='/updatetreefallingrecord/:id' element={<Updatetreefallingrecord/>} />
            <Route exact path='/updateclar' element={<Updateclar />} />
            <Route exact path='/InspectionReport' element={<InspectionReport />} />
            <Route exact path='/ApprovedRejectedApplications' element={<ApprovedRejectedApplications />} />
          </>
        </Routes>
      }
    </div>
  )
}