import './style.css'
import en from './i18n/en.js'
import es from './i18n/es.js'

const i18n = { en, es }

;(function () {
  // ---------- Language toggle ----------
  const langToggle = document.getElementById('langToggle')
  function setLang(l) {
    document.body.setAttribute('data-lang', l)
    document.documentElement.lang = l
    try { localStorage.setItem('pp-lang', l) } catch (e) {}
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }))
  }
  langToggle.addEventListener('click', (e) => {
    e.preventDefault()
    setLang(document.body.getAttribute('data-lang') === 'en' ? 'es' : 'en')
  })
  try {
    const stored = localStorage.getItem('pp-lang')
    if (stored) setLang(stored)
  } catch (e) {}

  // ---------- TOC collapse ----------
  const toc = document.getElementById('toc')
  const tocToggle = document.getElementById('tocToggle')

  function updateTocToggle() {
    const lang = document.body.getAttribute('data-lang') || 'es'
    const label = toc.classList.contains('collapsed') ? i18n[lang].toc.show : i18n[lang].toc.hide
    tocToggle.textContent = '[' + label + ']'
  }
  tocToggle.addEventListener('click', () => {
    toc.classList.toggle('collapsed')
    updateTocToggle()
  })
  document.addEventListener('langchange', updateTocToggle)
  updateTocToggle()

  // ---------- Tabs (visual only) ----------
  document.querySelectorAll('.article-tabs .group').forEach(group => {
    group.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
      })
    })
  })

  // ---------- Search shortcut "/" ----------
  const searchInput = document.getElementById('searchInput')
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault()
      searchInput.focus()
    }
  })

  // ---------- Print ----------
  document.getElementById('printLink').addEventListener('click', (e) => {
    e.preventDefault()
    window.print()
  })

  // ---------- Contact: copy email to clipboard ----------
  const CONTACT_EMAIL = 'all.each.one@gmail.com'
  document.getElementById('contactLink').addEventListener('click', (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      showToast(document.body.getAttribute('data-lang') === 'en'
        ? `Email copied: ${CONTACT_EMAIL}`
        : `Correo copiado: ${CONTACT_EMAIL}`)
    })
  })
  document.addEventListener('langchange', () => {})

  function showToast(msg) {
    const toast = document.createElement('div')
    toast.className = 'pp-toast'
    toast.textContent = msg
    document.body.appendChild(toast)
    requestAnimationFrame(() => toast.classList.add('pp-toast--in'))
    setTimeout(() => {
      toast.classList.remove('pp-toast--in')
      toast.addEventListener('transitionend', () => toast.remove(), { once: true })
    }, 2600)
  }
})()
