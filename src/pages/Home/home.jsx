import React from 'react';
import {Link, useNavigate} from "react-router-dom"
// import "./home.css";
import "../Form/form.css";
import FormInput from '../../components/FormInput/formInput';
import Form from '../Form/form';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        sso: "",
        email: "",
        password:"",
    });

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
            name: "email",
            type: "email",
            placeholder: "Email",
            // pattern: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/" ,
            errorMessage: "Please Enter a valid Email address!",
            label: "Email",
            required: true,
        },

        {
            id: 3,
            name: "password" ,
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },

    ];
    // console.log(inputs);

    const onChange = (e) => {
        // console.log(e)
        setEmployee({...employee, [e.target.name]: e.target.value});

    }
    console.log(employee);

    const handleSubmit = async(e) => {
        console.log("handleSubmit")
        e.preventDefault();
        /// I need to compare the three values from the input/form to the values in the database, so I need to grab the database values
        const getData = await fetch("/api", {
            method: "Post" ,
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
            } ,
            body: JSON.stringify({
                sso: employee.sso,
            })
        })
        .then(res => res.json())

        for(let key in getData) {/// I couldn't figure out how to format the birth in this object, so I had to edit it here. 
            // console.log(key, getData[key].birth)
            if(getData[key].birth) getData[key].birth = getData[key].birth.slice(0, 10)
            
        }
        console.log(getData);

        if (getData.length !== 0) { /// if the sql query comes back with an object
            console.log(true);
            if(employee.sso === getData[0].sso.toString() && employee.email === getData[0].email && employee.password === getData[0].pwd) {
                console.table(employee);
                console.table(getData[0]);
                console.log("authentication is good");
                navigate("calendar");
                // <Link to="anotherPage"></Link>
            }else {
                console.table(employee);
                console.table(getData[0]);
                alert("Your login credentials do not match our database");
                
            }
        } else { /// the query comes back empty/undefined
            console.table(employee);
            console.table(getData[0]);
            alert("Your login credentials do not match our database");
        }
    
    }

    return (
        <div className=''>

                {/* <Link to="somethingElse">
                    <button>Something Else</button>
                </Link> */}
                {/* <Link to="">
                    <button className=''></button>
                </Link> */}
                <Link to="aboutYou">
                    <button className=''>About GE</button>
                </Link>
            
            <div>
                <h1>The Cubicle</h1>
                <h4>You need to <Link to= "register"><button>register</button></Link> before you can sign in.</h4>
            </div>
            
            <div className='form' style={{}}>
                <form className="" onSubmit={handleSubmit}>
                    <div className='imgcontainer'></div>
                    {inputs.map(input => (
                        <FormInput key={input.id} {...input} onChange={onChange} />
                        
                        ))}
                    <button className='formInputButton'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
