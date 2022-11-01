import React from 'react'
import Rating from './Rating'

function DriverCard(props) {
    return (
        <div className="driverCard" style={{ border: '1px solid', backgroundColor: "blue", width:"20%", display:"flex", flexDirection:"row", margin:"0 auto"}}>
          <img className='driverPicture' src={props.img} alt="Profile" width="50%"/>
          <div>
            <h3>{props.name}</h3>
            <Rating>{props.rating}</Rating>
            <span>{props.car.model} - </span>
            <span>{props.car.licensePlate}</span>
          </div>
        </div>
      );
    }
    

export default DriverCard