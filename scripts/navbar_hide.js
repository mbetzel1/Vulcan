var lastScrollTop;
navbar = document.getElementById('topnav-holder');
window.addEventListener('scroll',function(){
var scrollTop = window.scrollY || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-80px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});
