'use strict'
const sliderItems = document.getElementsByClassName('slider__item');
const arrSlides = Array.from(sliderItems);

const sliderArrow = document.getElementsByClassName('slider__arrow');

const sliderDots = document.getElementsByClassName('slider__dot');
const arrDots = Array.from(sliderDots);




let active = arrSlides.findIndex(item => item.classList.contains("slider__item_active"));

function showSlides(n) {
   
    if (n > sliderItems.length - 1 ) {
        active = 0
      }

    if (n < 0) {
        active = sliderItems.length -1
    } 
    
    for (let slide of arrSlides) {
        slide.classList.remove("slider__item_active"); 
      }
      arrSlides[active].classList.add("slider__item_active");   

    for (let dot of arrDots) {
        dot.classList.remove("slider__dot_active"); 
      }
      arrDots[active].classList.add("slider__dot_active");   
 
}


sliderArrow[0].onclick = function() { 
    
    showSlides(active -= 1);  
    
}   
 
sliderArrow[1].onclick = function() { 

    showSlides(active += 1);  
} 


 for (let i = 0; i < sliderDots.length; i++) {
    
     sliderDots[i].onclick = function() { 

        for (let dot of arrDots) {

          dot.classList.remove("slider__dot_active"); 
        
        }

        for (let slide of arrSlides) {

          slide.classList.remove("slider__item_active"); 
        }
    
        arrDots[i].classList.toggle("slider__dot_active"); 
        
        arrSlides[i].classList.toggle("slider__item_active");  

        active = i;
        
     } 
 } 

