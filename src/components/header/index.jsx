import React from 'react'

import './css/index.css'

export default ({ title, subtitle }) =>
  <header className='header'>
    <span className='ala'>{ title }</span>
    <span className='desc'>{ subtitle }</span>
  </header>
