

const Heder = ({money}) => {
    return (
        <div className='w-[1320px] h-[72px] ml-10 mt-4 flex justify-between items-center p-4 bg-white text-black'>
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

export default Heder;