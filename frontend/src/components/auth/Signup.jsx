import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { Loader } from "lucide-react";
import { setLoading } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  const onSubmit = async (data) => {
    dispatch(setLoading(true));
    console.log("submitted");
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("password", data.password);
    formData.append("role", data.role);
    formData.append("file", file);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}:${value}`);
    // }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
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
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: watch("role"),
    // file: "",
  };

  const changeFileHandler = (e) => {
    setFile({ ...file, file: e.target.files?.[0] });
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-1/2 border border-gray-200 rounded-md p-5 my-10 "
          >
            <h1 className="font-bold text-xl mb-5 ">Signup</h1>
            <div className="my-4">
              <Label>FullName</Label>
              <Input
                type="text"
                placeholder="name"
                {...register("fullName", { required: true })}
              />

              {errors.fullName && (
                <span className="text-red-500 px-[12px]">
                  This field is required
                </span>
              )}
            </div>
            <div className="my-4">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <span className="text-red-500 px-[12px]">
                  This field is required
                </span>
              )}
            </div>
            <div className="my-4">
              <Label>Phone number</Label>
              <Input
                type="text"
                placeholder="phone number"
                {...register("phoneNumber", { required: true })}
              />

              {errors.phoneNumber && (
                <span className="text-red-500 px-[12px]">
                  This field is required
                </span>
              )}
            </div>
            <div className="my-4">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />

              {errors.password && (
                <span className="text-red-500 px-[12px]">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex my-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    value="student"
                    {...register("role")}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="option-one">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    value="recruiter"
                    {...register("role")}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="option-two">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                onChange={changeFileHandler}
              />
            </div>
            {loading ? (
              <Button className="w-full my-4">
                <Loader className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </Button>
            ) : (
              <div className="flex items-center justify-center">
                <Button className="w-full my-5" type="submit">
                  Submit
                </Button>
              </div>
            )}
            <span className="text-sm blue-700">
              Already have an account?{" "}
              <Link className="text-blue-700" to="/login">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
