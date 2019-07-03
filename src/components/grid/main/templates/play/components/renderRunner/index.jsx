import React from 'react'
import start from './script/engine/index.js'

import './css/index.css'

import Table from './components/table'
import P from './components/p'
import Span from './components/spanSom'

function renderTables(participants) {
  const tables = []

  for (let t = 0; t < participants.length; t++) {
    tables.push(<Table key={t} data={participants[t]} index={t}  />)
  }

  return tables
}

function renderP(p) {
  const ps = []

  for (let i = 0; i < p; i++) {
    ps[i] = <P key={i} id={i} tot={p} />
  }

  return ps
}

function renderSpanSom(s) {
  const sons = []

  for (let ss = 0; ss < s; ss++) {
    sons[ss] = <Span key={ss} id={ss} />
  }

  return sons
}

function setDistance(e) {
  if (document.getElementById('distancia-valor') === null) {
    return 2
  } else {
    return document.getElementById('distancia-valor').value
  }
}

function run(e, data, distance) {
  e.preventDefault()

  start(data, distance)
}

export default ({ participants, data, closeModal }) =>
  <div className='area-runner scroll'>
    <input id='engineRuns' type='hidden' value={participants.length} />
    <div className='display-none'>
      <span id='som-corrida'></span>
      {renderSpanSom(participants.length)}
    </div>
    <div id='lideres-table' className="lideres">
      <div className='titulo-lideranca'>
        <span className='display-time'>00:00:00</span>
        <span className='span-liderea'>Lideres</span>
        <span id='distancia'>define the distance</span>
      </div>
      <div className='liderancas' id="placar">
        {renderP(participants.length)}
      </div>
    </div>
    <div className='area-btn-exit'>
      <input type='button' className='btn-second' value='Back' onClick={closeModal} />
    </div>
    <div className='area-tables-runner'>
      {renderTables(participants)}
    </div>
    <form onSubmit={e => run(e, participants, setDistance())}>
      <div className='area-interacoes'>
        <div className='area-input-distancia'>
          Define the distance: <input id='distancia-valor' type='number' min='2' max='30'  required onChange={setDistance} /> km
        </div>
        <div className='area-btn-actions'>
          <input className='btn-primary' type='submit' value='Start' />
        </div>
      </div>
    </form>
  </div>
