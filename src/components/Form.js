import React from "react";
import { withFormik } from 'formik';

const Form = (props) => {
    console.log("props.name: " + props.name);
    return (
        <div className="formDiv">
            <h1>Form.js(with Formik!)</h1>
           
        </div>
    );
}
const FormikForm = withFormik({

})(Form);
export default FormikForm;