import React from 'react'

import './css/index.css'
import data from '../../../../data/index.json'

import velocimetro from '../../imagens/importants/velocimetro.png'
import ponteiro from '../../imagens/importants/ponteiro.png'
import cambio_desligado from '../../imagens/importants/cambio_desligado.png'
import chama_nitro from '../../imagens/importants/chama_nitro.gif'

function getForca(car, config) {
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

  if (config.res === 'numero') return power

  if (config.res === 'formatado') {

    const corCategorias = {
      c: 'linear-gradient(100deg, rgb(2, 253, 0), rgb(0, 0, 0), rgb(2, 253, 0))',
      // verde
      r: 'linear-gradient(100deg, rgb(0, 255, 184), rgb(0, 0, 0), rgb(0, 255, 198))',
      // ciano
      s: 'linear-gradient(100deg, rgb(41, 0, 255), rgb(0, 0, 0), rgb(41, 0, 255))',
      // cazul
      ss: 'linear-gradient(100deg, rgb(230, 0, 255), rgb(0, 0, 0), rgb(230, 0, 255))',
      // roxo
      a: 'linear-gradient(100deg, rgb(255, 0, 0), rgb(0, 0, 0), rgb(255, 0, 0))'
      // vermelho
    }

    function retorneLetra() {
      if (power < 451) {
        return 'C'
      } else if (power < 501) {
        return 'R'
      } else if (power < 551) {
        return 'S'
      } else if (power < 601) {
        return 'SS'
      } else {
        return 'A'
      }
    }
    setTimeout(() => document.getElementById(`categoria${config.index}`).style.background = corCategorias[retorneLetra().toLowerCase(power)], 1000)
    return `[${retorneLetra(power)}]`
  }

  if (config.res === 'attr') {
    const info = [attributeSpeed, attributeAcceleration, attributeResistance, attributeTurbo]

    return info[config.value]
  }
}

export default ({ data, index }) =>
  <table id={`table_carro${index}`} className='participantes' cellPadding='0' cellSpacing='0'>
    <thead>
      <tr><th colSpan='2'>{data.pilot[0]} nvl {data.pilot[3]}</th></tr>
    </thead>
    <tbody>
      <tr>
        <td className='td-principal' id={`td-velocimetro${index}`}>
          <div className={`aproveitamento aproveitamento${index}`}></div>
          <img className='velocimetro' src={velocimetro} alt='velocimetro' />
          <div id={`ponteiro${index}`} className='div-ponteiro'>
            <img className='ponteiro' src={ponteiro} alt='ponteiro' />
          </div>
          <span id={`velocidade${index}`} className='velocidade'>0 km/h</span>
        </td>
        <td id={`td-cambio-${index}`}>
          <div className={`aproveitamento aproveitamento${index}`}></div>
          <span className='quebra' id={`quebra${index}`}></span>
          <img id={`cambio${index}`} className='cambio' src={cambio_desligado} alt='cambio' />
          <span id={`categoria${index}`} className='categoria' title='Car quality'>{getForca(data.car, { res: 'formatado', index })}</span>
          <div id={`div-nitro${index}`} className="nitro">
            <span id={`nitro${index}`} className='barras-nitros'>
              <img id={`chama${index}`} src={chama_nitro} alt='chama do nitro' />
            </span>
            <span className='efeito-barra-nitro'></span>
          </div>
        </td>
      </tr>
      <tr className='tr-base'>
        <td id={`distancia${index}`} className="td-menor">0.000 m</td>
        <td id={`modelo${index}`} className='nomes-modelos'>{data.car[0]} <span><i className="fa fa-eye"></i></span>
          <div id={`info-rapida-carro${index}`} className='info-rapida'>
            <div id={`info-rapida-velocidade${index}`}>Vel.: {getForca(data.car, { res: 'attr', value: 0 })} km/h</div>
            <div id={`info-rapida-aceleracao${index}`}>Ace.: {getForca(data.car, { res: 'attr', value: 1 })} cav.</div>
            <div id={`info-rapida-resistencia${index}`}>Res.: {getForca(data.car, { res: 'attr', value: 2 })} pt</div>
            <div id={`info-rapida-turbo${index}`}>Turbo: {getForca(data.car, { res: 'attr', value: 3 })} lt</div>
            <div id={`info-rapida-forca${index}`}>FC: {getForca(data.car, { res: 'numero'})} k</div>
          </div>
        </td>
      </tr>
      <tr className='tr-base'>
        <td id={`grau${index}`} className="grau" colSpan="2">
          <span></span>
        </td>
      </tr>
    </tbody>
  </table>
