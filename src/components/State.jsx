import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[val,setVal] = useState();
    const inputHandler = (e)=> {
        console.log(e.target.value);
        setVal(e.target.value);
    }

    var[data,setData]=useState();
    const submitHandler = ()=> {
        setData(val);
    };
    
  return (
    <div>
      <Typography variant='h3'> hello{data}</Typography>
      <TextField
      onChange={inputHandler}
      variant='outlined' label='enter your name'></TextField><br /><br />
      <Button variant='contained' onClick={submitHandler}>SUBMIT</Button>
    </div>
  )
}

export default State
