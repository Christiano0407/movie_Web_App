//** == All Class ==  */
const btnMenuOpen = document.getElementById("headerMenu");
const menuClose = document.getElementById("menuClose");
const overlay = document.getElementById("[data-overlay]");
const navBar = document.getElementById("navId");

//*? == ADD Function active Event ==  */
const addOpen = [btnMenuOpen, menuClose, overlay];

/* for (let i = 0; i < addElements.length; i++) {
  addOpen[i].addEventListener("click", function () {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}
 */
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
