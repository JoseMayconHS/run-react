import React from 'react'

import './css/index.css'

import Main from '../..'
import Card from './components/card'

export default props =>
  <Main title='Início' subtitle='Como o site funciona'>
    <div className='content-home'>
      <Card title='Sobre as peças' link='/parts' linkLabel='Tabela de peças' clickLink='nav-parts'>
        <p>Como peças para um carro, nós temos motores, transmissões, rodas, cilindros e proteção.</p>
        <p>Os mesmos podem auxiliar na velocidade, aceleração, freio e resistencia!</p>
      </Card>
      <Card title='Sobre os usuários' link='/sign' linkLabel='Fazer registro' clickLink={null}>
        <p>Se você for um usuário autenticado, você pode ter seu próprio carro e comprar itens</p>
      </Card>
      <Card title='Sobre o jogo' link='/play' linkLabel='Jogar' clickLink='nav-game'>
        <p>No jogo você pode combinar qualquer piloto com qualquer carro e ver quem ganha!</p>
        <p>- Primeiro você precisa escolher os pilotos e carros, por padrão já ficam dois prontos para a corrida!</p>
        <p>- No minino são dois participantes e no máximo doze!</p>
        <p>- Não podem haver pilotos repetidos!</p>
      </Card>
    </div>
  </Main>
