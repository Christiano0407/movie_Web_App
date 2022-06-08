//** == ===== ===  All Class / Import  ==  === ==== ====  */
/* import { btnMenuOpen } from "./node.js";
import { navBar } from "./node.js"; */
//import { API_KEY } from "./secret.js";
//import { trendingMoviesPreviewList } from "./node.js";

//*TODO:  ==== All Events Movie App ====  */
btnMenuOpen.addEventListener("click", () => {
  console.log("Btn");

  if (navBar) {
    navBar.classList.toggle("visibility");
    navBar.classList.remove("inactive");
  } else {
    navBar.classList.remove("visibility");
    navBar.classList.toggle("inactive");
  }
});

//** === Movie Project == */
//*! ==== AXIOS API REST ====  */
const getMoviesTrending = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await response.json();
    const movies = data.results;
    console.log(movies);

    movies.forEach((movie) => {
      const trendingPreview = document.querySelector(
        "#trendingPreview .trendingPreview-movieList"
      );

      const movieContainer = document.createElement("div");
      movieContainer.classList.add("movie-container");

      const movieImg = document.createElement("img");
    });
  } catch (error) {
    console.log("No se puede acceder!");
  }
};

//*? ==== Get Trending Movies ====  */

//*! === Call Functions / Llamar a funciones ======= */
getMoviesTrending();
