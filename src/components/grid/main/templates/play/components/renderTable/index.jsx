import React from 'react'

import { Td, Th } from './components/tr'

import data from '../../data/index.json'


function renderThead(list) {
  return <Th key={1} list={list} />
}

function renderTBody(list) {
  const td = []

  if (list === 'pilots') {
    data.pilots.sort().forEach((element, index) => {
      td.push(<Td key={index} list='pilots' indice={index} element={element} />)
    })
  } else {
    data.cars.sort().forEach((element, index) => {
      td.push(<Td key={index} list='cars' indice={index} element={element} />)
    })
  }
  return td
}

export default (list) =>
  <table className='table-list' cellSpacing='0'>
    <thead>
      {renderThead(list)}
    </thead>
    <tbody>
      {renderTBody(list)}
    </tbody>
  </table>
