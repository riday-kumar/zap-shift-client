import React from "react";
import Logo from "../../../components/Logo/Logo";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogIn = (data) => {
    console.log(data);
  };
  return (
    <div className="w-[90%] lg:w-[70%] relative">
      <div className="absolute -top-16 lg:-top-[70%] lg:-left-12">
        <Logo></Logo>
      </div>
      <div className="text-center max-md:mt-16">
        <h2 className="uppercase font-extrabold text-2xl text-center">
          Welcome Back
        </h2>
        <p>Login With ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleLogIn)}>
        <fieldset className="fieldset w-full">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full bg-white"
            placeholder="Email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                message: "Invalid Email Address",
              },
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-bold">Email is Required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full bg-white"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
                message:
                  "Password must be at least 6 characters and include uppercase, lowercase, number, and special character",
              },
              minLength: 6,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 font-bold">Password is required</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 font-bold">
              Password must be at least 6 characters and include uppercase,
              lowercase, number, and special character
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 font-bold">
              Password should be minimum 6 character
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-success mt-4">Login</button>
        </fieldset>
      </form>
      <p className="text-center">
        Not Registered?{" "}
        <a href="register" className="font-bold text-blue-600">
          Create an account
        </a>
      </p>
    </div>
  );
};

export default Login;
