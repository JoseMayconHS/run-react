import React, { Fragment } from 'react'

function retorneOption(index, nome, marque) {
  if (marque) {
    return <option selected value={index}>{ nome }</option>
  } else {
    return <option value={index}>{ nome }</option>
  }
}

export default ({ index, nome, marque }) =>
  <Fragment>
    {retorneOption(index, nome, marque)}
  </Fragment>
