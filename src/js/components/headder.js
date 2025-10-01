export function initHeader() {
  const burger = document.getElementById('burger')
  const sidebar = document.getElementById('mobileMenu')
  const closeMenu = document.getElementById('closeMenu')
  let overlay = document.querySelector('.overlay')

  if (!burger || !sidebar) return

  if (!overlay) {
    overlay = document.createElement('div')
    overlay.className = 'overlay'
    document.body.appendChild(overlay)
  }

  const toggle = () => {
    ;[burger, sidebar, overlay].forEach(el => el.classList.toggle(`${el.classList[0]}--active`))
    document.body.classList.toggle('no-scroll')
  }

  ;[burger, overlay, closeMenu].forEach(el => el && el.addEventListener('click', toggle))

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sidebar.classList.contains('sidebar--active')) {
      toggle()
    }
  })
}
