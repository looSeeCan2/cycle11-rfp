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
    })

    console.log(values);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit")
    }

    return (
        <div>
            <Link to="/"><button>Back</button></Link>
            <div className='app'>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <button className='formInputButton'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
