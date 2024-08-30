import { strict } from "assert";
import { Field } from "formik";
import React from "react";


export interface FormInputProps
extends React.InputHTMLAttributes<HTMLInputElement>{
label?:string,
}

export default function FormInput({label,id,...rest}:FormInputProps){
    return(
    <div className="flex flex-col">
{<label htmlFor={id} className="mb-2 text-base color-gray-900">{label}</label>
}

<Field {...rest} id={id} className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
/>


    </div>)
}