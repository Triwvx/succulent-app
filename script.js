
var policy = document.querySelector("#cookie-container");

function hide() {
    policy.remove(); 
}

function onHover(element) {
    var image1 = document.querySelector("#succimg-1");
    image1.src=("succulents-2.jpg");
}

function offHover(element) {
    var image2 = document.querySelector("#succimg-2");
    image1.src=("succulents-1.jpg");
}