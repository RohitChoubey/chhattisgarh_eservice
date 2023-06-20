import React from 'react'
import '../Login.css';
import { useFormInputValidation } from "react-form-input-validation";

export default function ForgetPassword() {
    const [fields, errors, form] = useFormInputValidation({
        email_address: "",
    }, {
        email_address: "required|email"
    });

    // useEffect(() => {
    //   if (form.isValidForm) {
    //     // console.log(fields, errors, form);
    //     // Perform api call here
    //     alert('f');
    //   }
    // }, [])
    const onSubmit = async (event) => {
        const isValid = await form.validate(event);
        if (isValid) {
        // console.log(fields, errors);
        // Perform api call here
        //alert(fields.email_address);
        }
    }
  


    return (
        <div className="Auth-form-container">
            <form className="Auth-form" noValidate autoComplete="off"  onSubmit={onSubmit} method="post">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Forgot Password</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input type="email" 
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
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">  Submit </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
