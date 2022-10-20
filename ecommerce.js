const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active")
})

const cart = document.querySelector(".cartIcon")
const shippingCart = document.querySelector(".shippingCart")

cart.addEventListener("click", () => {
  shippingCart.classList.toggle("active")
})

const swiper = new Swiper(".swiper", {
  // Optional parameters

  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    693: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
})
