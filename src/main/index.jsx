import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from '../routers'

import 'font-awesome/css/font-awesome.min.css'

import './css/index.css'

import Nav from '../components/nav'
import Footer from '../components/footer'

export default () =>
  <HashRouter>
    <section className='app'>
        <Nav />
        <Routes />
        <Footer />
    </section>
  </HashRouter>
