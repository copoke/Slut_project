document.addEventListener("DOMContentLoaded", function () {
function hidemap(boolean) {
    const container = $(".pop-up-container")
    if (boolean == true) {
        container.css('display', 'none')
    }
    else {
        container.css('display', 'block')
    }
}


function initMap() {
    const Nike = { lat: 59.396543897446335, lng: 18.045602784542144 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: Nike,
    });
    const nikeWindow = new google.maps.InfoWindow();
    const nikeCoordinates = [
        [{ lat: 59.45136832656315, lng: 18.070814836420613 }, "Westfield Täby Centrum"],
        [{ lat: 59.42495781236318, lng: 17.861051665347464 }, "Nike Konstverk"],
        [{ lat: 59.37919856879407, lng: 18.002891523882642 }, "Mall of Scandinavia"],
        [{ lat: 59.29871609534867, lng: 17.935967083587876 }, "Nike Store Gallerian"],
        [{ lat: 59.321148096578064, lng: 18.092790025771137 }, "Hypestein"],
    ]
    nikeCoordinates.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
        });
    });
}
window.initMap = initMap;


window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    $(".shoe-selection").css("background-position-y", `${Math.round(-scroll / 1.5)}px`);

    if (scroll === 0) {
        $("#bottom-text, #middle-title, #below-text").css("opacity", 1);
    }

    if (scroll < 300) {
        $("#shop-container").css("margin-top", `${-scroll / 1.2 + 50}px`);
    }
});

const carouselItems = Array.from(document.querySelectorAll('.carousel .carousel-item'))

carouselItems.forEach((item) => {
    const itemsPerSlide = 4
    let nextItem = item.nextElementSibling

    for (let i = 1; i < itemsPerSlide; i++) {
        if (!nextItem) {
            nextItem = carouselItems[0]
        }
        const clonedItem = nextItem.cloneNode(true);
        item.appendChild(clonedItem.children[0])
        nextItem = nextItem.nextElementSibling
    }
})
new WOW().init();

(function () {
    var doc = document.documentElement;
    var win = window;
    var header = document.getElementById('site-header');
    var links = document.getElementsByClassName('link');

    var prevScrollY = win.scrollY || doc.scrollTop;
    var curScrollY;

    var directionY = 0;
    var prevDirectionY = 0;
    function checkScrollY() {
        curScrollY = win.scrollY || doc.scrollTop;
        if (curScrollY > prevScrollY) {
            directionY = 2;
        } else if (curScrollY < prevScrollY) {
            directionY = 1;
        }

        if (directionY !== prevDirectionY) {
            toggleHeader(directionY, curScrollY);
        }

        prevScrollY = curScrollY;
    }

    function toggleHeader(direction, curScroll) {
        if (direction === 2 && curScroll > 52) {
            header.classList.add('animate__fadeOutUp');
            prevDirectionY = direction;
            setTimeout(() => {
                for (var i = 0; i < links.length; i++) {
                    links[i].style.pointerEvents = 'none';
                }
            }, 500);
        } else if (direction === 1) {
            header.classList.remove('animate__fadeOutUp');
            header.classList.add('animate__fadeInDown');
            prevDirectionY = direction;
            for (var i = 0; i < links.length; i++) {
                links[i].style.pointerEvents = 'auto';
            }
        }
    }

    win.addEventListener('scroll', checkScrollY);

})();



var slideshowContainer = document.querySelector('.slideshow-container');
var slideshow = slideshowContainer.querySelector('.slideshow');
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
''
function showNextSlide() {
    currentSlide++;
    if (currentSlide > 2) {
        currentSlide = 0
    }
    var translateX = currentSlide * - 100;
    slideshow.style.transform = 'translateX(' + translateX + '%)';
}
setInterval(showNextSlide, 5000);
})