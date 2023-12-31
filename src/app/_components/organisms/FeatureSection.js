import React from "react";
import Image from "next/image";
import { Button } from "../atoms/button/Button";

function FeatureSection({ imageURL, title, content }) {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-96 bg-black rounded-md">
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[400px] relative flex-grow">
        <Image
          src={imageURL}
          alt={"test"}
          fill
          className="object-cover rounded-l-md"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-8 text-neutral-50 gap-10">
        <div className="max-w-md">
          <p className="text-lg font-semibold mb-2">{title}</p>
          <p className="text-gray-300">{content}</p>
        </div>
        <Button variant="secondary">Discover now</Button>
      </div>
    </div>
  );
}

export default FeatureSection;
