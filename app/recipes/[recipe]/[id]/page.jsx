// import Image from "next/image";
// import React from "react";
// import YouTube from "react-youtube";
// // import Details from "@/components/Details";
// const getRecipeDetails = async (id) => {
//   const res = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//   );
//   return res.json();
// };

// const Page = async ({ params }) => {
//   const recipedetails = await getRecipeDetails(params.id);
//   const id = params.id;
//   const details = recipedetails.meals[0];
//   const videourl = details.strYoutube;
//   console.log(details);
//   const videoid = videourl.split("?v=")[1];
//   const ingredients = [];
//   for (let i = 0; i < 20; i++) {
//     let ing = details[`strIngredient${i}`];
//     let quantity = details[`strMeasure${i}`];
//     ing != undefined && quantity != undefined
//       ? ingredients.push({ name: ing, quantity: quantity })
//       : null;
//   }

//   return (
//     <div>
//       {/* <Details id={id} /> */}
//       <div>
//         <h1>{details.strMeal}</h1>
//       </div>
//       <div>
//         <div>
//           <Image src={details.strMealThumb} width={500} height={500} />
//         </div>
//         <div>
//           <ul>
//             <h1>Ingredients:</h1>
//             {ingredients.map((i) =>
//               i.name.length > 1 ? <li>{i.name + " : " + i.quantity}</li> : null
//             )}
//           </ul>
//           <h1>Instructions:</h1>
//           <p>{details.strInstructions}</p>
//         </div>
//       </div>
//       {/* <div>
//         <YouTube videoId={videoid} />
//       </div> */}
//     </div>
//   );
// };
// export default Page;

import React from "react";
import Details from "@/components/Details";

const Page = async ({ params }) => {
  return (
    <div>
      <Details id={params.id} />
    </div>
  );
};
export default Page;
