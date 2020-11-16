const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-slide .item');

// Buttons
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// Counter
let counter = 0;

carouselItems[1].style.display = "none";
prev.style.display = "none";

// Button listernes
next.addEventListener('click', function() {
  prev.style.display = "unset";
  next.style.display = "none";
  carouselItems[0].style.display = "none";
  carouselItems[1].style.display = "unset";
});

prev.addEventListener('click', function() {
  prev.style.display = "none";
  next.style.display = "unset";
  carouselItems[0].style.display = "unset";
  carouselItems[1].style.display = "none";
});