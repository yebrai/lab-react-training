import React from 'react';
import Visa from '../assets/images/visa.png'
import Mastercard from '../assets/images/visa.png'
// import Mastercard from '../assets/images/master-card.svg' - No funciona


function CreditCard(props) {
    console.log(props.type)

  return (
    <div style={{ border: '1px solid', backgroundColor: props.bgColor, color: props.color, width:"20%", display:"flex", flexDirection:"column" }}>
      <img src={props.type === "Visa" ? Visa : Mastercard} alt="" width="30px"/>
      <p>{props.number}</p>
      <div style={{display:"flex", margin:"0 40px"}}>
        <p>{props.expirationMonth}/</p>
        <p>{props.expirationYear}</p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>

    </div>
  );
}

export default CreditCard;
