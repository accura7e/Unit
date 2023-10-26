const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.slider__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider__arrow--right',
      prevEl: '.slider__arrow--left',
    },
  
    // And if we need scrollbar

  });