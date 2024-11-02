import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
const randomJobs = [1,0, 4];
const Browse = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <Navbar />
      <div>
        <h1 className="font-bold text-lg">Search Results ({randomJobs.length})</h1>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {randomJobs.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
