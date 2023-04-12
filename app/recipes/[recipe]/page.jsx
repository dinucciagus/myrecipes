import React from "react";
import Card from "@/components/Card";

const getRecipes = async (type) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
  );
  const response = await res.json();
  return response;
};

const Page = async ({ params }) => {
  const recipes = await getRecipes(params.recipe);
  return (
    <div className="bg-pink grid grid-cols-1 justify-center min-w-full gap-6 p-8 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.meals.map((r, i) => {
        return <Card recipe={r} key={i} type={params.recipe} />;
      })}
    </div>
  );
};
export default Page;
