import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import Google_Login from "./Google_login";
import { setLoading } from "@/redux/authSlice";
import { Loader } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const userInfo = {
    email: "",
    password: "",
    role: watch("role"),
  };
  // const handleSuccess = () => {
  //   console.log("Google User:", decoded);
  // };

  // const handleError = () => {
  //   console.log("Login Failed");
  // };
  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-1/2 border border-gray-200 rounded-md p-5 my-10 "
          >
            <h1 className="font-bold text-xl mb-5 ">Login</h1>

            <div className="my-4">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              />
              <br />
              {/* {errors.email && (
                <span className="text-red-500 px-[12px]">
                  This field is required
                </span>
              )} */}
            </div>
            <div className="my-4">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <br />
              {/* {errors.email && (
                <span className="text-red-500 px-[12px]">
                  This field is required
                </span>
              )} */}
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex  gap-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    {...register("role")}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="option-one">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    {...register("role")}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="option-two">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            {loading ? (
              <Button className="w-full my-4">
                <Loader className="mr-2 h-4 w-4 animate-spin" /> 
                 Please wait
              </Button>
            ) : (
              <div className="flex items-center justify-center">
                <Button className="w-full my-5" type="submit">
                  Login
                </Button>
              </div>
            )}
            {/* <div className="flex w-1/2">
              <Google_Login />
            </div> */}

            <span className="text-sm blue-700">
              Dont have an account?{" "}
              <Link className="text-blue-700" to="/signup">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
