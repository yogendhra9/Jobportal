import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-center overflow-y-hidden">
      <div className="flex flex-col gap-6">
        <span className=" mx-auto px-4 py-3 rounded-full  bg-gray-200 text-[#fb3002] font-semibold">
          Most popular Job Hunt website
        </span>
        {/* <h1 className="text-4xl font-bold">
          Find your <br /> 
          <span className="text-[#202985] ">Dream Jobs</span>
           here
        </h1> */}
        <h1 className="text-4xl font-bold">
          Landing on our website <br />
          &#8733; <br />
          Getting your <span className="text-[#202985] ">Dream Jobs</span>
        </h1>
        <p>
          Find your next job on our platform. We connect top employers with
          talented individuals.
        </p>
        <div className="flex flex-row justify-around shadow-lg rounded-full pl-1 w-[50%] mx-auto items-center gap-4 mt-4 ">
          <input
            type="
            text"
            placeholder="Search jobs that are curated for you"
            className="  outline-none border-none w-full px-3"
          />
          <Button className="rounded-r-full hover:bg-[#202985]">
            <Search size={24} className="h-5 w-5 " />
          </Button> 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
