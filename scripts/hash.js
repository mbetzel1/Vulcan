function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
        console.log(location.hash)
    }
}


window.setTimeout(offsetAnchor, 1);
