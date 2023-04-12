import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className="w-screen h-screen bg-pink absolute top-0 left-0 -z-10">
      <Image
        src={logo}
        width={60}
        height={60}
        className=" mx-auto animate-ping animate-spin-slow mt-80 w-32 h-32 "
      />
    </div>
  );
};

export default Spinner;
