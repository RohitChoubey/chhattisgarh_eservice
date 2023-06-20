import React from 'react'
import { useForm } from "react-hook-form";


export default function Registration() {
    const { register,  handleSubmit, formState: { errors }, trigger, } = useForm();
    const onSubmit = (data) => {
        // Perform api call here
       // console.log(data.phone);
    };
  return (
    <>
        {/* <div className="container mt-lg-5">
            <div className="row">
                <div className="span12"> */}
                    {/* <div className="" id="loginModal"> */}
                        {/* <div className="modal-header"> */}
                            {/* <h3 class="mt-lg-5 "><a href="/eservices"><img src="https://164.100.137.227/eservices/img/forestdeptlogo.jpg" width="150"/></a> Welcome to Forest Department</h3> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div>
            </div>
        </div> */}
    
            
           
                <div className="Auth-form-container">
                <img src="https://yt3.googleusercontent.com/TQr40bktNFSecWvJBOJYYOgfSJN5IaTWDMuF8qPJo4T_8zfiyHsApu6WLk8vHLbSss1Bz8rouA=s900-c-k-c0x00ffffff-no-rj"  rel="noreferrer" width="250" className='me-xl-5'/>
                    <form className="Auth-form myForm w-25" method="post" noValidate autoComplete="off"  onSubmit={handleSubmit(onSubmit)}>
                        <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Registration :: Step 1 of 2 (Generate OTP)</h3>
                        <div className="form-group mt-3">
                            <label>Mobile Number <span className='span'>*</span></label>
                            <input type="number" placeholder="Enter Mobile Number" className={`form-control mt-1 ${errors.phone && "invalid"}`}
                                {...register("phone", { required: "Phone is Required",
                                    pattern: {
                                    value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                    message: "Invalid phone no",
                                    },
                                    min: {
                                        value: 10,
                                        message: "Minimum Required age is 10",
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger("phone");
                                }}
                            />
                            <label className="error">
                                {errors.phone && (<small className="text-danger">{errors.phone.message}</small> )}
                            </label>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <button type="submit" className="btn btn-primary"> Send </button>
                        </div>
                        </div>
                    </form>
                </div>
         
      
       
    </>
  )
}
