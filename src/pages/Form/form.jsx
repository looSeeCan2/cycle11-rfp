import React, {useState} from 'react';
import FormInput from '../../components/FormInput/formInput';
import "./form.css";
import { Link } from "react-router-dom";

export const Form = () => {
const [returnedData, setReturnedData] = useState("");
// console.log(returnedData);

const [employee, setEmployee] = useState({
        fullname: "",
        email: "",
        birthday:"",
        password:"",
        confirmPassword:"",
        sso:"",
    })

    // console.log(values);

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
        },

        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "D.O.B" ,
            errorMessage: "Your D.O.B is required for authentication purposes.",
            label: "D.O.B",
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

        {
            id: 6,
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm Password",
			errorMessage: "Passwords do not match",
			label: "Confirm Password",
			pattern: employee.password, /// we want the same password which is now stored in the values use state
			required: true,
        }
    ];

    const onChange = (e) => {
        // console.log(e);
        const {name, value} = e.target
        setEmployee({...employee, [e.target.name]: e.target.value});
        // console.log(employee)

        if(name === "sso") { /// if the input that we are in === sso, 
			setEmployee(prevState => ({
				...prevState,
				[name]: parseInt(value)/// convert the value that is entered into a number
			}));
			return; /// return early
		}
		setEmployee(prevState => ({ /// if not basically just keep the value. 
			...prevState,
			[name]: value
		}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit");

        console.log(employee);
        const newData = await fetch("/create", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                ...employee
                // name: employee.fullname
            })
        })
        .then(res => res.json())
        console.log("newData:", newData);
        // console.log(newData.fullname);
        setReturnedData(newData);
        console.table(returnedData); ///TODO: Idk why this is one step behind when it logs in the console. the last entry does not show up

        ///TODO: 
        // alert("test"); /// I could not get this to work in the dbOperation.js > catch. IDK why.
    
    }

    return (
        <div className='app'>
            <div className='form'>
            <div><Link to="/"><button>Back</button></Link></div>
                <form className="" onSubmit={handleSubmit}>
                    <div className='imgcontainer'></div>
                    <h1 className='register'>Register</h1>
                    {inputs.map(input => (
                        <FormInput key={input.id} {...input} onChange={onChange} />
                        
                        ))}
                    <button className='formInputButton'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;