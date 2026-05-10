import React from "react";
import Logo from "../../../components/Logo/Logo";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  const handleRegistration = (data) => {
    // console.log(data);
    // console.log(data.photo[0]);
    const profileImg = data.photo[0];
    // console.log(profileImg);

    registerUser(data.email, data.password)
      .then((result) => {
        const formData = new FormData();
        formData.append("image", profileImg);
        const imag_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_KEY}`;

        axios.post(imag_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;

          // create user in the database
          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in the database");
              navigate("/");
            }
          });

          // update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated done");
            })
            .catch((error) => console.log(error));
        });
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="input w-full bg-white"
            name="name"
            id="name"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 font-bold">Name is Required</p>
          )}
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input w-full bg-white"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-bold">Email is Required</p>
          )}

          {/* image input field */}
          <label htmlFor="photo" className="label">
            Photo
          </label>
          <input
            style={{ color: "white" }}
            className="text-white"
            type="file"
            name="photo"
            id="photo"
            {...register("photo", { required: true })}
            placeholder="Your photo"
            className="file-input"
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input w-full bg-white"
            placeholder="Password"
            id="password"
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
