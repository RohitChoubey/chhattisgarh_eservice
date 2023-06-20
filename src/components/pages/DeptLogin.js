import { useFormInputValidation } from "react-form-input-validation";
import { Link, useNavigate } from 'react-router-dom';
import {encode as base64_encode} from 'base-64';
import React,{ useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import '../Login.css';

export default function DeptLogin() {
  const navigate = useNavigate();
  const [fields, errors, form] = useFormInputValidation({ email_address: "", password: ""}, {email_address: "required|email", password: "required"});
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

  // useEffect(() => {
  //   if (form.isValidForm) {
  //     // console.log(fields, errors, form);
  //     // Perform api call here
  //     alert('f');
  //   }
  // }, [])

  // User Login info
  // const database = [
  //   {
  //     email_address: "rohit@gmail.com",
  //     password: "pass",
  //     role: "user"
  //   },
  //   {
  //     email_address: "rohit1@gmail.com",
  //     password: "pass",
  //     role: "rfo"
  //   },
  //   {
  //     email_address: "rohit2@gmail.com",
  //     password: "pass",
  //     role: "dfo"
  //   }
  // ];


  const onSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    const isValid = await form.validate(event);
    // Find user login info    
    if (isValid) {
      const email = fields.email_address;
      const password = base64_encode(fields.password);
      const data = {email, password};
      await axios
        .post("/userLogin", data).then((response) =>{
          var userData = response.data;
          localStorage.setItem('token-info', JSON.stringify(userData));
          localStorage.setItem("authenticated", true);
          setauthenticated(true);
          if(userData.role === "user"){
            navigate("/");
            window.location.reload(true);
          }else if(userData.role === "ro"){
            navigate("/mainrecord");
            window.location.reload(true);
          }
      })
      .catch((error) =>{
        Swal.fire({
          title: "Error",
          text: "Please Enter Correct Username and Password",
          icon: 'error',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          allowEscapeKey: false
        });
      })      
    }
    else {
      // email_address not found
     console.log('Something went wrong');
    }
  }
  
  return (
    <>
     <div className="Auth-form-container">
      <form className="Auth-form myForm w-25" method="post" noValidate autoComplete="off"  onSubmit={onSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Correlation Assurance</h3>
          <div className="form-group mt-3">
            <label>Email address <span className='span'>*</span></label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email_address"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.email_address}
            />
             <label className="error">
              {errors.email_address  ? errors.email_address : ""} 
            </label>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.password}
            />
             <label className="error">
              {errors.password ? errors.password : ""}
            </label>
          </div>  
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          <Link to='../ForgetPassword'>Forgot password?</Link>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}
