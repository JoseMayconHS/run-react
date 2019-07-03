import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from '../routers'

import 'font-awesome/css/font-awesome.min.css'

import './css/index.css'

import Nav from '../components/grid/nav'
import Footer from '../components/grid/footer'

export default props =>
  <HashRouter>
    <section className='app'>
        <Nav />
        <Routes />
        <Footer />
    </section>
  </HashRouter>
