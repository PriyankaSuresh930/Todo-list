import React, { useState } from 'react';
import loginImage from '../../images/undraw_secure_login_pdn4.svg'
import { useNavigate } from 'react-router-dom';
import { moduleFormData } from '../../utilis/FormData';
import Title from '../baseComponents/Title';
import FormField from '../baseComponents/FormField';
import { emailValidator } from '../baseComponents/Common';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginModule = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [formError, setFormError] = useState({});
    const {email, password} = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formData))
        if (Object.keys(validate(formData)).length === 0) {
            if (email !== 'admin123@gmail.com' || password !== 'admin!123') {
                toast.error('Invalid email or password.');
            } else {
                localStorage.setItem('auth', true);
                navigate("/");
                toast.success('Successfully LoggedIn!')
            }
          
        }
    }

    const validate = (values) => {
        const errors = {};
        const {email, password} = values;
        if (!email) {
            errors.email = "Email is required."
        } else if (!emailValidator(email)) {
            errors.email = "Invalid Email."
        }
        if (!password) {
            errors.password = "Password is required."
        }
        return errors;
    }

  return (
    <div className="login-container vh-100">
        <div className="container">
            <div className="row justify-content-center vh-100 align-items-center">
                <div className="col-sm-12 col-xl-10 p-3 py-lg-0">
                    <div className="row mx-0 align-items-center my-sm-5 shadow-lg rounded box bg-white auth-wrapper py-lg-4 px-lg-5">
                        <div className="col-lg-6 d-none d-lg-block">
                            <img src={loginImage} width="400px" height="400px" alt='loginSVG' />
                        </div>
                        <div className="col-12 col-lg-6  p-4 p-md-3 p-lg-5">
                            <div className="p-md-5 p-lg-0">
                                <Title
                                    data={moduleFormData}
                                />
                                <form  onSubmit={handleSubmit}>
                                    <FormField
                                        schema={moduleFormData}
                                        setFormData={{ formData, setFormData }}
                                        setFormError={{ formError, setFormError }}
                                        template={moduleFormData.moduleForm}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginModule;