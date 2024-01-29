let prevScrollPos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  var navbar = document.getElementById("topnav-holder");
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    if (currentScrollPos > window.innerHeight / 3) {
      navbar.classList.add("hidden");
    }
  }
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

      navbar.style.padding = "0vh 10vw"; // Set the desired height when scrolled
  } else {
      navbar.style.padding = "3vh 10vw"; // Set the original height when at the top
  }
  prevScrollPos = currentScrollPos;
};
