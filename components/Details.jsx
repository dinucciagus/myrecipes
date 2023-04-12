import Image from "next/image";
import React from "react";
import Link from "next/link";
const getRecipeDetails = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
};

const Details = async ({ id }) => {
  const recipedetails = await getRecipeDetails(id);
  const details = recipedetails.meals[0];
  const ingredients = [];
  for (let i = 0; i < 20; i++) {
    let ing = details[`strIngredient${i}`];
    let quantity = details[`strMeasure${i}`];
    ing != undefined && quantity != undefined
      ? ingredients.push({ name: ing, quantity: quantity })
      : null;
  }
  const tags = details.strTags?.split(",");

  return (
    <div className="bg-pink">
      <div className="bg-light shadow-md shadow-darkpink mx-4 xl:mx-32 xl:py-12 rounded-3xl p-4">
        <div className="w-full text-center text-3xl text-dark mb-8 font-bold">
          <h1>{details.strMeal}</h1>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col lg:flex-row w-full h-full bg-peach rounded-xl ">
            <div className="w-full   self-center justify-center  ">
              <Image
                src={details.strMealThumb}
                width={500}
                height={500}
                className="rounded-xl overflow-hidden w-full"
              />
            </div>
            <div className="w-full h-full justify-between  ">
              <ul className=" p-6 mt-6 text-start text-dark font-medium text-lg lg:text-2xl">
                <h1 className="pb-6">Ingredients:</h1>
                {ingredients.map((i) =>
                  i.name.length > 1 ? (
                    <li key={i.name} className="font-light">
                      {" "}
                      + {i.name + " : " + i.quantity}
                    </li>
                  ) : null
                )}
              </ul>
              <div className="flex flex-col mb-2 sm:flex-row gap-2 sm:gap-4 w-full justify-center sm:justify-start sm:ml-6 place-content-between">
                {tags?.map((t, i) => (
                  <p
                    key={i}
                    className="bg-darkpink py-1 px-2 mx-4 sm:mx-0 rounded-full sm:px-6 sm:py-4  "
                  >
                    #{t}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-full p-4 rounded-xl my-4 xl:my-0">
            <h1 className="text-2xl text-dark mb-2 font-medium ">
              Instructions:
            </h1>
            <p className="text-dark text-lg">{details.strInstructions}</p>
          </div>
        </div>
        {details.strYoutube ? (
          <div className="w-full flex flex-col  justify-center items-center ">
            <Link
              className="w-full flex flex-col  justify-center items-center "
              href={details.strYoutube}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-32 w-32"
                viewBox="0 0 24 24"
                className="fill-darkpink h-32 w-32 "
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <p className="text-center text-darkpink font-semibold">
                Watch video/recipe here!
              </p>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Details;
