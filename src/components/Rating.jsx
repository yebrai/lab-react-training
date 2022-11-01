import React from 'react'

function Rating(props) {
 let roundedProp =Math.round(props.children)

  return (
    <div>
        {roundedProp === 0 && <p>☆☆☆☆☆</p>}
        {roundedProp === 1 && <p>★☆☆☆☆</p>}
        {roundedProp === 2 && <p>★★☆☆☆</p>}
        {roundedProp === 3 && <p>★★★☆☆</p>}
        {roundedProp === 4 && <p>★★★★☆</p>}
        {roundedProp === 5 && <p>★★★★★</p>}
    </div>
  )
}

export default Rating