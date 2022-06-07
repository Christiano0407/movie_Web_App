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

//*? ==== Get Trending Movies ====  */

//*! === Call Functions / Llamar a funciones ======= */
