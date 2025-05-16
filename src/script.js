document.addEventListener("DOMContentLoaded", function () {
  // Primeira instância
  const mainSwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1800,
  });

  // Segunda instância
  const responsiveSwiper = new Swiper('.mySwiper', {
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1800,
  });
});
