import styled from "styled-components";
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React from "react";
const Container = styled.div`
    height: 625px;
    background-color:   #141414;;
    padding-top: 150px;
    border: 0.1px solid black;
    color : white !important;
    input {
        background-color : #141414;
        border-radius : 5px;
        color : white;
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

    .socials > iframe {
        width: 100%;
        max-width: 100%;
        padding-top: 0px;
        margin-bottom: 5px;
        border: 0px;
        height: 50px;
    }

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


    .input-box,
    .login-password {
        margin-bottom: 20px;
    }

    label {
        display: block;
        font-size: 16px;
        line-height: 1.4em;
        margin-bottom: 8px;
    }

    .input-box > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
        box-sizing: border-box;
    }

    input:focus {
        border-color: #000;
    }
    .socials img{
        height : 30px;
        width : 30px;
    }
    .action-bottom {
        margin-top: 27px;
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
        text-align: center;
        margin: 10px 0;
        display: block;
        text-decoration: none;
        transition: color 0.1s, border-color 0.1s;
        font-size: inherit;
        letter-spacing: 1px;
    }

    .action-bottom > span > a {
        color: var(--black);
    }

    .action-bottom > span > a:hover {
        text-decoration: underline;
        cursor: pointer;
        color: red;
        text-decoration: underline;
        background-color: transparent;
        transition: color 0.1s, border-color 0.1s;
    }
`;

export function Register() {
    const [data, setData] = useState({});
    // const [flag, setFlag] = useState(false); //to check if registration was successful
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
         
    };

    const postData = async () => {
        try {
            await axios.post("http://localhost:5000/register", data);
           
            alert("successfully registered");
            navigate("/");
        } catch (e) {
           console.log(e)
        }
    };

    

    return (
        <Container>
            <div className="cont">
                <div className="cont2">
                    <div className="heading">
                        <h2>Register User</h2>
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
                        <div className="input-box">
                           
                            <input
                                placeholder="First Name"
                                required
                                name="first_name"
                                onChange={handleChange}
                                type="text"
                                id="customer_name"
                            />
                        </div>
                        <div className="input-box">
                            
                            <input
                                required
                                placeholder="Last name"
                                name="last_name"
                                onChange={handleChange}
                                type="text"
                                id="customer_lname"
                            />
                        </div>
                        <div className="input-box">
                           
                            <input
                            placeholder="Email"
                                required
                                name="email"
                                onChange={handleChange}
                                type="email"
                                id="customer_email"
                            />
                        </div>
                        <div className="input-box">
                           
                            <input
                                placeholder="Password"
                                required
                                name="password"
                                onChange={handleChange}
                                type="password"
                                id="customer_password"
                            />
                        </div>
                        <div className="action-bottom">
                            <p>
                                <input type="submit" value="Create" />
                            </p>
                            <span >
                                 Already have an account ?&nbsp;
                                <Link to="/login">
                                   Login
                                </Link>
                                
                            </span>
                        </div>
                    </Form>
                    
                </div>
            </div>
        </Container>
    );
}