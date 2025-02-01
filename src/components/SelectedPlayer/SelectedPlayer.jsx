import PropTypes from 'prop-types';
import Splayer from '../Splayer/Splayer';

const SelectedPlayer = ({player}) => {
    console.log(player)
    const {player_name}=player
    return (
        <div>
            <div>here is your selected player{player_name} </div>
            {
                player.map(player=><Splayer player={player}></Splayer>)
            }
        </div>
    );
};
SelectedPlayer.propTypes={
    player:PropTypes.array
}
export default SelectedPlayer;