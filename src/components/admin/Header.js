import React from "react";
import { Link, useNavigate  } from 'react-router-dom';
import "./assets/sidebar.css";

const Header = () => {
  const navigate = useNavigate();

  function logOut(e) {
    // console.log(localStorage.getItem("authenticated"));
    localStorage.removeItem("authenticated");
    navigate("/");
    window.location.reload(true);
  }
  var getRole = JSON.parse(localStorage.getItem('token-info'))

  return (
    <>
	<div className="navadmin"> 
    <div className="navadmin-links navadmin"> 
      <Link onClick={logOut} >Logout</Link>
    </div>
  </div>
		<div className="s-layout">
    <div className="s-layout__sidebar">
    <Link className="s-sidebar__trigger" to="">
      <i className="fa fa-bars"></i>
    </Link>

    <nav className="s-sidebar__nav">
    <img src="https://yt3.googleusercontent.com/TQr40bktNFSecWvJBOJYYOgfSJN5IaTWDMuF8qPJo4T_8zfiyHsApu6WLk8vHLbSss1Bz8rouA=s900-c-k-c0x00ffffff-no-rj" alt="chattisgarh Forest Department" className="w-75 m-4" />
      <ul className={getRole.role ==="user" ? 'true' : 'd-none'}>

          <li>
            <Link className="s-sidebar__nav-link" to="./felling" rel="noreferrer">
                <i className="fa fa-tree"></i><em>Tree Felling</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="" rel="noreferrer">
              <i className="fa fa-pen"></i><em>Clarification</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="">
                <i className="fa fa-book"></i><em>Manual</em>
            </Link>
          </li>
      </ul>
      <ul className={getRole.role ==="ro" ? 'true' : 'd-none'}>

          <li>
            <Link className="s-sidebar__nav-link" to="./manageoperator" rel="noreferrer">
                <i className="fa fa-edit"></i><em> Operator Update</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="./managerouser" rel="noreferrer">
              <i className="fa fa-pen"></i><em> Range Officer user Update</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="">
                <i className="fa fa-users"></i><em> Manage User</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="./mainrecord">
                <i className="fa fa-tree"></i><em> Tree-Felling Records</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="./clarificationrecords">
                <i className="fa fa-book"></i><em> Clarification Records</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="">
                <i className="fa fa-book"></i><em>  In between Communication</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="">
                <i className="fa fa-book"></i><em> CF-DFO Communication</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="">
                <i className="fa fa-book"></i><em> Report</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="">
                <i className="fa fa-book"></i><em> Request Detail</em>
            </Link>
          </li>
      </ul>
    </nav>
  </div>
  </div>
    </>
  );
};

export default Header;