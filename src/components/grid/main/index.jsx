import React from 'react'

import './css/index.css'

import Header from '../header'

export default props =>
  <main className='main scroll'>
    <Header {...props} />
    <article id='article' className='article'>
      { props.children }
    </article>
  </main>
