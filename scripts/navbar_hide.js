let prevScrollPos = window.scrollY;


function navbarFunction() {
  let currentScrollPos = window.scrollY;
  var navbar = document.getElementById("topnav-holder");
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    if (currentScrollPos > window.innerHeight / 5) {
      navbar.classList.add("hidden");
    }
  }
  // if (window.innerWidth > 1000)  {
  //   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

  //     navbar.style.padding = "0.5vh 10vw"; // Set the desired height when scrolled
  //   } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
  //     navbar.style.padding = "3vh 10vw"; // Set the original height when at the top
  //   }
  // }
  prevScrollPos = currentScrollPos;
};
window.onscroll = navbarFunction
window.onload = navbarFunction

  window.addEventListener('hashchange', function() {
    // Get the target element with the updated hash
    var targetElement = document.querySelector(window.location.hash);
    var hashString = location.hash;
    // Check if the target element exists
    if (targetElement) {
        // Calculate the offset from the top to scroll up by a certain amount (e.g., 50 pixels)
        if (hashString == "#vulcan-leaders") {
          var offset = targetElement.offsetTop - 180;
        } else if (hashString == "vulcan-contact") {
          var offset = targetElement.offsetTop - 150;
        } else {
          var offset = targetElement.offsetTop - 100;
        }
        
        
        // Scroll immediately to the target element without smooth effect
        window.scrollTo(0, offset);
        document.getElementById("topnav-holder").classList.add('hidden');
    }
});
