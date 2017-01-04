
var width = 800;
var slider = $('.slider');
var sliderItem = $('.sliderItem');
var slidercount = sliderItem.length;
var currentSlide = 1;

function slide(){
    slider.animate({'margin-left': '-='+width}, 1000, function () {
        if (++currentSlide === slidercount) {
                currentSlide = 1;
                slider.css('margin-left', 0);
        }
    });
}

function runSlider() {
    setInterval(slide, 3000);
}

runSlider();

