let prevScrollPos = window.scrollY;

function removePadding() {
  document.getElementById('topnav-holder').style.padding = "0vh 10vw"
}

function addPadding() {
  document.getElementById('topnav-holder').style.padding = "3vh 10vw"
}

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

      window.setTimeout(removePadding, 1) // Set the desired height when scrolled
  } else {
      window.setTimeout(addPadding, 1) // Set the original height when at the top
  }
  prevScrollPos = currentScrollPos;
};
