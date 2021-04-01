var instances;

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var option = {
        fullWidth: true,
        indicators: true
    }
    instances = M.Carousel.init(elems, option);
});