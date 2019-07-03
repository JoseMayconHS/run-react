import React from 'react'

export function Th ({ list }) {
  if (list === 'engines') {
    return (
      <tr>
        <th>#</th><th>Name</th><th>Exchange</th><th>Speed</th><th>Acceleration</th><th>Resistance</th><th>Turbo</th>
      </tr>
    )
  }

  if (list === 'transmissions') {
    return (
      <tr>
        <th>#</th><th>Name</th><th>Acceleration</th><th>Speed</th><th>Turbo</th><th>Resistance</th>
      </tr>
    )
  }

  if (list === 'whells') {
    return (
      <tr>
        <th>#</th><th>Name</th><th>Speed</th><th>Acceleration</th><th>Brake</th>
      </tr>
    )
  }

  if (list === 'cylinders') {
    return (
      <tr>
        <th>#</th><th>Name</th><th>Turbo</th><th>Speed</th><th>Acceleration</th><th>Resistance</th>
      </tr>
    )
  }

  if (list === 'protections') {
    return (
      <tr>
        <th>#</th><th>Name</th><th>Resistance</th>
      </tr>
    )
  }

  return <tr><th>Error</th></tr>
}


export function Tb ({ list, data, index }) {
  if (list === 'engines') {
    return (
      <tr>
        <td>{index + 1}</td><td>{data.name}</td><td>{data.exchange}</td><td>{data.speed}</td><td>{data.acceleration}</td><td>{data.resistance}</td><td>{data.turbo}</td>
      </tr>
    )
  }

  if (list === 'transmissions') {
    return (
      <tr>
        <td>{index + 1}</td><td>{data.name}</td><td>{data.acceleration}</td><td>{data.speed}</td><td>{data.turbo}</td><td>{data.resistance}</td>
      </tr>
    )
  }

  if (list === 'whells') {
    return (
      <tr>
        <td>{index + 1}</td><td>{data.name}</td><td>{data.speed}</td><td>{data.acceleration}</td><td>{data.brake}</td>
      </tr>
    )
  }

  if (list === 'cylinders') {
    return (
      <tr>
        <td>{index + 1}</td><td>{data.name}</td><td>{data.turbo}</td><td>{data.speed}</td><td>{data.acceleration}</td><td>{data.resistance}</td>
      </tr>
    )
  }

  if (list === 'protections') {
    return (
      <tr>
        <td>{index + 1}</td><td>{data.name}</td><td>{data.resistance}</td>
      </tr>
    )
  }
}
