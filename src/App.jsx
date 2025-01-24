import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import State from './components/State'
import ApiGet from './components/ApiGet'
import Product from './components/Product'
import NavBar from './components/navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/a" element={<ApiGet/>}/>
        <Route path="/c" element={<Counter/>}/>
        <Route path="/s" element={<State/>}/>
      </Routes>
    </>
  )
}




  


export default App
