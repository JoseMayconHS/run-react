import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import Main from '../..'
import Register from './modal/register'
import ForgotModal from './modal/forgot'

import './css/index.css'

const initialState = {
  user: {
    ['data-email']: '',
    ['data-password']: ''
  },
  forgot: {
    ['data-email']: '',
    ['data-password']: ''
  },
  register: {
    ['data-name']: '',
    ['data-email']: '',
    ['data-password']: ''
  }
}

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: {
        visible: false,
        message: 'Complete o formulário'
      },
      forgot: {
        visible: false,
        message: 'Complete o formulário'
      },
      sign: {
        message: 'Complete o formulário'
      },
      data: {
        sign: { ...initialState.user },
        register: { ...initialState.register },
        forgot: { ...initialState.forgot }
      }
    }
  }

  submit = (e) => {
    e.preventDefault()
    if (e.target.name === 'sign') {

      const email = this.state.data.sign['data-email']
      const password = this.state.data.sign['data-password']
      const sign = this.state.sign
      if (email === 'a@a') {
        if (password === '123') {
          sign.message = 'Sucesso!'
        } else {
          sign.message = 'Senha inválida'
        }
      } else {
        sign.message = 'Email inválido'
      }

      this.setState({ sign })

    }

    if (e.target.name === 'register') {

      const nome = this.state.data.register['data-name']
      const email = this.state.data.register['data-email']
      const senha1 = this.state.data.register['data-password']
      const senha2 = document.getElementById('senha2').value
      const register = this.state.register
      if (senha1.length > 8) {
        if (senha1 === senha2) {
          document.getElementById('senha2').classList.remove('input-danger')
          register.message = 'Registrado'
        } else {
          document.getElementById('senha2').classList.add('input-danger')
          register.message = 'Senhas diferentes'
        }
      } else {
        register.message = 'Senha pequena'
      }

      this.setState({ register })
    }

    if (e.target.name === 'forgot') {
      const email = this.state.data.forgot['data-email']
      const password = this.state.data.forgot['data-password']
      // const password2 = document.getElementById('senhaesquecida2').value
      const forgot = this.state.forgot

      if (password.length > 8) {
        forgot.message = 'Confirme em seu email...'
      } else {
        forgot.message = 'Nova senha pequena'
      }

      this.setState({ forgot })
    }
  }

  setData = (e, f) => {
    const data = {...this.state.data}
    if (f === 1) {
      data.sign[e.target.name] = e.target.value
    } else if (f === 2) {
      data.register[e.target.name] = e.target.value
    } else {
      data.forgot[e.target.name] = e.target.value
    }

    this.setState({ data })
    console.log(this.state)
  }

  openModal = (modal) => {
    const state = this.state
    if (modal === 'register') {
      state.register.visible = true
    } else {
      state.forgot.visible = true
    }

    this.setState({ ...state })
  }


  closeModal = (modal) => {
    const state = this.state
    if (modal === 'register') {
      state.register.visible = false
    } else {
      state.forgot.visible = false
    }

    this.setState({ ...state })
  }

  render() {
      return (
        <Main title='Login' subtitle='Faça sua autenticação'>
          <div className='content-sign'>
            <form name='sign' className='area-form' onSubmit={this.submit}>
              <div className='area-header'>
                <span className='title-form'>Login</span><span className='message'> { this.state.sign.message } </span>
              </div>
              <hr />
              <div className='area-input'>
                <input className='input' id='email' type='email' name='data-email' required onChange={e => this.setData(e, 1)} /><label htmlFor='email'>Email</label>
              </div>
              <div className='area-input'>
                <input className='input' id='senha' type='password' name='data-password' required onChange={e => this.setData(e, 1)} /><label htmlFor='senha'>Senha</label>
              </div>
              <div className='area-submit'>
                <input className='btn-primary' type='submit' value='Entrar' />
                <input className='btn-second' type='button' value='Nova conta!' onClick={() =>this.openModal('register')} />
              </div>
              <span className='esqueci-senha' onClick={() => this.openModal('forgot')}>Esqueci a senha</span>
            </form>
          <Modal visible={this.state.register.visible} width="400" height="300" effect="fadeInDown" onClickAway={() => this.closeModal('register')}>
            <Register message={this.state.register.message} setData={this.setData} submit={this.submit} closeModal={this.closeModal} />
          </Modal>
          <Modal visible={this.state.forgot.visible} width='400' height='300' effect='fadeInDown' onClickAway={() => this.closeModal('forgot')}>
            <ForgotModal message={this.state.forgot.message} setData={this.setData} submit={this.submit} closeModal={this.closeModal} />
          </Modal>
          </div>
        </Main>
    )
  }
}
