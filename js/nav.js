const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

function navSlide () {
  //Toggle nav
  nav.classList.toggle('nav-active');

  //Animate nav
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  //Burger animation
  burger.classList.toggle('toggle');
}

/*Animation tutorial https://www.youtube.com/watch?v=oUSvlrDTLi4&t*/
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPos = target.getBoundingClientRect().top;
  var startPos = window.pageYOffset;
  var startTime = null;

  function scrollAnimation(currentTime) {
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPos, targetPos, duration)
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  }

  /*Ease function found at http://www.gizma.com/easing/*/
  function ease (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  requestAnimationFrame(scrollAnimation);
}

burger.addEventListener('click', () => {
  navSlide();
});

document.querySelectorAll('.home').forEach(element => {
  element.addEventListener('click', function() {
    smoothScroll('.frontpage', 1500);
    navSlide();
  })
});

document.querySelectorAll('.about').forEach(element => {
  element.addEventListener('click', function() {
    smoothScroll('.about-me', 1500);
    navSlide();
  })
});

document.querySelectorAll('.skills').forEach(element => {
  element.addEventListener('click', function() {
    smoothScroll('.skills-section', 1500);
    navSlide();
  })
});

document.querySelectorAll('.projects').forEach(element => {
  element.addEventListener('click', function() {
    smoothScroll('.my-projects', 1500);
    navSlide();
  })
});

document.querySelectorAll('.contact').forEach(element => {
  element.addEventListener('click', function() {
    smoothScroll('.contact-section', 1500);
    navSlide();
  })
});

const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('.section');

function changeLinkState() {
let index = sections.length;

  while(--index && window.scrollY + 420 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');

  for(i = 0, len = links.length; i < len; i++) {
    if(index % 2 !== 0) {
      links[i].style = 'border: 1.5px solid rgba(0, 0, 0, 0.5);';
      if(links[i].classList.contains('active')) {
        links[i].style = "background-color: black; border: none;";  
      }       
    } else if(index % 2 === 0) {
        links[i].style = 'border: 1.5px solid rgba(255, 255, 255, 0.5);';      
      }
    }
}

window.addEventListener('scroll', changeLinkState);
