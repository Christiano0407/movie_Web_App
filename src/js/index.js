//** == ===== ===  All Class / Import  ==  === ==== ====  */
/* import { btnMenuOpen } from "./node.js";
import { navBar } from "./node.js"; */
import { API } from "./secret.js";
console.log(API);
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
async function getTrendingMoviesPreview() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=` + API
  );
  const data = await response.json();

  const movies = data.results;

  movies.forEach((movie) => {
    const trendingPreviewMoviesContainer = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    );

    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}

getTrendingMoviesPreview();

//*? ==== Get Trending Movies ====  */

//*! === Call Functions / Llamar a funciones ======= */
