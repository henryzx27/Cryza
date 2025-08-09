import React from "react";

export default function BlurryBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-60"></div>
      </div>
    </div>
  );
}
