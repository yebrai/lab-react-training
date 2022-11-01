import React from 'react';

function BoxColor(props) {
    const {r, g, b} = props
    const color = `rgb(${r}, ${g}, ${b})`
  return (
    <div style={{ display: 'flex', justifyContent:"center", margin:"20px" }}>
      <div style={{border: '1px solid', padding: '5vh', width: '20%', backgroundColor: color}}>
        <p style={{color:"white"}}>{color}</p>
        <p></p>
      </div>
    </div>
  );
}

export default BoxColor;
