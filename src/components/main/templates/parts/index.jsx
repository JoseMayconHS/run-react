import React from 'react'

import Main from '../../'

import './css/index.css'

import renderTable from './renders/table'

export default props =>
  <Main title='Peças' subtitle='Veja as peças'>
    <div className='content-parts'>
      <div className='area-tables'>
        <h1>Motores</h1>
        {renderTable('engines')}
      </div>
      <div className='area-tables'>
        <h1>Transmissões</h1>
        {renderTable('transmissions')}
      </div>
      <div className='area-tables'>
        <h1>Rodas</h1>
        {renderTable('whells')}
      </div>
      <div className='area-tables'>
        <h1>Cilindros</h1>
        {renderTable('cylinders')}
      </div>
      <div className='area-tables'>
        <h1>Proteções</h1>
        {renderTable('protections')}
      </div>
    </div>
  </Main>
