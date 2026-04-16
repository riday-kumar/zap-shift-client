import React from "react";
import Logo from "../../../components/Logo/Logo";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-[90%] lg:w-[70%]">
      <div className="flex justify-center pb-5">
        <Logo></Logo>
      </div>
      <div className="text-center font-bold">
        <p>Signup With ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset w-full">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full bg-white"
            placeholder="Email"
            {...register("email", {
              required: true,
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
          <button type="submit" className="btn btn-success mt-4 font-bold">
            Sign Up
          </button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
