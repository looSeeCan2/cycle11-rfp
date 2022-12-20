import React, {useState} from 'react';
import FormInput from '../../components/FormInput/formInput';
import "./form.css";
import { Link } from "react-router-dom";


const Form = () => {
    
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        birthDay:"",
        password:"",
        confirmPassword:"",
        sso:"",
    });

    console.log(values);

    const inputs = [
        {
            id: 1,
            name: "sso",
            type: "text",
            placeholder: "SSO",
            errorMessage: "SSO number is incorrect",
            label: "SSO",
            pattern: '^[0-9]+$', /// only numbers
            required: true,
        },
        
        {
            id: 2,
            name: "fullname",
            type: "text",
            placeholder: "Full Name",
            errorMessage: "Full name should be 3-16 characters and should not include any special characters!",
            label: "Full Name",
            pattern: '^[A-za-z0-9 ]{3,16}$', 
            required: true,
        }
    ];

    // console.log(...inputs)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit")
    }

    return (
        <div className='app'>
            <div>
                <div><Link to="/"><button>Back</button></Link></div>
                <div className='imgcontainer'></div>
                <div>
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className='register'>Register</h1>
                        {/* <FormInput {...inputs[0]} /> */}
                        {/* <FormInput {...inputs[1]} /> */}
                        {inputs.map(input => (
                            <FormInput key={input.id} {...input} />
                            
                            ))}
                        <button className='formInputButton'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
