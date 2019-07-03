/* Class carro e piloto */ import { carro, piloto } from '../'
/* Dados */ import data from '../../../../../data/index.json'

export default function (cls, element) {
  const classCarro = carro()
  const classPiloto = piloto()

  if (cls === 'car') {

    const engine = data.parts.engines[element[1].engine]
    const transmition = data.parts.transmissions[element[1].transmition]
    const whells = data.parts.whells[element[1].whells]
    const cylinder = data.parts.cylinders[element[1].cylinder]
    const protection = data.parts.protections[element[1].protection]

    return new classCarro(element[0], { engine, transmition, whells, cylinder, protection })
  } else {
    return new classPiloto(...element)
  }
}
