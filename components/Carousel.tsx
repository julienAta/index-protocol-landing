"use client";
import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
function CarouselDisplay() {
  const imageUrls = [
    "https://prod-image-cdn.tensor.trade/images/slug=83ffcbbf-6c54-420f-bcd8-d1eb5e7d358a/400x400/freeze=false/https%3A%2F%2Fshdw-drive.genesysgo.net%2F9DEPA5HdWF9aWYuwWB6cpnT7exK7Cpw7WvDwx8qe9GqT%2F2893.png",
    "https://prod-image-cdn.tensor.trade/images/slug=83ffcbbf-6c54-420f-bcd8-d1eb5e7d358a/400x400/freeze=false/https%3A%2F%2Fshdw-drive.genesysgo.net%2F9DEPA5HdWF9aWYuwWB6cpnT7exK7Cpw7WvDwx8qe9GqT%2F2841.png",

    "https://prod-image-cdn.tensor.trade/images/slug=83ffcbbf-6c54-420f-bcd8-d1eb5e7d358a/400x400/freeze=false/https%3A%2F%2Fshdw-drive.genesysgo.net%2F9DEPA5HdWF9aWYuwWB6cpnT7exK7Cpw7WvDwx8qe9GqT%2F529.png",
    "https://lh3.googleusercontent.com/4dD8w787HUeKHWhMuU-2HHcjQELTzdYxy0OL7aA-mpugExv-pFpnAFlL52-UcZgKzIUkE4g4bgxwaSWoWA_02I9vntLHLoNMhG0",
    "https://prod-image-cdn.tensor.trade/images/slug=83ffcbbf-6c54-420f-bcd8-d1eb5e7d358a/400x400/freeze=false/https%3A%2F%2Fshdw-drive.genesysgo.net%2F9DEPA5HdWF9aWYuwWB6cpnT7exK7Cpw7WvDwx8qe9GqT%2F6855.png",
    "https://prod-image-cdn.tensor.trade/images/slug=83ffcbbf-6c54-420f-bcd8-d1eb5e7d358a/400x400/freeze=false/https%3A%2F%2Fshdw-drive.genesysgo.net%2F9DEPA5HdWF9aWYuwWB6cpnT7exK7Cpw7WvDwx8qe9GqT%2F7163.png",

    "https://prod-image-cdn.tensor.trade/images/slug=83ffcbbf-6c54-420f-bcd8-d1eb5e7d358a/400x400/freeze=false/https%3A%2F%2Fshdw-drive.genesysgo.net%2F9DEPA5HdWF9aWYuwWB6cpnT7exK7Cpw7WvDwx8qe9GqT%2F4809.png",
    "https://prod-image-cdn.tensor.trade/images/slug=83ffcbbf-6c54-420f-bcd8-d1eb5e7d358a/400x400/freeze=false/https%3A%2F%2Fshdw-drive.genesysgo.net%2F9DEPA5HdWF9aWYuwWB6cpnT7exK7Cpw7WvDwx8qe9GqT%2F5105.png",

    // Add more image URLs as needed
  ];
  return (
    <>
      {" "}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[1300px]"
      >
        <CarouselContent>
          {imageUrls.map((url, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={url}
                      width={500}
                      height={500}
                      alt={`Image ${index + 1}`}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default CarouselDisplay;
