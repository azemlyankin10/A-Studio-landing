import Swiper, { Pagination, HashNavigation }  from 'swiper'

Swiper.use([Pagination, HashNavigation])

const swiper = new Swiper(document.querySelector('.fids-swiper'), {
  hashNavigation: {
    watchState: true,

  },
  pagination: {
    el: ".fids-swiper-pagination",
    clickable: true,
  },
})

const btns = document.querySelectorAll('.fids-controller__btn')
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.dataset.control);
    location.hash = btn.dataset.control
  })
})