export default function () {
  document.querySelector('.form-definir-participantes').style.pointerEvents = 'painted'
  document.querySelector('.nav').style.pointerEvents = 'painted'

  const btn = Array.from(document.querySelector('.area-btn-actions').childNodes)
  btn[0].classList.remove('btn-cancel')
}
