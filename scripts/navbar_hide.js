// var lastScrollTop;
// navbar = document.getElementById('topnav-holder');
// window.addEventListener('scroll',function(){
// var scrollTop = window.scrollY || document.documentElement.scrollTop;
// if(scrollTop > lastScrollTop){
// navbar.style.top='-80px';
// }
// else{
// navbar.style.top='0';
// }
// lastScrollTop = scrollTop;
// });

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
