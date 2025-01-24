import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <Box sx={{flexGrow:1}}>
        <AppBar position='static' style={{backgroundColor:"teal"}}>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{flexGrow:1}}>My App</Typography>
                <Button><Link to={'/'}style={{color:'white'}}>Product</Link></Button>
                <Button><Link to={'/a'}style={{color:'white'}}>ApiGet</Link></Button>
                <Button><Link to={'/c'}style={{color:'white'}}>Counter</Link></Button>
                <Button><Link to={'/s'}style={{color:'white'}}>State</Link></Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default NavBar

