

var map=document.getElementById("view-map");
var hide=document.getElementById("hide");
var show_map=document.getElementById("show-map");
map.addEventListener('click', function() {
    hide.style.display = window.getComputedStyle(hide).display === 'block' ? 'none' : 'none';
    show_map.style.display = window.getComputedStyle(show_map).display === 'none' ? 'block' : 'none';
});

