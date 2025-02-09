import PropTypes from 'prop-types';

const Heder = ({money}) => {
    return (
        <div className='lg:w-auto lg:h-auto md:w-[1420px] md:h-[72px] w-[1220px] h-auto md:ml-10 md:mt-4 ml-8 mt-4 flex justify-between items-center p-4 bg-gradient-to-r from-white via-pink-300 to-red-300 text-black sticky top-0 z-50'>
           <div>
                    <img src="/src/assets/img/logo.png" alt="" />
           </div>
           <div className='flex space-x-4 items-center'>
            <ul className='flex space-x-7 text-lg' >
                <li>Home</li>
                <li>Fixure</li>
                <li>Schedule</li>
                <li> Team</li>
                
            </ul>
            <div className="border flex justify-between items-center p-2 rounded-lg space-x-2">
        <p className="text-black text-2xl">{money}</p>
        <img className="w-5" src="/src/assets/img/dollar.png" alt="dollar" />
       <p className="text-xl"> Coin</p>
    </div>

           </div>
        </div>
    );
};
Heder.propTypes={
    money:PropTypes.number
}

export default Heder;