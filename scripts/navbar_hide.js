let prevScrollPos = window.scrollY;


function navbarFunction() {
  let currentScrollPos = window.scrollY;
  var navbar = document.getElementById("topnav-holder");
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    if (currentScrollPos > window.innerHeight / 3) {
      navbar.classList.add("hidden");
    }
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navbar.style.padding = "0.5vh 10vw"; // Set the desired height when scrolled
  } else if (document.body.scrollTop < 150 || document.documentElement.scrollTop < 150) {
    navbar.style.padding = "3vh 10vw"; // Set the original height when at the top
  }
  
  prevScrollPos = currentScrollPos;
};
window.onscroll = navbarFunction
window.onload = navbarFunction
