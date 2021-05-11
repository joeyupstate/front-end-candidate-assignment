const nav = document.querySelector(".nav");
const visbleNav = document.querySelector(".visible-nav");
const hamburgerButton = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");



//This is a function that resets the nav is the screen size changes
const reSizer = () => {
  let screenWidth = document.documentElement.clientWidth || window.innerWidth;
  if (screenWidth > 992 && nav.classList.contains("visible-nav")) {
    nav.classList.toggle("visible-nav");
    closeIcon.style.display = "none";
  } else if (screenWidth < 992) {
    console.log("the screen is too small");
  }
};




//This function closes the hamburge menu on resizing
const hamburgerResizer = () => {
  let screenWidth = document.documentElement.clientWidth || window.innerWidth;
  if (screenWidth > 992) {
    hamburgerButton.style.display = "none";
  } else {
    hamburgerButton.style.display = "block";
  }
};



//This closes the mobile menu and hamburger menu on resizing
window.addEventListener("resize", function () {
  reSizer();
  hamburgerResizer();
});



//This handles the opening of the mobile menu
hamburgerButton.addEventListener("click", function () {
  nav.classList.toggle("visible-nav");
  closeIcon.style.display = "block";
  hamburgerButton.style.display = "none";
});



//This closes the mobile menu
closeIcon.addEventListener("click", function () {
  var screenWidth = document.documentElement.clientWidth || window.innerWidth;
  nav.classList.toggle("visible-nav");
  closeIcon.style.display = "none";
  hamburgerButton.style.display = "block";
});
