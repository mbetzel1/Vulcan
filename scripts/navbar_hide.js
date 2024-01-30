let prevScrollPos = window.scrollY;
var isHashChange = false;

function navbarFunction() {
  let currentScrollPos = window.scrollY;
  var navbar = document.getElementById("topnav-holder");
  if (prevScrollPos > currentScrollPos) {
    if (!isHashChange) {
      navbar.classList.remove("hidden");
    }
  } else {
    if (currentScrollPos > window.innerHeight / 5) {
      navbar.classList.add("hidden");
    }
  }

  prevScrollPos = currentScrollPos;
};
window.onscroll = navbarFunction
window.onload = navbarFunction

window.addEventListener('hashchange', function() {
  // Get the target element with the updated hash
  var targetElement = document.querySelector(window.location.hash);

  // Check if the target element exists
  if (targetElement) {
      // Calculate the offset from the top to scroll up by a certain amount (e.g., 50 pixels)
      var offset = targetElement.offsetTop - 100;
      isHashChange = true;
      // Scroll immediately to the target element without smooth effect
      window.scrollTo(0, offset);
      document.getElementById("topnav-holder").classList.add('hidden');
      isHashChange = false;
  }
});
