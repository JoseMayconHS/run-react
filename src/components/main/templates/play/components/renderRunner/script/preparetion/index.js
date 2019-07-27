import cambio_desligado from '../../imagens/importants/cambio_desligado.png'

export default function (cars, limite) {
  let height = 0
  for (let h = 0; h <= cars.length; h++) {
    height += 21
  }
  document.getElementById('lideres-table').style.height = `${height}px`
  document.querySelector('.area-tables-runner').style.paddingTop = `${height + 60}px`

  cars.forEach((car, index) => {
    document.querySelector(`#ponteiro${index} img`).style.transform = 'translate(0px, 0px) rotate(0deg)'

    document.getElementById(`distancia${index}`).innerHTML = `${(car.getDistanciaPecorrida()).toFixed(3)} km`

    document.querySelectorAll('.cambio').forEach(img => img.src = cambio_desligado)

    document.querySelectorAll('.efeito-barra-nitro').forEach(span => span.style.display = 'none')

    document.querySelectorAll('.aproveitamento').forEach(div => div.style.background = 'transparent')
    document.querySelectorAll('.nitro').forEach(div => div.style.display = 'none')

    document.querySelectorAll('.barras-nitros').forEach(span => span.style.height = '100%')

    document.querySelectorAll('.grau span').forEach(tag => tag.style.width = '0%')

    document.getElementById('distancia').innerHTML = `${limite} km`
  })
}
