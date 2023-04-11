import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ recipe, type }) => {
  return (
    <div class="max-w-sm bg-light  rounded-lg shadow-md shadow-darkpink dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/recipes/${type}/${recipe.idMeal}`}>
        <Image
          className="rounded-t-lg"
          width={600}
          height={600}
          src={recipe.strMealThumb}
          alt="recipe image"
        />
      </Link>
      <div class="p-5">
        <Link href={`/recipes/${type}/${recipe.idMeal}`}>
          <h5 class="mb-2 text-2xl font-bold  text-dark dark:text-white">
            {recipe.strMeal}
          </h5>
        </Link>
        <Link
          href={`/recipes/${type}/${recipe.idMeal}`}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-dark bg-pink rounded-lg hover:bg-darkpink focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get Recipe
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default Card;
