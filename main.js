import { initHeader } from '/src/js/components/headder'
import { initSlider } from '/src/js/libs/swiper.js'

document.addEventListener('DOMContentLoaded', () => {
  initHeader()
  initSlider('.slider')
})

