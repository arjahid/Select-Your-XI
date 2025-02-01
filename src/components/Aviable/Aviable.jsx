import PropTypes from 'prop-types';
const Aviable = ({player}) => {
  // const seletPlayer=()=>{
  //   console.log('selected player')
    
  // }
  return (
    <div className="flex  justify-end items-center w-[1420px] h-[72px] ml-10 mt-4 sticky top-10 z-50">
      <button className="text-xl font-semibold  bg-yellow-300 h-12 px-4 py-2 shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out">
        <h2>Available</h2>
      </button>
      <button  className="text-xl font-semibold  bg-gray-300 h-12 px-4 py-2 shadow-md hover:bg-gray-400 transition duration-300 ease-in-out">
        <h2>Selected <span>({player.length})</span> </h2>
      </button>
    </div>
  );
};
Aviable.propTypes = {
  player: PropTypes.array
};

export default Aviable;
