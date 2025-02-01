import PropTypes from "prop-types";
const Aviable = ({ player }) => {
  // const seletPlayer=()=>{
  //   console.log('selected player')

  // }
  return (
    <div className="lg:w-auto lg:h-auto flex  justify-end items-center md:w-[1420px] h-[72px] w-[1220px] ml-10 mt-4 sticky top-10 z-50 lg:top-16 z-60 lg:pt-4">
      <button className="text-xl font-semibold  bg-yellow-300 h-12 px-4 py-2 shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out">
        <h2>Available</h2>
      </button>
      <button className="text-xl font-semibold  bg-gray-300 h-12 px-4 py-2 shadow-md hover:bg-gray-400 transition duration-300 ease-in-out">
        <h2>
          Selected <span>({player.length})</span>{" "}
        </h2>
      </button>
    </div>
  );
};
Aviable.propTypes = {
  player: PropTypes.array,
};

export default Aviable;
