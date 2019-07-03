import cambio_desligado from '../../imagens/importants/cambio_desligado.png'

export default function () {
  document.querySelector('.form-definir-participantes').style.pointerEvents = 'none'

  document.querySelectorAll('.nitro').forEach(div => div.style.display = 'block')

  document.querySelectorAll('.efeito-barra-nitro').forEach(span => span.style.display = 'block')

  const btn = Array.from(document.querySelector('.area-btn-actions').childNodes)
  btn[0].classList.add('btn-cancel')
  btn[0].value = 'Stop'
}
