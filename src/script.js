window.onscroll = function () {
    scroll();
};


function scroll() {
    nav = document.getElementById("navbar");
    img = document.getElementById("img")
    if (
        document.documentElement.scrollTop < 250
    ) {
        nav.style.position = "absolute";
        nav.style.backgroundColor = "transparent";
        img.style.maxHeight = "200px";
        if (nav.classList.contains('navbar-animation')) {
            nav.classList.remove('navbar-animation')
            img.style.maxHeight = "auto";
        }


    } else {
        nav.style.backgroundColor = "#2b2f41";
        nav.style.position = "fixed";
        // console.log(nav.classList);

        if (!nav.classList.contains('navbar-animation')) {
            nav.classList.toggle('navbar-animation')
        }
        img.style.maxHeight = "60px";
    }
}