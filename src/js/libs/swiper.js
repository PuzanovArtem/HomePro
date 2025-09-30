export function initSlider(selector) {
  const slider = document.querySelector(selector)
  if (!slider) return

  const track = slider.querySelector('.slider__track')
  const slides = slider.querySelectorAll('.slide')
  const prevBtn = slider.querySelector('.prev')
  const nextBtn = slider.querySelector('.next')
  const dotsContainer = slider.querySelector('.slider__dots')

  let index = 0

  slides.forEach((_, i) => {
    const dot = document.createElement('button')
    if (i === 0) dot.classList.add('active')
    dot.addEventListener('click', () => goToSlide(i))
    dotsContainer.appendChild(dot)
  })

  const dots = dotsContainer.querySelectorAll('button')

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`
    dots.forEach(d => d.classList.remove('active'))
    dots[index].classList.add('active')

    prevBtn.disabled = index === 0
    nextBtn.disabled = index === slides.length - 1

    prevBtn.classList.toggle('disabled', index === 0)
    nextBtn.classList.toggle('disabled', index === slides.length - 1)
  }

  function goToSlide(i) {
    index = i
    updateSlider()
  }

  nextBtn.addEventListener('click', () => {
    if (index < slides.length - 1) {
      index++
      updateSlider()
    }
  })

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--
      updateSlider()
    }
  })

  updateSlider()
}
