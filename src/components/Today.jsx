import React from 'react'

const Today = () => {
    const date = new Date();
    const today = date.toDateString()

  return (
    <div><p>{today}</p></div>
  )
}

export default Today