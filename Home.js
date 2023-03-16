// Hämta slideshow-container-elementet
var slideshowContainer = document.querySelector('.slideshow-container');

// Hämta alla slide-elementen
var slides = document.querySelectorAll('.slide');

// Skapa en räknare för aktuell slide
var currentSlide = 0;

// Funktion för att visa nästa slide
function showNextSlide() {
  // Öka räknaren för aktuell slide
  currentSlide++;

  // Om räknaren överstiger antalet slides, återgå till första slide
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Använd transform-x för att visa rätt slide
  var translateX = currentSlide * -100;
  slideshow.style.transform = 'translateX(' + translateX + '%)';
}

// Starta en timer för att visa nästa slide var 5:e sekund
setInterval(showNextSlide, 5000);