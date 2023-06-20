import React from 'react'
import { Link } from 'react-router-dom';
import { useFormInputValidation } from "react-form-input-validation";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



export default function Updateuser() {
    const [fields, errors, form] = useFormInputValidation({ user_name: "", user_role: ""}, {user_name: "required|user_name", user_role: "required|user_role", place_name: "required|place",active_status: "required|active_status"});
    const onSubmit = async (event) => {
        //Prevent page reload
        
        const isValid = await form.validate(event);     
        if (isValid) {
            alert('f');
            // console.log(fields, errors);
            // Perform api call here
        }
    }
  return (
    <div>
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="page-header my-lg-4" style={{marginLeft: "268px"}}>
                    <h2 className="pageheader-title">Tree Felling</h2>
                    <div className="page-breadcrumb">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="./updateuser" className="breadcrumb-link">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="./updateuser" className="breadcrumb-link">Manage Operator</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Update </li>
                        </ol>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="Auth-form-container"  style={{marginLeft: "280px", width: "70%" }}>
            <form className="Auth-form myForm" method="post" noValidate autoComplete="off"  onSubmit={onSubmit}>
            <div className="Auth-form-content">
            <Container>
                <Row>
                    <h3 className="Auth-form-title">Update User</h3>
                    <Col xs={6}>
                        <div className="form-group mt-3">
                            <label>Name <span className='span'>*</span></label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Name"
                                name="user_name"
                                onBlur={form.handleBlurEvent}
                                onChange={form.handleChangeEvent}
                                value={fields.user_name}
                            />
                            <label className="error">
                                {errors.user_name  ? errors.user_name : ""} 
                            </label>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="form-group mt-3">
                            <label>User Role</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Role"
                                name="user_role"
                                onBlur={form.handleBlurEvent}
                                onChange={form.handleChangeEvent}
                                value={fields.user_role}
                            />
                            <label className="error">
                                {errors.user_role ? errors.user_role : ""}
                            </label>
                        </div>  
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={6}>
                        <div className="form-group mt-3">
                            <label>Select Place : <span className="red-text">*</span></label>
                            <select name="place_name" id="place_id" className="form-control" required="required"  onBlur={form.handleBlurEvent} onChange={form.handleChangeEvent}>
                                <option value="">Select Place</option>
                                <option value="Balod">Balod</option>
                                <option value="Baloda">Baloda</option>
                                <option value="Bazar">Bazar</option>
                                <option value="Balrampur">Balrampur</option>
                                <option value="Bastar">Bastar</option>
                                <option value="Bemetara">Bemetara</option>
                                <option value="Bijapur">Bijapur</option>
                                <option value="Bilaspur">Bilaspur</option>
                                <option value="Dantewada">Dantewada</option>
                                <option value="Dhamtari">Dhamtari</option>
                                <option value="Durg">Durg</option>
                                <option value="Gariaband">Gariaband</option>
                                <option value="Janjgir">Janjgir</option>
                                <option value="Champa">Champa</option>
                                <option value="Jashpur">Jashpur</option>
                                <option value="Kabirdham">Kabirdham</option>
                                <option value="Kanker">Kanker</option>
                                <option value="Kondagaon">Kondagaon</option>
                                <option value="Korba">Korba</option>
                                <option value="Koriya">Koriya</option>
                                <option value="Mahasamund">Mahasamund</option>
                                <option value="Mungeli">Mungeli</option>
                                <option value="Narayanpur">Narayanpur</option>
                                <option value="Raigarh">Raigarh</option>
                                <option value="Raipur">Raipur</option>
                                <option value="Sukma">Sukma</option>
                                <option value="Surajpur">Surajpur</option>
                                <option value="Surguja">Surguja</option>
                            </select>
                            <label className="error">
                            {errors.place_name ? errors.place_name : ""}
                            </label>
                        </div>  
                    </Col>
                    <Col xs={6}>
                        <div className="form-group mt-3">
                            <label>Is Active</label>
                            <select name="active_status" id="active_status" className="form-control" required="required"  onBlur={form.handleBlurEvent} onChange={form.handleChangeEvent}>
                                <option value="">Select Active Status</option>
                                <option value="Y">Yes</option>
                                <option value="Balod">No</option>
                            </select>
                            <label className="error">
                                {errors.active_status ? errors.active_status : ""}
                            </label>
                        </div>  
                    </Col>
                    <div className="d-grid gap-2 mt-3">
                    <Col xs={6}>
                        <button type="submit" className="btn btn-primary"> Submit </button> &ensp;
                        <Link to="/" className=' btn btn-outline-primary'>Back</Link>
                    </Col>
                    </div>
                </Row>
            </Container>
            
            </div>
            </form>
        </div>
    </div>
  )
}
