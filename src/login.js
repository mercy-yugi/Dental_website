import { useState } from "react";
import "./App.css";
import home from "./images/home.jpg";
import FormInput from "./components/FormInput";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
  
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    
    <div className="app">
        <div className="hospital">
          <img src={home}/>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="hospitals"></div>
        <h1>Login to account</h1>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link to='/home' >
          <button className="button" type='submit' >Submit</button>
        </Link>
        <p>Don't have an account?<a href="/">Register</a></p>

      </form>
    </div>
  );
};

export default Login;