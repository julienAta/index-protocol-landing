"use client";
import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const MonkePngTool: React.FC = () => {
  const [number, setNumber] = useState<string>("");
  const [backgroundImageFile, setBackgroundImageFile] = useState<File | null>(
    null
  );
  const [backgroundImageSrc, setBackgroundImageSrc] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const baseUrl =
    "https://shdw-drive.genesysgo.net/HCA6JCoGqbRnyoaZE4fg5ejzDq64jR7N6eH5MuTUd2pw/";
  const imageUrl = `${baseUrl}${number}.png`;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleBackgroundImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBackgroundImageFile(e.target.files[0]);
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        if (!event.target) return;
        setBackgroundImageSrc(event.target.result as string);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    // Clear the canvas before drawing new images
    ctx?.clearRect(0, 0, 500, 500);

    const drawMonkeImage = () => {
      if (number) {
        const monkeImg = new Image();
        monkeImg.src = imageUrl;
        monkeImg.onload = () => {
          ctx?.drawImage(monkeImg, 0, 0, 500, 500);
        };
      }
    };

    if (ctx && backgroundImageSrc) {
      const backgroundImg = new Image();
      backgroundImg.onload = () => {
        ctx.drawImage(backgroundImg, 0, 0, 500, 500);
        drawMonkeImage();
      };
      backgroundImg.src = backgroundImageSrc;
    } else {
      drawMonkeImage();
    }
  }, [number, backgroundImageSrc, imageUrl]);

  const handleDownload = () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = `Custom-Monke-${number}.png`;
          link.click();
        }
      }, "image/png");
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={number}
        onChange={handleInputChange}
        placeholder="Monke number"
      />
      <div className="mt-5 flex justify-center">
        <p className="text-center"> Add a custom background</p>

        <Input
          type="file"
          onChange={handleBackgroundImageChange}
          title="Upload a background image"
        />
      </div>
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          width="500"
          height="500"
          style={{ border: "1px solid black" }}
        ></canvas>
      </div>
      <br />
      {/* <div className="flex justify-center mt-10">
        <Button onClick={handleDownload}>Download Combined Image</Button>
      </div> */}
    </div>
  );
};

export default MonkePngTool;
