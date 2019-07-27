import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './css/index.css'

import selected from '../../../../../nav/script'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = { class: 'desc-closed', title: props.title, children: props.children, link: props.link, linkLabel: props.linkLabel, selected: props.clickLink }
  }

  changeClass = () => this.setState({ class: this.state.class === 'desc-closed'? 'desc-opened': 'desc-closed' })

  render() {
    return (
      <div className={`card ${this.state.class}`}>
        <span className='title-card'>{ this.state.title } <span className='icon open-desc' onClick={this.changeClass}><i className="fa fa-info"></i></span></span>
        <div className='desc-card scroll'>
          { this.state.children }
        </div>
        <Link to={this.state.link} onClick={() => selected(this.state.selected)}>
          <span className='link-card'>{this.state.linkLabel}</span>
        </Link>
      </div>
    )
  }
}
