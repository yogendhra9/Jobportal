import { Badge } from "@/components/ui/badge";

import React from "react";
const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer hover:scale-105 transition-transform transform hover:rotate-1 hover:-translate-y-2 ">
      <div className="">
        <h1 className="font-medium text-lg">Company name</h1>
        <p className="font-sm text-gray-600 my-1">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, optio?
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4 ">
        <Badge
          variant="ghost"
          className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
        >
          Positions
        </Badge>
        <Badge
          variant="ghost"
          className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full"
        >
          Part time
        </Badge>
        <Badge
          variant="ghost"
          className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full"
        >
          Package
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
