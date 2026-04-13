import React from "react";
import Logo from "../../../components/Logo/Logo";

const Login = () => {
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
      <form className="">
        <fieldset className="fieldset w-full">
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full bg-white"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full bg-white"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-success mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
