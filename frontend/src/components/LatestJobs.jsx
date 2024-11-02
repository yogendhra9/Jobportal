import React from "react";
import LatestJobCards from "./LatestJobCards";
const availableJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const LatestJobs = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-3xl font-bold  ">
        <span className="text-[#1d2795]">Top roles</span> waiting for you
      </h1>
      <div className="grid grid-cols-3  gap-y-5 gap-x-3 my-5 ">
        {availableJobs.slice(0,6).map((index) => (
          <LatestJobCards />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
