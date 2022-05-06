import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {  useState } from "react";
import React from "react";
const Container = styled.div`
    height: 505px;
    background-color: #141414;
    padding-top: 140px;
    padding-bottom: 30px;
    border: 0.1px solid black;
    color : white !important;
    
    
    input {
        background-color : #141414;
        border-radius : 5px;
        color : white
    }
    a {
        color: #ea2127 !important;
        font-weight: 700;
        text-decoration: underline;
    }

    .cont {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 40px;
        padding-right: 40px;
    }

    .cont2 {
        margin-left: auto;
        margin-right: auto;
        width: 420px;
        max-width: 100%;
        margin-top: 30px;
    }

    .heading {
        margin: 10px 0px 40px;
    }

    .heading > h2 {
        text-align: center;
        margin: 0 0 10px;
        font-weight: 600;
        font-size: 30px;
        line-height: 1.2em;
    }
`;

const Form = styled.form`
     
    .socials {
        display: flex;
        justify-content : center;
        margin-bottom : 20px;
    }
    
    .socials div{
        
        margin : 5px;
        
    }
    .socials img{
        height : 30px;
        width : 30px;
        border-radius : 50%;
        margin: auto;
         display: block;
       
    }

    .login-email,
    .login-password {
        margin-bottom: 20px;
        height : 52px;
       
        
    }
   
    .login-email {
        width : 452px
    }
    label {
        display: block;
        font-size: 16px;
        line-height: 1.4em;
        margin-bottom: 8px;
    }

    .login-email > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
        box-sizing: border-box;
    }

    .text-over-input {
        position: relative;
        display: block;
    }
    .text-over-input > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
    }

    .forgot-password {
        position: absolute;
        top: 50%;
        right: 20px;
        line-height: 1em;
        margin-top: -0.5em;
        margin-left : -20px;
        font-size: 12.8px;
        transition: color 0.1s, border-color 0.1s;
        text-decoration: none;
        
    }

    .forgot-password:hover {
        cursor: pointer;
        color: red;
        text-decoration: underline;
        background-color: transparent;
    }

    input:focus {
        border-color: #000;
    }

    .action-bottom {
        margin-top: 27px;
        width : 452px;
        height : 52px
    }

    .action-bottom > p {
        margin-bottom: 1em;
        font-weight: 500;
    
        margin-block-start: 1em;
        margin-block-end: 1em;
    }

    .action-bottom > p > input {
        font-weight: 700;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 5px;
        background: red;
        border: 1px solid red;
        font-size: 16px;
        line-height: 1em;
        height: auto;
        margin: 0;
        padding: 11px 25px;
        vertical-align: middle;
        text-align: center;
        color: white;
        transition: background-color 0.1s, color 0.1s, border-color 0.1s,
            opacity 0.1s;
        display: inline-block;
    }

    .action-bottom > span {
        margin: 10px 0;
        display: block;
        transition: color 0.1s, border-color 0.1s;
    }
`;

const Forgot = styled.div`
 margin-top : 110px;
    background-color:  #141414 ;
    padding-top: 70px;
    padding-bottom: 150px;
    color : white !important ;

    input {
        color : white;
    }
    .container {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 40px;
        padding-right: 40px;
    }

    .small-form {
        margin-left: auto;
        margin-right: auto;
        width: 420px;
        max-width: 100%;
    }

    .title {
        margin: 10px 0 40px;
    }

    .title > h2 {
        text-align: center;
        margin: 0 0 20px;
        font-weight: 500;
        font-size: 30px;
        line-height: 1.2em;
    }

    .title > p {
        margin: 10px 0;
        text-align: center;
    }

    .recover-email {
        margin-bottom: 20px;

        label {
            display: block;
            font-size: 16px;
            line-height: 1.4em;
            margin-bottom: 8px;
        }

        input {
            width: 100%;
            font-size: 16px;
            line-height: 16px;
            background: #141414;
            color : white;
            border: 1px solid #d8d8d8;
            padding: 11px 15px;
            vertical-align: middle;
            max-width: 100%;
            border-radius : 5px;
        }
    }

    .action-bottom {
        margin-top: 27px;

        p {
            text-align: center !important;
            margin-bottom: 1em;
        }
        button {
            cursor: pointer;
            border-radius: 5px;
            background: red;
            border: 1px solid red;
            color: #fff;
            font-size: 16px;
            font-family: inherit;
            font-weight: 500;
            font-style: inherit;
            line-height: 1em;
            height: auto;
            margin: 0;
            text-decoration: none !important;
            padding: 11px 25px;
            vertical-align: middle;
            text-align: center;
            display: inline-block;
            transition: background-color 0.1s, color 0.1s, border-color 0.1s,
                opacity 0.1s;
        }

        span {
            display: block;
            margin: 10px 0;
            text-align: center;
        }
        span:hover {
            color: red;
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

export function Login() {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useNavigate();
    const [flag, setFlag] = useState(false);
    const [forgotPass, setForgotPass] = useState("first");
   
    
    
    const handleSubmit = async(e) => {
        
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.token){
            // Save the auth token and redirect
            localStorage.setItem('token', json.token); 
            alert("successfully login");
            history("/");
            
        }
        else{
            alert("invalid details")
        }
    };
    

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        
    }

    

    return forgotPass === "first" ? (
        <Container>
            <div className="cont">
                <div className="cont2">
                    <div className="heading">
                        <h2>Login</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div className="socials">
                            <div><a href="http://localhost:5000/auth/google">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                                </a></div>
                            <div><a href="http://localhost:5000/auth/facebook">
                           <img src="https://i.pinimg.com/originals/91/4d/e6/914de662ac57138cda4a401ff37b444e.jpg" alt="" />
                                </a></div>   
                        
                                
                           
                        </div>
                        <div className="login-email">
                            
                            <input
                                name = "email"
                                placeholder="Email"
                                onChange={onChange}
                                type="email"
                                id="customer_email"
                            />
                        </div>
                        <div className="login-password">
                            
                            <div className="text-over-input">
                                <input
                                    name ="password"
                                    placeholder="Password"
                                    onChange={onChange}
                                    type="password"
                                    id="customer_password"
                                />
                                <div
                                    onClick={() => setForgotPass("second")}
                                    className="forgot-password"
                                >
                                    Forgot your password?
                                </div>
                            </div>
                        </div>
                        <div className="action-bottom">
                            <p>
                                <input
                                    type="submit"
                                    value="Sign In"
                                    className="btn"
                                />
                            </p>
                            <div style={{textAlign :"center"}}>
                            New customer?
                            <Link to="/account/register">
                            <span style={{marginLeft:"125px"}}>Create an account</span>{" "}
                            </Link>
                            </div>
                        </div>
                    </Form>
                    {flag ? <Navigate replace to="/" /> : ""}
                </div>
            </div>
        </Container>
    ) : forgotPass === "second" ? (
        <Forgot>
            <div className="container">
                <div className="small-form">
                    <div className="title">
                        <h2>Reset your password</h2>
                        <p>We will send you an email to reset your password.</p>
                    </div>
                    <div className="recover-email">
                        <label htmlFor="recover-email">Email</label>
                        <input type="email" id="recover-email" />
                    </div>
                    <div className="action-bottom">
                        <p>
                            <button onClick={() => setForgotPass("third")}>
                                Submit
                            </button>
                        </p>
                        <span
                            onClick={() => {
                                setForgotPass("first");
                            }}
                        >
                            Cancel
                        </span>
                    </div>
                </div>
            </div>
        </Forgot>
    ) : (
        <Forgot>
            <div className="container">
                <div className="small-form">
                    <div className="title">
                        <h2>Reset your password</h2>
                        <p>
                            We've sent you an email with a link to update your
                            password.
                        </p>
                    </div>

                    <div className="action-bottom">
                        <p>
                            <button onClick={() => setForgotPass("first")}>
                                Sign in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </Forgot>
    );
}