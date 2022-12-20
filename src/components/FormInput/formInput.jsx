import React, {useState} from "react";
import "../FormInput/formInput.css";

const FormInput = (props) => {

    // console.log(props);
    /// the 
    const {label, errorMessage, onChange, id, ...inputProps } = props; /// destructuring
    
    // console.log(label);
    // console.log(inputProps);

    return (
        <div className="formInput">
            <label>{label}</label>
            <input className="input" {...inputProps} onChange={onChange}/>
            {/* <input className="input" name={props.name} placeholder={props.placeholder} pattern={props.pattern} required={props.required} type={props.type}  /> */}

            {/* <input 
                    className="input" {...inputProps} 
                    onChange={onChange} 
                    onBlur={handleFocus} 
                    onFocus={() => inputProps.name === "conFirmPassWord" && setFocused(true)} 
                    focused={focused.toString()} 
                /> */}
            <span className="span">{errorMessage}</span>    
        </div>
    );
}

export default FormInput;
