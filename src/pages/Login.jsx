/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserContext";
import Navbar from "../components/shared/Navbar";

const Login = () => {
    const { handleFetchMe } = useUserContext();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        setIsLoading(true);
        // password: A@1abcde

        // posting
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`, 
                data,
                {
                    withCredentials: true,
                }
            );
             Swal.fire({
    title: 'Login Successful!',
    html: `<p style="font-size:14px; color:#4b5563; margin:0;">${response?.data?.message}</p>`,
    icon: 'success',
    iconColor: '#1d4ed8',
    background: '#f9fafb',
    showConfirmButton: true,
    confirmButtonText: 'Continue',
    confirmButtonColor: '#1d4ed8',
    width: '350px',      
    padding: '1.5rem',  
    timer: 4500,
    timerProgressBar: true,
});
            handleFetchMe();

            reset();
            navigate("/");
            // navigate("/dashboard");
        } catch (error) {
           Swal.fire({
            title: 'Login Failed!',
            html: `<p style="font-size:14px; color:#4b5563;">${error?.response?.data?.message || 'Please check your credentials.'}</p>`,
            icon: 'error',
            iconColor: '#dc2626', 
            background: '#fef2f2',
            showConfirmButton: true,
            confirmButtonText: 'Retry',
            confirmButtonColor: '#dc2626',
             width: '350px',  
    padding: '1.5rem',   
    timer: 4500,
    timerProgressBar: true,
        });
    }
        setIsLoading(false);
    };

    return (
        <>
        <Navbar />
        <Wrapper>
            <div className="container">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="row">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email@example.com"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "A valid email is required",
                                },
                            })}
                        />
                        {errors?.email && (
                            <span className="text-[10px] font-semibold text-red-600 mt-1 pl-1 tracking-wider">
                                {errors?.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type Here"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                            })}
                        />
                        {errors?.password && (
                            <span className="text-[10px] font-semibold text-red-600 mt-1 pl-1 tracking-wider">
                                {errors?.password?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                    </div>
                </form>
                <div className="">
                    <p className="text-center text-[10px] font-semibold opacity-9 mt-3">
                        Don't have an account.
                        <Link className="ml-1 link" to="/register">
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </Wrapper>
       </> 
    );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  /* Soft white → blue gradient background */
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f4f8ff 40%,
    #eaf1ff 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;

  .container {
    width: 100%;
    max-width: 420px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);

    padding: 50px 45px;
    border-radius: 16px;

    box-shadow: 0 20px 40px rgba(36, 123, 247, 0.08);
    border: 1px solid rgba(36, 123, 247, 0.08);

    transition: all 0.3s ease;
  }

  .container:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 60px rgba(36, 123, 247, 0.15);
  }

  h1 {
    margin-top: 20px;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    color: #1e3a8a;
  }

  form {
    margin-top: 30px;
  }

  .row {
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
  }

  .row label {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 6px;
    color: #374151;
  }

  .row input {
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid #dbe3ff;
    font-size: 14px;
    transition: all 0.3s ease;
    background: #ffffff;
  }

  .row input:focus {
    outline: none;
    border-color: #247bf7;
    box-shadow: 0 0 0 3px rgba(36, 123, 247, 0.15);
  }

  .row input::placeholder {
    color: #9ca3af;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    color: white;
    background: linear-gradient(to right, #247bf7, #1d4ed8);
    transition: all 0.3s ease;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(36, 123, 247, 0.35);
  }

  button:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    box-shadow: none;
  }

  p {
    margin-top: 20px;
    font-size: 13px;
    text-align: center;
    color: #6b7280;
  }

  p .link {
    color: #247bf7;
    font-weight: 600;
    margin-left: 6px;
  }

  p .link:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    .container {
      padding: 40px 25px;
    }
  }
`;

export default Login;
