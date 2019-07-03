export default function (carro, string, posicao) {
  document.getElementById(`carro${carro}`).innerHTML = string
  document.getElementById(`carro${carro}`).style.top = `${posicao * 20}px`
}
