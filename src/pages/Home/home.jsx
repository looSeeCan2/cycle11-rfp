import React from 'react';
import {Link} from "react-router-dom"
import "./home.css";
import FormInput from '../../components/FormInput/formInput';
import Form from '../Form/form';
import { useState } from 'react';

const Home = () => {
    
    const [employee, setEmployee] = useState({
        sso: "",
        email: "",
        password:"",
    });
    
    console.log(employee);

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
            id: 4,
            name: "email",
            type: "email",
            placeholder: "Email",
            // pattern: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/" ,
            errorMessage: "Please Enter a valid Email address!",
            label: "Email",
            required: true,
        },

        {
            id: 5,
            name: "password" ,
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },

    ];
    console.log(inputs);
    

    
    return (

        <div className='home'>
            <div>
                {/* <Link to="somethingElse">
                    <button>Something Else</button>
                </Link> */}
                <Link to="anotherPage">
                    <button>Another Page</button>
                </Link>
                <Link to="aboutYou">
                    <button>About GE</button>
                </Link>

            </div>
            <div>
                <h1>Sign In To The Cubicle</h1>
                <h4>You need to <Link to= "register"><button>register</button></Link> before you can sign in.</h4>
            </div>
            <div>
                <form>

                    {inputs.map((item) => (
                        <FormInput />
                        ))}
                    {/* <Form /> */}

                </form>
            </div>
        </div>
    );
}

export default Home;
