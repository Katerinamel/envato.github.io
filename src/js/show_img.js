

var show_img_blue=document.getElementById("show-img-blue");
var show_img_green=document.getElementById("show-img-green");
show_img_blue.addEventListener('click', function() {
    show_img.style.display = window.getComputedStyle(show_img_blue).display === 'block' ? 'none' : 'none';

});

show_img_green.addEventListener('click', function() {
    show_img_green.style.display = window.getComputedStyle(show_img_green).display === 'block' ? 'none' : 'none';

});
