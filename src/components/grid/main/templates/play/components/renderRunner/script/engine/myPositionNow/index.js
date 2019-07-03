import changePosition from '../changePosition'

export default function (distancia = 0, eu = 0, cars, pilots, limite) {
  let minhaPosicaoAgr = cars.length - 1
  cars.forEach((adv, index) => {
    if (eu !== index) {
      if (distancia > adv.getDistanciaPecorrida()) minhaPosicaoAgr--
    }
  })
  changePosition(eu, `${minhaPosicaoAgr + 1}° ${pilots[eu].getNome()} [${cars[eu].getModelo()}] - ${(cars[eu].getVelocidadeAtual()).toFixed(0)} km/h <span class='span-porcentagem-lideres'>${(cars[eu].getDistanciaPecorrida() * 100 / limite).toFixed(0)}%</span>`, minhaPosicaoAgr)
}
