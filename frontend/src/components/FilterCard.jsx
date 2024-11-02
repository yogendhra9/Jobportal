import { RadioGroup } from "@radix-ui/react-radio-group";
import React from "react";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "@radix-ui/react-label";

const filterData = [
  {
    filterType: "Location",
    array: ["Chennai", "Banglore", "Delhi", "Mumbai", "Pune"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Dev",
      "Backend Dev",
      "DevOps Engineer",
    ],
  },
  {
    filterType: "Job type",
    array: ["Full Time", "Part Time", "Intern", "Remote"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full bg-white mr-5">
      <h1 className="font-bold text-md my-5">Filter Jobs</h1>
      <hr className="mt-2" />

      <RadioGroup>
        {filterData.map((item, index) => (
          <div>
            <h1 className="text-gray-500 my-2 ">{item.filterType}</h1>
            {item.array.map((data, index) => (
              <div className="text-[1rem] flex items-center gap-2">
                <RadioGroupItem value={data} />
                <Label className="pl-2">
                    {data}
                </Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
