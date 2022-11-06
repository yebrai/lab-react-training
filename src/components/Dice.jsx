import React from 'react'
import { useState } from 'react'
import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {
    const randomNumber = Math.floor(Math.random() * 6)
    const imgArr = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomDice = imgArr[randomNumber]

    const [diceInput, setDiceInput] = useState(randomDice)
    
    console.log(randomNumber);

    
    const handleDice = () => {
        setDiceInput(emptyDice)
        setTimeout(() => {
            setDiceInput(randomDice)         
        }, 1000)
    }


    

  return (
    <div>
    <img src={diceInput} onClick={handleDice} alt="" style={{margin: "100px", height:"200px"}}/>

    </div>
  )
}

export default Dice