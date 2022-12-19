//Change header background opacity
// When the user scrolls the page
window.onscroll = function() {
    // Get the header
    var header = document.getElementById("fix-header");
    if (window.pageYOffset > 50) {
        header.classList.add("header-on");
    } else {
        header.classList.remove("header-on");
    }
};