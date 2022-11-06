import React from 'react'
import { useState } from 'react'

function LikeButton() {

    const [likesButton, setLikesButton] = useState(0)
    const [likesButton2, setLikesButton2] = useState(0)
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const handleButton = () => {
        setLikesButton(likesButton + 1)
        setCounter(counter + 1)
        restartCounter()
        
    }
    const handleButton2 = () => {
        setLikesButton2(likesButton2 + 1)
        setCounter2(counter2 + 1)
        restartCounter2()
    }

    const colorButton = ['purple','blue','green','yellow','orange','red']
    const setColorButton = colorButton[counter]
    const setColorButton2 = colorButton[counter2]

    const restartCounter = () => {
    if (counter >= 5) {
        setCounter(0)
    }   else {setCounter(counter + 1)}
  }
  const restartCounter2 = () => {
    if (counter2 >= 5) {
        setCounter2(0)
    }   else {setCounter2(counter2 + 1)}
  }



  return (
    
    <div >
        <button style={{margin: "20px", backgroundColor:setColorButton}} onClick={handleButton}>{likesButton} Likes</button>
        <button style={{margin: "20px", backgroundColor:setColorButton2}} onClick={handleButton2}>{likesButton2} Likes</button>
    </div>
  )
}

export default LikeButton