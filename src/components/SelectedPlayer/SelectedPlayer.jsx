import PropTypes from 'prop-types';
import Splayer from '../Splayer/Splayer';

const SelectedPlayer = ({player}) => {
    console.log(player)
    const {player_name}=player
    
    return (
        <div>
            <div className='text-3xl text-center font-bold'>Here is your selected player{player_name} </div>
            {
                player.map((player,idx)=><Splayer key={idx} player={player}></Splayer>)
            }
        </div>
    );
};
SelectedPlayer.propTypes={
    player:PropTypes.array
}
export default SelectedPlayer;