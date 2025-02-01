
import PropTypes from 'prop-types';
const Splayer = ({player}) => {
    const {player_name,player_image,batting_style,country}=player
    return (
        <div className='w-auto h-auto ml-10 mt-4 border-2 border-gray-300 p-4 gap-4' >
            <div className='flex items-center gap-6 pt-2'>
                <img className='w-20 rounded-lg' src={player_image} alt="" />
           <div>
           <h2 className='text-2xl font-semibold'> {player_name} </h2>
           <h2 className='text-md'>{batting_style}</h2>
           <h2>Contry: {country}</h2>
           </div>
        </div>
        </div>
    );
};
Splayer.propTypes={
    player:PropTypes.object
}
export default Splayer;