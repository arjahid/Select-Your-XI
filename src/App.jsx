
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Heder from './components/Header/Heder'
import Aviable from './components/Aviable/Aviable';
import AviablePlayer from './components/AviablePlayer/AviablePlayer';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';
import Subscripe from './components/Subscripe/Subscripe';
import Footer from './components/Footer/Footer';

function App() {
 
  const [money,setMoney]=useState(0)
  const [players,setPlayers]=useState([])
  const[view,setView]=useState('Avaiable')
  // const [player,setPlayers]=useState([])
  
  
// ^handle add money on main balance
  const handleAddMoney=()=>{
    
    const value=10000000;
    if(money>=value){
      return
    }
    toast(`You have successfully claimed 10000000 coins`,{
      position:"top-center",
    })
    setMoney(money+value)
  }
  // ^handle player buying
  const handlePlayer=(player)=>{
    const{price,player_name}=player
    console.log('player click', price);
if (money >= price) {
  setMoney(money - price);
  
  toast(`Congrats !!${player_name} is now your squad `, {
    position: "top-center",
  });
  setPlayers([...players, player]);
  if(players.length>=11 ){
    toast(`You have selected 11 players`, {
      position: "top-center",
    });
  }

} else {
  toast(`You do not have enough money`, {
    position: "top-center",
  });
}



}


  return (
    <>
      
      <Heder  money={money}></Heder>
      <Banner handleAddMoney={handleAddMoney} money={money} ></Banner>
      <Aviable player={players} setView={setView}  ></Aviable>
      <AviablePlayer handlePlayer={handlePlayer}></AviablePlayer>
      <SelectedPlayer player={players}></SelectedPlayer>
      <Subscripe></Subscripe>
      <Footer></Footer>
      
      
      <ToastContainer />
     
    </>
  )
}

export default App
