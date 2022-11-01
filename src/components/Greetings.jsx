import React from 'react'

function Greetings(props) {
  //Con if (Fuera del xml)
  // if (props.lang === "de") {
  //   return(
  //     <p>Hallo {props.children}</p>
  //   ) 
  //   }else {
  //     return (
  //       <p>Bonjour {props.children}</p>
  //     )
  //   }
  


  return( 
    <div style={{border:"1px solid", width:"80%", margin:"5px auto"}}>
    {/* ternario dentro de xml */}
    {props.lang === "de" ? <p>Hallo {props.children}</p> : <p>Bonjour {props.children}</p>}
    </div>
  )
}

export default Greetings