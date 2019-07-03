import React from 'react'

import data from '../../../play/data/index.json'

import { Th, Tb } from './components/tr'

function renderThead(item) {
  return <Th key={1} list={item} />
}

function renderTbody(item) {
  const tb = []

  data.parts[item].forEach((element, index) => tb.push(<Tb key={index} list={item} data={element} index={index} />))

  return tb
}

export default item =>
  <table className='table-list' cellSpacing='0'>
    <thead>
      {renderThead(item)}
    </thead>
    <tbody>
      {renderTbody(item)}
    </tbody>
  </table>
