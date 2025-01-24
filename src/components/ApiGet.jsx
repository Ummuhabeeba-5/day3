import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
    var[data,setData]=useState([])
      // axios.get("url").then().catch();
      // useEffect(() => {axios.get("url").then().catch();},[])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
        setData(res.data)
    })
    .catch((err)=>console.log(err))
  },[])
    

  return (
    <div>
     <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>City</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.email}</TableCell>
                            <TableCell>{val.city}</TableCell>
                        </TableRow>
                    )
                }
                )}
            </TableBody>
        </Table>
     </TableContainer>
    </div>
  )
}

export default ApiGet
