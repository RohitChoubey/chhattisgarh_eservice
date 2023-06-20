import React from 'react'
import '../Login.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default function SelfLogin() 
{
    const { register,  handleSubmit, formState: { errors }, trigger, } = useForm();
    const onSubmit = (data) => {
        // Perform api call here
       // console.log(data.phone);
    };

  return (
    <div>
       <div className="Auth-form-container">
            <form className="Auth-form myForm w-25" method="post" noValidate autoComplete="off"  onSubmit={handleSubmit(onSubmit)}>
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Two Factor Authentication</h3>
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
                <div className="form-group">
                    <label>Year</label>
                    <input type="number" placeholder="Enter Your Birth Year" className={`form-control mt-1 ${errors.phone && "invalid"}`}
                        {...register("year", { required: "Birth Year is Required",})}
                        onKeyUp={() => {
                        trigger("year");
                    }}
                    />
                    <label className="error">
                        {errors.year && (<small className="text-danger">{errors.year.message}</small> )}
                    </label>
                </div>

 
                <div className="d-grid gap-2 mt-2">
                    {/* <button type="submit" className="btn btn-primary"> Authenticate </button>
                    <button type="submit" className="btn btn-primary"> Register</button> */}
                    <Container>
                        <Row>
                            <Col xs={4}> <button type="submit" className="btn btn-primary"> Authenticate </button></Col> 
                            <Col xs={4}>  <Link to="/Registration" className="btn btn-primary"> Register</Link></Col> 
                        </Row>
                        <div>For any queries/ issues related to self login, please call 0172-6619061</div>
                    </Container>
                </div>
                </div>
            </form>
       </div>
    </div>
  )
}
