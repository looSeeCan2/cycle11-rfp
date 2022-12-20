import React, {useState} from 'react';
import FormInput from '../../components/FormInput/formInput';
import "./form.css";
import { Link } from "react-router-dom";


const Form = () => {
    
    const [employee, setEmployee] = useState({
        fullname: "",
        email: "",
        birthDay:"",
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
        }
    ];

    const onChange = (e) => {
        console.log(e);
        // const {name, value} = e.target
        setEmployee({...employee, [e.target.name]: e.target.value});
        // console.log(values)
        // if(name === "sso") { /// if the input that we are in === sso, 
		// 	setEmployee(prevState => ({
		// 		...prevState,
		// 		[name]: parseInt(value)/// convert the value that is entered into a number
		// 	}));
		// 	return; /// return early
		// }
		// setEmployee(prevState => ({ /// if not basically just keep the value. 
		// 	...prevState,
		// 	[name]: value
		// }));
    }

    const fetchData = async() => {
        const getData = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                    sso: employee.sso,
            })
        })
            .then(res => res.json())
            console.log(getData[0]);
    };
                
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
                            <FormInput key={input.id} {...input} onChange={onChange} />
                            
                            ))}
                        <button className='formInputButton'>Submit</button>
                    </form>
                    <button onClick={() => fetchData()}>Get Data</button>
                </div>
            </div>
        </div>
    );
}

export default Form;
