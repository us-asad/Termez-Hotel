const handleRoomsCarousel = () => {
  const roomsCarousel = $(".app_rooms-carousel");
  const changeCarouselScrollLeft = value => roomsCarousel.scrollLeft = value;
  changeCarouselScrollLeft(460);


  const roomsCarouselPrev = $(".app_rooms-carousel-prev");
  const roomsCarouselNext = $(".app_rooms-carousel-next");

  roomsCarouselPrev.addEventListener("click", () => changeCarouselScrollLeft(roomsCarousel.scrollLeft - 400));
  roomsCarouselNext.addEventListener("click", () => changeCarouselScrollLeft(roomsCarousel.scrollLeft + 400));
}

const handleGallerySlider = () => {
  const gallerySlider = $(".app_gallery-slider");
  const prevBtn = $(".app_gallery-slider-prev");
  const nextBtn = $(".app_gallery-slider-next");
  let activeSlide = 1;
  console.log(gallerySlider.children[0])

  const moveSlide = (condition, idx) => {
    if (condition) {
      for (let i = 0; i < gallerySlider.children.length; i++) {
        gallerySlider.children[i].classList.remove("active");
      }
      activeSlide = idx;
      gallerySlider.children[idx].classList.add("active");
      gallerySlider.style.transform = `translateX(${-(activeSlide - 1) * (gallerySlider.children[idx].offsetWidth + 100)}px)`;
    }
  }

  if (gallerySlider.children.length - 1 === activeSlide) {
    nextBtn.classList.add("completed");
  } else if (0 === activeSlide) {
    prevBtn.classList.add("completed");
  } else {
    nextBtn.classList.remove("completed");
    prevBtn.classList.remove("completed");
  }

  nextBtn.addEventListener("click", () => {
    moveSlide(gallerySlider.children.length - 1 !== activeSlide, activeSlide + 1);
  });
  prevBtn.addEventListener("click", () => {
    moveSlide(0 !== activeSlide, activeSlide - 1);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  handleRoomsCarousel();
  handleGallerySlider();
});
