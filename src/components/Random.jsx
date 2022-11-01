import React from 'react'

function Random(props) {
    let randomNumber = Math.floor(Math.random()* props.max)
  return (
    <div style={{border:"1px solid", width:"80%", margin:"5px auto"}}>
        <p>Random value between {props.min} and {props.max} ➡️ {randomNumber}</p>
    </div>
  )
}

export default Random