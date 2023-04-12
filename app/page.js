import Link from "next/link";
import React from "react";

export default function Home() {
  const url =
    "https://drive.google.com/uc?export=download&id=1T6k7FTdjEDKUnhEq7LLf_f175ajXosHj";
  return (
    <div className=" flex justify-center items-center pt-20 lg:pt-32">
      <video
        src={url}
        className=" h-screen absolute w-screen top-0 left-0 -z-10 object-cover"
        autoPlay
        muted
      />
      <div className="w-4/5 md:w-3/5 lg:w-2/5 text-center  bg-peach py-10 rounded-3xl shadow-lg shadow-darkpink">
        <h1 className="m-10 pb-4 text-dark text-lg md:text-2xl font-semibold">
          Find new recipes and enjoy cooking
        </h1>
        <Link
          className="bg-darkpink p-4 m-4 rounded-full text-dark font-bold text-lg shadow-sm cursor-pointer shadow-dark  hover:text-light "
          href={"/recipes"}
        >
          Start search!
        </Link>
      </div>
    </div>
  );
}
