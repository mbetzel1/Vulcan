let prevScrollPos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("topnav-holder").classList.remove("hidden");
  } else {
    if (currentScrollPos > window.innerHeight / 2) {
      document.getElementById("topnav-holder").classList.add("hidden");
    }
  }

  prevScrollPos = currentScrollPos;
};

window.onscroll = function() {
  shrinkNavbar();
};

function shrinkNavbar() {
  var navbar = document.getElementById("topnav-holder");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.padding = "0vh 10vw"; // Set the desired height when scrolled
  } else {
      navbar.style.padding = "3vh 10vw"; // Set the original height when at the top
  }
};
