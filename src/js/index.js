//** == All Class ==  */
const btnMenuOpen = document.getElementById("headerMenu");
const menuClose = document.getElementById("menuClose");
const overlay = document.getElementById("[data-overlay]");
const navBar = document.getElementById("navId");

//*? == ADD Function active Event ==  */
const addElements = [btnMenuOpen, menuClose, overlay];

for (let i = 0; i < addElements.length; i++) {
  addElements[i].addEventListener("click", () => {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}
