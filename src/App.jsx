

import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Heder from './components/Header/Heder'

function App() {
  const [amount,setAmount]=useState(0)

  const handleAmount=(amount)=>{
    console.log('button clicked')
    const value=60000;
    if(amount>=value){
      return;
    }
    const newAmount=amount+value;
    setAmount(newAmount)
    
    
    
  }
  

  return (
    <>
      
      <Heder amount={amount}></Heder>
      <Banner handleAmount={handleAmount} amount={amount}></Banner>
      
     
    </>
  )
}

export default App
