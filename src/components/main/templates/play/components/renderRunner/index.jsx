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

function run(e, data, distance, started, runStop) {
  e.preventDefault()

  const div = document.querySelector('.area-btn-actions')
  div.style.pointerEvents = 'none'
  const btn = Array.from(div.childNodes)
  btn[0].classList.toggle('btn-cancel')
  const time = !started? 3000: 200
  setTimeout(() => div.style.pointerEvents = 'painted', time)

  start(data, distance, runStop)
}

export default ({ participants, btn, runStop, closeModal }) =>
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
        <span id='distancia'>indefinida</span>
      </div>
      <div className='liderancas' id="placar">
        {renderP(participants.length)}
      </div>
    </div>
    <div className='area-btn-exit'>
      <input type='button' className='btn-second' value='Voltar' onClick={closeModal} />
    </div>
    <div className='area-tables-runner'>
      {renderTables(participants)}
    </div>
    <form onSubmit={e => runStop() && run(e, participants, setDistance(), btn, runStop)}>
      <div className='area-interacoes'>
        <div className='area-input-distancia'>
          Defina a distância: <input id='distancia-valor' type='number' min='2' max='30'  required onChange={setDistance} /> km
        </div>
        <div className='area-btn-actions'>
          <input className='btn-primary' type='submit' value={!btn? 'Começar': 'Parar'} />
        </div>
      </div>
    </form>
  </div>
