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
            for (var i = 0; i < links.length; i++) {
                links[i].style.pointerEvents = 'none';
            }

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