function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
        document.getElementById("topnav-holder").classList.add("hidden");
    }
}

window.setTimeout(offsetAnchor, 1);
