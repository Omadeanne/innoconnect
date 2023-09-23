let header = document.getElementById('site-header-inner');
document.addEventListener('scroll', function() {
  
  // Get the scroll position
  let scrollPos = window.pageYOffset;
  
  if ( scrollPos > 100 ) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "blue";
  }
  
  
});


// for profile toggle

// Grab HTML Elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Add Event Listeners
btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});