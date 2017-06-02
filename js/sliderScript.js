(function(){
    var sliderButtons = document.getElementsByClassName("sliderButton"),
        sliderImage = document.getElementsByClassName("sliderImage"),
        slidingBox = document.getElementsByClassName("slidingBox")[0],
        imagesForSlide = [
            "sliderImg/yu-chuan-hsu-2537.jpg",
            "sliderImg/ng-978.jpg",
            "sliderImg/ahmed-radwan-16727.jpg",
            "sliderImg/brandon-lam-29892.jpg",
            "sliderImg/joy-stamp-20898.jpg"
        ],
        sliderCount = 0,
        sliderLength = imagesForSlide.length,
        windowWidth = 1000
    ;
    function doTheSliding(x){
        var newSlide = document.createElement("img"),
            slideCont = document.createElement("div"),
            prevImage = sliderCount;
        sliderImage = document.getElementsByClassName("sliderImage");
        if (x === -1){
            if (x === -1 && sliderCount === 0){
                sliderCount = sliderLength -1;
            } else if (x === -1){
                sliderCount -= 1;
            }
            newSlide.setAttribute("src", imagesForSlide[sliderCount]);
            newSlide.setAttribute("alt", imagesForSlide[sliderCount]);
            slideCont.setAttribute("class", "sliderImage");
            newSlide.style.width = windowWidth + "px";
            slideCont.append(newSlide);
            slidingBox.prepend(slideCont);
            slidingBox.style.left = windowWidth + "px";
            slidingBox.style.transition = "0.4s";
            slidingBox.style.left = windowWidth * 0 + "px";
        }
        if (x === 1){
            if (x === 1 && sliderCount === sliderLength -1){
                sliderCount = 0;
            } else if (x === 1){
                sliderCount += x;
            }
        }
        sliderImage[prevImage].parentNode.removeChild(sliderImage[prevImage]);
    }
    sliderButtons[0].addEventListener("click", function(){
        doTheSliding(-1);
    },false);
    sliderButtons[1].addEventListener("click", function(){
        doTheSliding(1);
    },false);
}())