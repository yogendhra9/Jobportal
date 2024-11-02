import React from "react";
import { Button } from "./ui/button";
import { Bookmark, BookmarkPlus, BookmarkMinus } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
const Job = () => {
  return (
    <div className=" p-5 rounded-md shadow-xl bg-white border-gray-300">
      <div className="flex items-center justify-between">
        <p>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-3 my-3">
        <Button variant="outline" size="icon" className="p-2">
          <Avatar>
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-bold">Company name</h1>
          <p>India</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          minima.
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
      <div className="flex gap-3 my-3 items-center ">
        <Button  className=" bg-black opacity-90 hover:bg-slate-900 rounded-md">
          Details
        </Button>
        <Button variant="outline" className="rounded-md bg-purple-200 hover:bg-purple-100">
          Save for later
        </Button>
      </div>
    </div>
  );
};

export default Job;
