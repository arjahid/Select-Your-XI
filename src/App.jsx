

import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Heder from './components/Header/Heder'

function App() {
 
  const [money,setMoney]=useState(0)

  const handleAddMoney=()=>{
    console.log('button click',money)
    const value=60000;
    if(money>=value){
      return
    }
    setMoney(money+value)
  }
  

  return (
    <>
      
      <Heder money={money}></Heder>
      <Banner handleAddMoney={handleAddMoney} money={money} ></Banner>
      
     
    </>
  )
}

export default App
