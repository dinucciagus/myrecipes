import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full homepage">
      <div className="w-4/5 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="m-10">
          Search for a recipe and enjoy cooking and eating
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
