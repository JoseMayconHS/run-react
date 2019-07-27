import React from 'react'
import data from '../../data/index.json'
import Option from './components/option'

import './css/index.css'

function renderOption(select, condicao, limite, selected = undefined) {
  const options = []
  if (select === 'pilots') {
    data.pilots.sort().forEach((pilot, index) => {
      let marque = false
      if (selected === index) marque = true
      if (pilot[1] === condicao) options.push(<Option key={index} index={index} nome={pilot[0]} marque={marque} />)
    })
    return options
  } else {
    data.cars.sort().forEach((car, index) => {
      let marque = false
      const engine = data.parts.engines[car[1].engine]
      const transmition = data.parts.transmissions[car[1].transmition]
      const whells = data.parts.whells[car[1].whells]
      const cylinder = data.parts.cylinders[car[1].cylinder]
      const protection = data.parts.protections[car[1].protection]

      const attributeSpeed = engine.speed + transmition.speed + whells.speed + cylinder.speed
      const attributeAcceleration = engine.acceleration + transmition.acceleration + whells.acceleration + cylinder.acceleration
      const attributeTurbo = transmition.turbo + cylinder.turbo + engine.turbo
      const attributeResistance = protection.resistance + engine.resistance + transmition.resistance - cylinder.resistance

      const power = attributeSpeed  + attributeAcceleration + (attributeResistance * 2) + (attributeTurbo * 4)

      if (power > condicao && power <= limite) {
        if (index === selected) marque = true
        options.push(<Option key={index} index={index} nome={car[0]} marque={marque} />)
      }
    })
    return options
  }

}

export default ({ index, valueC, valueP }) =>
  <div id={`div-select${index}`} className='area-select'>
    <div className='select'>
      <span className='title-select'>Carro </span>
      <select id={`c${index}`}>
        <optgroup label='[C]'>
          {renderOption('cars', 0, 450, valueC)}
        </optgroup>
        <optgroup label='[R]'>
          {renderOption('cars', 450, 500, valueC)}
        </optgroup>
        <optgroup label='[S]'>
          {renderOption('cars', 500, 550, valueC)}
        </optgroup>
        <optgroup label='[SS]'>
          {renderOption('cars', 550, 600, valueC)}
        </optgroup>
        <optgroup label='[A]'>
          {renderOption('cars', 600, 1000, valueC)}
        </optgroup>
      </select>
    </div>
    <div className='select'>
      <span className='title-select'>Piloto </span>
      <select id={`p${index}`}>
        <optgroup label='Man'>
          {renderOption('pilots', 'M', null, valueP)}
        </optgroup>
        <optgroup label='Women'>
          {renderOption('pilots', 'F', null, valueP)}
        </optgroup>
      </select>
    </div>
  </div>
