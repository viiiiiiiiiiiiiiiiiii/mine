window.onscroll= function() {stickyNavbar()}

var navbar = document.getElementById("navigation");
var sticky = navigation.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
