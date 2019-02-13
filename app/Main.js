import React from 'react'
import Nav from './Nav'

const Main = props => {
  const { children } = props
  return (
    <div>
      <Nav />
      <div className="container">
        {
          children
        }
      </div>
    </div>
  )
}

export default Main
