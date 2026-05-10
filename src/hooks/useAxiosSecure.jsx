import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // intercept request
    const reqInterceptor = instance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    // interceptor response
    const resInterceptor = instance.interceptors.response.use(
      // this function will handle success
      (response) => {
        return response;
      },
      // this function will handle errors
      (error) => {
        // console.log(error.response.status);

        const statusCode = error.response.status;
        if (statusCode === 401 || statusCode === 403) {
          logOut().then(() => {
            navigate("/login");
          });
        }

        return Promise.reject(error);
      },
    );

    // clean the interceptor
    return () => {
      instance.interceptors.request.eject(reqInterceptor);
      instance.interceptors.response.eject(resInterceptor);
    };
  }, [user, logOut, navigate]);

  return instance;
};

export default useAxiosSecure;
