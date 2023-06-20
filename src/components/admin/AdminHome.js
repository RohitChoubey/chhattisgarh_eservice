import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./assets/header.css"

export default function AdminHome() {
  return (
<>
        <main className="s-layout__content">
            <div id="cards_landscape_wrap-2">
                <div className  ="container">
                    <div className  ="row">
                        <div className  ="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        {/* <Link to ="" rel="noreferrer"  className={`menu-nav ${navbarOpen ? 'true' : 'd-none'}`}>Login</Link>clear */}
                            <Link to="./felling" rel="noreferrer">
                                <div className  ="card-flyer">
                                    <div className  ="text-box">
                                        <div className  ="image-box">
                                            <img src="https://png.pngtree.com/png-clipart/20211014/ourmid/pngtree-fallen-tree-png-image_3983422.png" alt="" />
                                        </div>
                                        <div className  ="text-container">                                    
                                            <h6>Tree Felling</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className  ="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <Link to="">
                                <div className  ="card-flyer">
                                    <div className  ="text-box">
                                        <div className  ="image-box">
                                            <img src="https://164.100.137.227/eservices/images/clarification.png" alt="" />
                                        </div>

                                        <div className  ="text-container">
                                            <h6>Clarification</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className  ="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <Link to="">
                                <div className  ="card-flyer">
                                    <div className  ="text-box">
                                        <div className  ="image-box">
                                            <img src="https://164.100.137.227/eservices/images/forest_usermanual.png" alt="" />
                                        </div>
                                        <div className  ="text-container">
                                            <h6>Manual</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>    
    </>    
  )
}
