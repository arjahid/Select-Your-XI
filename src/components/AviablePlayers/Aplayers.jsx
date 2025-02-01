import PropTypes from 'prop-types';

const Aplayers = ({player,handlePlayer}) => {
    const {player_name,player_image,country,rating,category,price}=player
    return (
        <div className='w-auto h-auto ml-10 mt-4 border-2 border-gray-300 p-4 gap-4' >
             <div className=''>
             <img src={player_image} alt={player_name} className="w-auto h-auto   object-cover mr-4" />
             <h2 className='flex items-center gap-2 pt-2'><img className='w-9' src="/src/assets/img/profile.png" alt="" />{player_name}</h2>
            <div className='flex items-center justify-between gap-2 pt-3'>
            <h2 className='flex gap-2 pt-2 items-center'><img className='w-6' src="/src/assets/img/finish.png" alt="" />{country}</h2>
            <button className='ml-12 bg-gray-200 border-spacing-2 rounded-lg px-4 py-2 text-sm font-semibold text-black-500 hover:bg-blue-100 shadow-md'>Batsman</button>

            </div>
            <div className='border-b-2 pt-3'></div>
            <div>
                <h2>Rating: {rating}</h2>
                <h2>{category}</h2>
                <div className='flex items-center justify-between gap-2 pt-3'>
                    <h2>Price: {price}</h2>
                    <button onClick={()=>handlePlayer(player)} className='ml-12 bg-gray-200 border-spacing-2 rounded-lg px-4 py-2 text-sm font-semibold text-black-500 hover:bg-yellow-300 shadow-md'>Chose Player</button>
                </div>
                
            </div>
             </div>
        </div>
    );
};
Aplayers.propTypes={
    player:PropTypes.object
}
export default Aplayers;