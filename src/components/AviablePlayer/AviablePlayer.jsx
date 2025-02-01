import { useEffect, useState } from "react";


const AviablePlayer = () => {
    const [player,setPlayer]=useState(0)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())  
        .then(data=>setPlayer(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl">Avaiablr Player</h2>
            
        </div>
    );
};

export default AviablePlayer;