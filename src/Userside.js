import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import SelfLogin from './components/pages/SelfLogin';
import DeptLogin from './components/pages/DeptLogin';
import Gisindex from './components/pages/Gisindex';
import ForgetPassword from './components/pages/ForgetPassword';
import Reportro from './components/pages/Reportro';
import Dashboard from './components/pages/Dashboard';
import Registration from './components/pages/Registration';
import {Route, Routes} from 'react-router-dom';

export default function Userside() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard'  element={<Dashboard />} />
          <Route exact path='/selflogin' element={<SelfLogin />} />
          <Route  path='/DeptLogin' element={<DeptLogin />} />
          <Route exact path='/Gisindex' element={<Gisindex/>} />
          <Route exact path='/ForgetPassword' element={<ForgetPassword />} />
          <Route exact path='/reportro' element={<Reportro />} />
          <Route exact path='/Registration' element={<Registration />} />
        </Routes>
    </div> 
  )
}
