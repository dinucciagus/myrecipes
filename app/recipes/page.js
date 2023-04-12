import React from "react";
import Link from "next/link";
import Searchandfilter from "@/components/searchandfilter";
const fetchRecipes = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((a) => a.strArea);
};

const Page = async () => {
  const list = await fetchRecipes();
  return (
    // <div>
    //   <Searchandfilter />
    <div className="bg-pink grid grid-cols-1 gap-6 p-8 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list.map((a, i) => (
        <Link
          className="bg-light shadow-md text-darkpink text-2xl py-10 font-bold shadow-darkpink hover:bg-darkpink hover:text-light rounded-full "
          key={i}
          href={`/recipes/${a}`}
        >
          {a}
        </Link>
      ))}
    </div>
    // </div>
  );
};
export default Page;
