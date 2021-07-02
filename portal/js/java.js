function upload() {
    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function uploadPhone() {
    var imgcanvas = document.getElementById("canv1Phone");
    var fileinput = document.getElementById("finputPhone");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}