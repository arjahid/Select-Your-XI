
import PropTypes from 'prop-types';
const Splayer = ({player}) => {
    const {player_name}=player
    return (
        <div>
            <h2>Hi {player_name} </h2>
        </div>
    );
};
Splayer.propTypes={
    player:PropTypes.object
}
export default Splayer;