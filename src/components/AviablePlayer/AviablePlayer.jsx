import { useEffect, useState } from "react";

import PropTypes from 'prop-types';
import Aplayers from "../AviablePlayers/Aplayers";



const AviablePlayer = ({handlePlayer}) => {
    const [players,setPlayer]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())  
        .then(data=>setPlayer(data))
    },[])
    return (
        <div className="lg:w-auto lg:h-auto md:w-[1420px] h-auto w-[1220px] ml-10 mt-4 " >
            <h2 className="text-2xl">Avaiable Player:{players.length}</h2>
            <div className="grid grid-cols-3 gap-4 border-2 border-gray-300 p-4">
            
            {
                players.map(player=><Aplayers 
                    key={player.id}
                     player={player}
                     handlePlayer={handlePlayer}
                     ></Aplayers>)
            }
            
            </div>
            
        </div>
    );
};
AviablePlayer.propTypes={
    players:PropTypes.array,
    handlePlayer:PropTypes.func
}
export default AviablePlayer;