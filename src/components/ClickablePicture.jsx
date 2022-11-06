import React from 'react'
import { useState } from 'react'
import img from '../assets/images/maxence.png'
import imgClicked from '../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const [glasses, setGlasses] = useState(false)

    const handleImage = () => {
        setGlasses(!glasses)
    }

  return (
    <div>

      <img onClick={handleImage} src={!glasses ? img : imgClicked}/>
    </div>
  )
}

export default ClickablePicture