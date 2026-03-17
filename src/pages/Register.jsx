import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const [isPasswordMatched, setIsPasswordMatched] = useState({
        status: true,
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        // password: A@1abcde
        const { username, email, password, confirmPassword, role } = data;

        if (password !== confirmPassword) {
            setIsPasswordMatched({
                status: false,
                message: "Both password not matched.",
            });
            return;
        } else {
            setIsLoading(true);
            const user = { username, email, password };
            if (role) user.role = role; // may be 'recruiter' or 'user'
            console.log("register payload", user, "baseURL", import.meta.env.VITE_API_BASE_URL);
            // posting
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/register`,
                    // note: import.meta.env is used in Vite instead of process.env
                    user,
                    { withCredentials: true }
                );

                Swal.fire({
                    icon: "success",
                    title: "Hurray...",
                    text: response?.data?.message,
                });
                reset();
                navigate("/login");
            } catch (error) {
                console.error('register error', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error?.response?.data || error.message,
                });
            }
        }
        setIsLoading(false);
    };

    // to hide the popup
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsPasswordMatched({ status: true, message: "" });
        }, 2000);

        return () => {
            clearInterval(intervalId); // Clear the interval on component unmount or when dependencies change
        };
    }, [isPasswordMatched.status]);

    return (
        <Wrapper>
            <div className="container">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <h1>Create Account</h1>
                {!isPasswordMatched?.status && (
                    <p className="text-[11px] font-semibold text-center text-red-700 bg-red-100 px-1 py-2 mt-4 tracking-wider">
                        both password not matched
                    </p>
                )}
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="row">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            autoComplete="off"
                            placeholder="Type Here"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Username is required",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Username is too long(max 30char)",
                                },
                                minLength: {
                                    value: 3,
                                    message:
                                        "Username is too short (min 3char)",
                                },
                                pattern: {
                                    value: /^[A-Za-z][A-Za-z0-9_]*$/,
                                    message:
                                        "Username can't start with number and special characters",
                                },
                            })}
                        />
                        {errors?.username && (
                            <span className="text-[10px] font-semibold text-red-600 mt-1 pl-1 tracking-wider">
                                {errors?.username?.message}
                            </span>
                        )}
                    </div>
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
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                    message: "Enter a valid email",
                                },
                            })}
                        />
                        {errors?.email && (
                            <span className="text-[10px] font-semibold text-red-600 mt-1 pl-1 tracking-wider">
                                {errors?.email?.message}
                            </span>
                        )}
                    </div>
                    {/* role selection */}
                    <div className="row">
                        <label htmlFor="role">Register as</label>
                        <select
                            name="role"
                            {...register("role")}
                            className="border p-1 rounded"
                        >
                            <option value="user">Job Seeker</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
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
                                maxLength: {
                                    value: 20,
                                    message: "Password is too long(max 20char)",
                                },
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password is too short (min 8char)",
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/,
                                    message:
                                        "At least one uppercase,one special char and one number",
                                },
                            })}
                        />
                        {errors?.password && (
                            <span className="text-[10px] font-semibold text-red-600 mt-1 pl-1 tracking-wider">
                                {errors?.password?.message}
                            </span>
                        )}
                    </div>
                    <div className="row">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type Here"
                            {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                            })}
                        />
                        {errors?.confirmPassword && (
                            <span className="text-[10px] font-semibold text-red-600 mt-1 pl-1 tracking-wider">
                                {errors?.confirmPassword?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Loading..." : "Register"}
                        </button>
                    </div>
                </form>
                <div className="">
                    <p className="text-center text-[10px] font-semibold opacity-9 mt-3">
                        Already have an account.
                        <Link className="ml-1 link" to="/login">
                            Login now
                        </Link>
                    </p>
                </div>
            </div>
        </Wrapper>
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

export default Register;
