function showmore() {

    if (document.getElementById("moreimages").innerHTML == "Check flights outside of Europe") {
        document.getElementById("moreimages").innerHTML = "Only flights in Europe"
        var elems = document.getElementsByClassName('mosaic_more');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'flex';
        }
    } else {
        document.getElementById("moreimages").innerHTML = "Check flights outside of Europe"
        var elems = document.getElementsByClassName('mosaic_more');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
    }
}
