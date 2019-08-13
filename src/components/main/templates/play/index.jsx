import React, { Component } from 'react'
import Modal from 'react-awesome-modal'
import data from './data/index.json'
import fast_info from './script/fast_info/index.js'

import './css/index.css'
import slide from './script/slide'
import getTurno from './script/slide/getTurno'
import getDate from './script/slide/getDate'
import removeTableRed from './script/removeTableRed'
import setKeys  from './script/setKeys'
import start from './script/backgroundImageTable'


import Main from '../../'
import Select from './components/renderSelect'
import Table from './components/renderTable'
import Runner from './components/renderRunner'

const initialState = {
  equals: false,
  message: 'Escolha os participantes',
  labelBtnSubmit: 'Próximo passo!',
  started: false,
  random: false,
  runner: false,
  pilots: 2,
  keys: {
    cars: [0, 1],
    pilots: [8, 11]
  }
}

export default class Play extends Component {
  constructor(props) {
    super(props)

    const participants = []

    for (let p = 0; p < initialState.pilots; p++) {
      const car = data.cars[initialState.keys.cars[p]]
      const pilot = data.pilots[initialState.keys.pilots[p]]

      participants.push({
        car, pilot
      })
    }

    this.state = { ...initialState, participants }
  }

  componentDidMount = () => {
    slide()
    start()
  }

  openModal = e => this.setState({ runner: true })

  closeModal = e => this.setState({ runner: false })

  run = e => {
    e.preventDefault()
    this.setState({ keys: setKeys(this.state.pilots) })

    const participants = []

    for (let p = 0; p < this.state.pilots; p++) {
      const car = data.cars[document.getElementById(`c${p}`).value]
      const pilot = data.pilots[document.getElementById(`p${p}`).value]

      participants.push({
        car, pilot
      })
    }

    let tabelaInvalida = -1
    setKeys(this.state.pilots).pilots.forEach((keyBefore, index1) => {
      let validacao = []

      setKeys(this.state.pilots).pilots.forEach((keyAfter, index2) => {
        if (index1 !== index2) {
          if (keyBefore === keyAfter) validacao.push('Iguais')
          else validacao.push('diferentes')
        }
      })

      if (validacao.indexOf('Iguais') !== -1) tabelaInvalida = index1
    })


    if (tabelaInvalida !== -1) {
      this.setState({ equals: true })

      this.changeMessage('Existe pilotos iguais!')

      const select = document.getElementById(`p${tabelaInvalida}`)

      select.classList.add('pilot-invalid')
      select.addEventListener('change', () => {
        select.classList.remove('pilot-invalid')
        this.changeMessage('Escolha os participantes')
      })
    } else {
      this.setState({ participants, equals: false, random: false })
      removeTableRed()

      this.openModal()
      setTimeout(fast_info, 1000)
    }
  }

  changeMessage = message => {
    this.setState({ message })
  }

  runStop = () => {
    this.setState({ started: !this.state.started, labelBtnSubmit: !this.state.started? 'Voltar à corrida!': 'Próximo passo!' })
    return true
  }

  updateSelects = e => {
    if (e.target.value > 12 || e.target.value < 2) return

    removeTableRed()

    setTimeout(start, 500)

    this.setState({ pilots: e.target.value , equals: this.state.random? true: false, keys: setKeys(this.state.pilots) })
  }

  setRandom = () => {
    removeTableRed()
    setTimeout(start, 500)

    let randomPilots = Math.ceil(Math.random() * 12)
    if (randomPilots < 2) randomPilots = 2
    this.setState({ random: true, pilots: randomPilots, equals: false, message: 'Escolha os participantes' })
  }

  renderSelect = () => {
    const selects = []

    if (!this.state.equals) {
      if (this.state.random) {

        for (let p = 0; p < this.state.pilots; p++) {
          const indiceCar = Math.ceil(Math.random() * (data.cars.length - 1))
          const indicePilot = Math.ceil(Math.random() * (data.pilots.length - 1))

          selects.push(<Select key={p} index={p} valueC={indiceCar} valueP={indicePilot} />)
        }

      } else {

        for (let s = 0; s < this.state.pilots; s++) {
          selects.push(<Select key={s} index={s} valueC={+this.state.keys.cars[s]} valueP={+this.state.keys.pilots[s]} />)
        }

      }

    } else {

      for (let p = 0; p < this.state.pilots; p++) {
        selects.push(<Select key={p} index={p} valueC={+this.state.keys.cars[p]} valueP={+this.state.keys.pilots[p]} />)
      }

    }

    return selects
  }

  render() {
    return (
      <Main title='Jogo' subtitle='Aproveite o jogo' className='scroll'>
        <div className='content-play'>
          <div className='tittle-content'>
            <span className='legend-content'>Corrida</span>
            <div className='area-slide'>
              <span className='apresentacao-slide'>{getTurno()}, bem-vindo ao meu site.</span>
              <span className='apresentacao-slide'>Me chamo José Maycon e tenho {new Date().getFullYear() - 2000} anos de idade.</span>
              <span className='apresentacao-slide'>Hoje é: {getDate()}</span>
            </div>
          </div>
          <form className='form-definir-participantes' onSubmit={this.run}>
            <div className='area-qtd-select'>
              <div className='sub-area-qtd-select'>
                Participantes <input type='number' min='2' max='12' onChange={this.updateSelects} />
              </div>
            </div>
            <div className='area-selects'>
              {this.renderSelect()}
            </div>
            <div className='area-submit-content-play'>
              <div>{this.state.message}</div>
              <div>
                <input type='button' className='btn-second' value='Aleatório' onClick={this.setRandom} /> <input type='submit' className='btn-primary' value={this.state.labelBtnSubmit} />
              </div>
            </div>
          </form>
          <div className='area-tables'>
            {Table('pilots')}
            {Table('cars')}
          </div>
          <Modal visible={this.state.runner} width='1000' height='600' effect='fadeInUp' onClickAway={this.closeModal}>
            <Runner participants={this.state.participants} btn={this.state.started} runStop={this.runStop} closeModal={this.closeModal} />
          </Modal>
        </div>
      </Main>
    )
  }
}
