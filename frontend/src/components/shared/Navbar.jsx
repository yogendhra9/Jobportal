import React from "react";
import { Route, Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2, LogOut } from "lucide-react";
const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div
        className="flex items-center justify-between mx-auto my-5
       max-w-6xl height-16" 
      >
        <div>
          <h1 className="text-3xl font-bold">
            Job<span className="text-[#fb3002]">Hunt</span>
          </h1>
        </div>
        <div className="flex items-center gap-20 ">
          <ul className="flex justify-end font-semibold  gap-8 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex gap-5">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="hover:bg-[#0b0b0ade]">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-96">
                <div className="flex space-y-1  gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Yogendhra</h4>
                    <p className="text-sm text-muted-foreground">
                      About myself
                    </p>
                  </div>
                </div>
                <br />
                <div className=" flex flex-col gap-4 items-start my-2">
                  <div className="flex items-center justify-center gap-3">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex items-center justify-center gap-3 w-">
                    <LogOut />
                    <Button variant="outline" className="mx-1">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
