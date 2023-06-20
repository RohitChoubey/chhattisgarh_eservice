import React, { useState } from 'react'
import Navnew from './Navnew.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(true);
    const [navbarGisOpen, setNavbarGisOpen] = useState(false);
    if(navbarGisOpen==true){
        console.log('d');
        // setNavbarOpen(false);
    }
    return (
    <div>
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="m-auto nav-header">
                <div className="nav-title">
                    {/* <Link to="/" style={{color:"#fff !important"}}> */}
                        Forest Department
                    {/* </Link> */}
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className="mx-md-auto nav-links">
                <Link to ="/dashboard"   onClick={() => setNavbarOpen(false)} className={`menu-nav ${navbarOpen ? 'true' : 'd-none'}`}>Dashboard</Link>
                <Link to ="/gisindex" rel="noreferrer" onClick={() => setNavbarGisOpen(true)}>GIS Based Application Summary</Link>
                <Link to ="/reportro" rel="noreferrer">RO Inspection Reports</Link>
                <Link to ="" rel="noreferrer"  className={`menu-nav ${navbarOpen ? 'true' : 'd-none'}`}>Login</Link>
            </div>
        </div>
    </div>
  )
}
