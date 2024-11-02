import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
const category = [
  "Frontend Developer",
  "Backend Developer",
  "Devops Engineer",
  "Data Scientist",
  "Graphic Desginer",
  "System Design Engineer",
];
const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-16 ">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className=" flex justify-around sm:basis-1 md:basis-1/2 lg-basis-1/3">
              <Button className="rounded-full">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
