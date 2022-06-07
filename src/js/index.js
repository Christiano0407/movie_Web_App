//** == All Class ==  */

import { btnMenuOpen } from "./node.js";
import { navBar } from "./node.js";

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
