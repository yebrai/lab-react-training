import React from 'react';

function IdCard(props) {
  return (
    <div style={{border:"1px solid",margin:"50px auto", width:"80%", height:"50%",display:"flex" }}>
      <img src={props.picture} alt="id-pic" height="250vh" style={{margin:"auto 10px"}}/>
      <div style={{display:"flex", flexDirection:"column", textAlign:"start"}}>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
