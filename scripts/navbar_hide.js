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
