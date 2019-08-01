import React from 'react'

import data from '../../../../data/index.json'

export function Th({ list }) {
  if (list === 'pilots') {
    return (
      <>
        <tr>
          <th colSpan='5'>Pilotos</th>
        </tr>
        <tr>
          <th>#</th><th>Nome</th><th>Gênero</th><th>Pais</th><th>Nvl</th>
        </tr>
      </>
    )
  } else {
    return (
      <>
        <tr>
          <th colSpan='7'>Carros</th>
        </tr>
        <tr>
          <th>#</th><th>Modelo</th><th>Motor</th><th>Transmissão</th><th>Rodas</th><th>Cilindro</th><th>Proteção</th>
        </tr>
      </>
    )
  }
}

export function Td({ list, indice, element }) {
  if (list === 'pilots') {
    return (
      <tr>
        <td>{indice + 1}</td><td>{element[0]}</td><td>{element[1] === 'M'? 'Masculino': 'Feminino'}</td><td>{element[2]}</td><td>{element[3]}</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{indice + 1}</td><td>{element[0]}</td>
        <td>{data.parts.engines[element[1].engine].name}</td><td>{data.parts.transmissions[element[1].transmition].name}</td>
        <td>{data.parts.whells[element[1].whells].name}</td><td>{data.parts.cylinders[element[1].cylinder].name}</td>
        <td>{data.parts.protections[element[1].protection].name}</td>
      </tr>
    )
  }
}
