import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './css/index.css'

import selected from './script'


export default props =>
  <Fragment>
    <label className='label-menu' htmlFor='menu'><i className='fa fa-bars'></i> Menu</label>
    <input className='check-menu display-none' type='checkbox' id='menu' />
    <nav className='nav'>
      <div id='nav' className='nav-defaults'>
        <Link to='/' className='nav-home selected' onClick={() => selected('nav-home')}>
          <span><i className='fa fa-home'></i> Início</span>
        </Link>
        <Link to='/parts' className='nav-parts' onClick={() => selected('nav-parts')}>
          <span><i className="fa fa-wrench"></i> Peças</span>
        </Link>
        <Link to='/play' className='nav-game' onClick={() => selected('nav-game')}>
          <span><i className="fa fa-play"></i> Play</span>
        </Link>
      </div>
      <div className='nav-sign'>
        <Link className='link-sign' to='sign' onClick={selected}>
          <span className='sign'><i className='fa fa-sign-in-alt'></i> Login</span>
        </Link>
      </div>
    </nav>
  </Fragment>
