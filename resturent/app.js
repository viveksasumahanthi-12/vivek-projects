// Toggle mobile menu
let bar = document.getElementById("menu-icon");
let cross = document.getElementById("hdcross");
let headerbar = document.getElementById("headerbar");

bar.addEventListener("click", () => {
  headerbar.style.right = "0";
  bar.style.display = "none";
  cross.style.display = "block";
});

cross.addEventListener("click", () => {
  headerbar.style.right = "-100%";
  bar.style.display = "block";
  cross.style.display = "none";
});

// Toggle search bar (laptop and mobile)
const searchIcon1 = document.getElementById("searchicon1");
const searchInput1 = document.getElementById("searchinput1");
const searchIcon2 = document.getElementById("searchicon2");
const searchInput2 = document.getElementById("searchinput2");

searchIcon1.addEventListener("click", () => {
  searchInput1.classList.toggle("show");
});

searchIcon2.addEventListener("click", () => {
  searchInput2.classList.toggle("show");
});
