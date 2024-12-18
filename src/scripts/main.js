// JavaScript for Reviews Slider and Burger Menu

document.addEventListener('DOMContentLoaded', () => {
  // Reviews Slider
  const slider = document.getElementById('reviews-slider');
  const sliderItems = document.querySelectorAll('.reviews__item');
  const itemsToShow = 3; // Number of reviews to show on desktop
  const itemWidth = sliderItems[0].offsetWidth + 20; // Including margin
  let currentPosition = 0;

  function updateSliderPosition() {
    slider.style.transition = 'transform 0.8s ease'; // Smooth transition
    slider.style.transform = `translateX(-${currentPosition}px)`;
  }

  function autoSlide() {
    if (currentPosition >= (sliderItems.length - itemsToShow) * itemWidth) {
      // Smoothly reset to the first slide
      slider.style.transition = 'none'; // Disable transition temporarily
      currentPosition = 0;
      slider.style.transform = `translateX(-${currentPosition}px)`;
      setTimeout(() => {
        slider.style.transition = 'transform 0.8s ease';
        currentPosition += itemWidth;
        updateSliderPosition();
      }, 50); // Small delay to apply transition
    } else {
      currentPosition += itemWidth;
      updateSliderPosition();
    }
  }

  // Set up auto-slide interval
  setInterval(autoSlide, 3000); // Change slide every 3 seconds

  // Smooth Scroll for Menu Links
  const menuLinks = document.querySelectorAll('.nav__link');

  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetID = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetID);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
          behavior: 'smooth',
        });
      }
    });
  });
});
