import { FormikConfig, FormikValues } from "formik";
import { useState } from "react";
import React from "react";
interface props extends FormikConfig<FormikValues>{
    children:React.ReactNode;

}
const MultiStep=({children,initialValues,onSubmit}:props)=>{
    const{}
    return(
        <div>

        </div>
    )
}
export default MultiStep; 