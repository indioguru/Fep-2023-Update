import { useEffect, useState } from "react";

export const useSlider = (items, classItems, dotClass = "dot", showControls) => {
  const [currentSlideSlider, setCurrentSlideSlider] = useState(0);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    if (items.length > 0) {
      let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
        setNumber(slideIndex);
      }

      function showSlides(n) {
        let slides = document.getElementsByClassName(classItems);
        let dots = document.getElementsByClassName(dotClass);

        let i;

        if (n > slides.length) {
          slideIndex = 1;
        }

        if (n < 1) {
          slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
        slides[slideIndex - 1].style.display = "block";
      }
      if (items.length > 1 && showControls === true) {
        const right = document.querySelector(".next");
        right.addEventListener("click", function () {
          plusSlides(+1, false);
        });

        const left = document.querySelector(".prev");
        left.addEventListener("click", function () {
          plusSlides(-1, false);
        });
      }

      if (currentSlideSlider > 0) {
        showSlides((slideIndex = currentSlideSlider));
        setNumber(currentSlideSlider);
      }
    }
  }, [items, currentSlideSlider]);

  return {
    number,
    setCurrentSlideSlider,
  };
};
