
var width = 800;
var slider = $('.slider');
var sliderItem = $('.sliderItem');
var slidercount = sliderItem.length;
var currentSlide = 1;
var runSlide = false;
var playButton = document.getElementById('playButton');
var interval;

playButton.addEventListener('click', slide);

function slide(){
    runSlide = !runSlide;
    console.log(runSlide);
    if(runSlide) {
        setInterval(animate, 3000);
    } else {
        stopanimate();
    }
}

function animate() {
    interval = setInterval(function(){
        slider.animate({'margin-left': '-='+width}, 1000, function () {
            if (++currentSlide === slidercount) {
                currentSlide = 1;
                slider.css('margin-left', 0);
            }
        } );
    })
}

function stopanimate() {
    clearInterval(interval);
}

setInterval(animate, 3000);