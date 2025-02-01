
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Heder from './components/Header/Heder'
import Aviable from './components/Aviable/Aviable';
import AviablePlayer from './components/AviablePlayer/AviablePlayer';

function App() {
 
  const [money,setMoney]=useState(0)

  const handleAddMoney=()=>{
    
    const value=60000;
    if(money>=value){
      return
    }
    toast(`You have successfully claimed 60000 coins`,{
      position:"top-center",
    })
    setMoney(money+value)
  }
  

  return (
    <>
      
      <Heder money={money}></Heder>
      <Banner handleAddMoney={handleAddMoney} money={money} ></Banner>
      <Aviable></Aviable>
      <AviablePlayer></AviablePlayer>
      
      <ToastContainer />
    </>
  )
}

export default App
