import React from 'react';
import Visa from '../assets/images/visa.png'
import Mastercard from '../assets/images/visa.png'
// import Mastercard from '../assets/images/master-card.svg' - No funciona


function CreditCard(props) {
const {type, number, expirationMonth, expirationYear, bank, owner, bgColor} = props
  let codedNumber = ""

  for (let i = 0; i < number.length -4; i++) {
    codedNumber += "*"
  }

  return (
    <div style={{ border: '1px solid', backgroundColor: bgColor, color: props.color, width:"20%", display:"flex", flexDirection:"column" }}>
      <img src={type === "Visa" ? Visa : Mastercard} alt="" width="30px"/>
      <p>{codedNumber + number.slice(-5)}</p>
      <div style={{display:"flex", margin:"0 40px"}}>
        <p>{expirationMonth}/</p>
        <p>{expirationYear}</p>
        <p>{bank}</p>
      </div>
      <p>{owner}</p>

    </div>
  );
}

export default CreditCard;
