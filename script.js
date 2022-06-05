function myFunction() {
var x = document.getElementById("navBar");
if (x.className === "nav-bar") {
    x.className += " responsive";
}else {
    x.className = "nav-bar";
}
}