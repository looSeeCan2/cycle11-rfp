import React, {useState} from "react";
import "../FormInput/formInput.css";
import "../../pages/Form/form";

const FormInput = (props) => {

    // console.log(props);
    const {label, errorMessage, onChange, id, ...inputProps } = props; /// destructuring /// in this syntax ...inputProps has all other props
    /// other than the ones listed before it.
    
    // console.log(label);
    // console.log(inputProps);

    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true)
    };
    // console.log("focused:", focused);

    return (
        <div className="formInput">
            <label style={{fontWeight: "bold"}}>{label}</label>
            <input
                className="input" 
                {...inputProps} 
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />
            {/* <input className="input" name={props.name} placeholder={props.placeholder} pattern={props.pattern} required={props.required} type={props.type}  /> */}

            <span className="span">{errorMessage}</span>    
        </div>
    );
}

export default FormInput;
