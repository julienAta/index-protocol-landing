"use client";
import React, { useState, ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ImageDisplayComponent: React.FC = () => {
  const [number, setNumber] = useState<string>("");
  const baseUrl =
    "https://shdw-drive.genesysgo.net/HCA6JCoGqbRnyoaZE4fg5ejzDq64jR7N6eH5MuTUd2pw/";

  // Function to handle input change with TypeScript type for the event
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  // Construct the image URL
  const imageUrl = `${baseUrl}${number}.png`;

  return (
    <div>
      <Input
        type="text"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter your number"
      />
      {number && (
        <>
          <img src={imageUrl} alt="User specified content" />
          <br />
          <div className="flex justify-center mt-10">
            <a href={imageUrl} download={`Image-${number}.png`}>
              <Button>Download Image</Button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageDisplayComponent;
