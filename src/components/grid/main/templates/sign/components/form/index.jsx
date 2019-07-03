import React from 'react'

export default props =>
  <form className='area-form' onSubmit={props.submit}>
    {props.children}
  </form>
