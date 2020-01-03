// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

//show header when scrool down
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const logo = document.querySelector("#logo span");
  const menu = document.querySelectorAll("header li a");
  const ctabtn = document.querySelector("header .cta");
  menu.forEach(Element => {
    const scroll = window.scrollY;
    const scrollheight = 120;
    if (scroll > scrollheight) {
      header.classList.add("scroll-header");
      logo.classList.add("sroll-logo");
      Element.classList.add("scroll-menu");
      ctabtn.classList.add("scroll-cta");
    } else {
      header.classList.remove("scroll-header");
      logo.classList.remove("sroll-logo");
      Element.classList.remove("scroll-menu");
      ctabtn.classList.remove("scroll-cta");
    }
    console.log(ctabtn);
  });
});

// smooth scrolling
var scroll = new SmoothScroll('header a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});
