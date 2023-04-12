// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const Searchandfilter = () => {
//   const category = ["dutch", "American"];
//   const recipes = [];
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recipesPerPage, setRecipesPerPage] = useState(8);
//   const max = Math.ceil(recipes.length / recipesPerPage);
//   const [inputPage, setInputPage] = useState(1);
//   const [order, setOrder] = useState("");
// const [selected, setSelected] = useState(false);

// useEffect(() => {
//   dispatch(getRecipes());
//   dispatch(getCategories());
// }, [dispatch]);

// function handleClickLoadRecipes(e) {
//   e.preventDefault();
//   dispatch(getRecipes());
//   setCurrentPage(1);
//   setInputPage(1);
//   setSelected(true);
// }

// function handleFilterCategories(e) {
//   e.preventDefault();
//   setCurrentPage(1);
//   setInputPage(1);
//   dispatch(filterByCategory(e.target.value));
// }

// function handleOrderByName(e) {
//   e.preventDefault();
//   dispatch(orderByName(e.target.value));
//   setOrder(`Order by ${e.target.value}`);
//   setCurrentPage(1);
//   setInputPage(1);
// }

// return (
//   <div className="headerHome">
//     <div className="buttonsContainer">
//       <button className="buttons">
//         <Link href="/create">Create a recipe</Link>
//       </button>
//       <button className="buttons" value="title">
//         Load all recipes
//       </button>
//     </div>
//     <div className="filterContainer">
//       <select defaultValue="default">
//         <option value="default" disabled selected={selected}>
//           Order by: Alphabet
//         </option>
//         <option value="name_asc">A-Z</option>
//         <option value="name_desc">Z-A </option>
//       </select>
{
  /* <SearchBar
            setCurrentPage={setCurrentPage}
            setInputPage={setInputPage}
            setSelected={setSelected}
          /> */
}
//         <select defaultValue="default">
//           <option value="default" disabled selected={selected}>
//             Filter by: Country of origin
//           </option>
//           <option value="All"> All </option>
//           {category.map((t) => {
//             return <option value={t}> {t} </option>;
//           })}
//         </select>
//       </div>
//     </div>
//   );
// };
// export default Searchandfilter;
