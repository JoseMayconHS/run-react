import React from 'react'

export default ({ divClass, id, type, name, label }) =>
  <div className={divClass}>
    <input className='input' id={id} type={type} name={name} min='3' required /><label for={id}>{label}</label>
  </div>
