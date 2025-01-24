import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var[count,setcount]= useState(0) 
  const incCount = () =>{
    setcount(++count);
  };
  const decCount =()=>{
    setcount(--count);
  }
  return (
    <div>
      <Typography variant='h3'>COUNTER</Typography>
      <Typography variant='h3'>{count}</Typography>
      <Button variant='contained' onClick={incCount}>+</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={decCount}>-</Button><br /><br />
    </div>
  )
}

export default Counter
