import PropTypes from 'prop-types';
import banner from '../../assets/img/bg-shadow.png';
const Banner = ({handleAddMoney,money}) => {
    return (
        <div className='lg:w-auto lg:h-auto md:w-[1420px] md:h-[545px] w-[1220px] ml-10 mt-4'>
        <div style={{ 
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '500px', 
            // color: 'white', 
            //  display: 'flex', 
            // alignItems: 'center', 
            justifyContent: 'center' 
        }}>
           <div className='flex justify-center items-center'> 
            <img className='max-w-full h-auto ' src="/src/assets/img/banner-main.png" alt="" />
            </div>
           <div>
           <h2 className='text-black text-2xl text-center pt-6'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
           <h2 className='text-black text-center pt-6'>Beyond Boundaries Beyond Limits</h2>
           <div className='flex justify-center pt-6'>
           <button onClick={()=>handleAddMoney(money)}  className= "bg-yellow-400 border-2 border-yellow-500 text-black font-bold py-2 px-4 rounded shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out">
  Claim Free Credit
</button>
           </div>

           </div>
        </div>
  
        </div>

    );
};
Banner.propTypes={
    handleAddMoney:PropTypes.func,
    money:PropTypes.number
}
export default Banner;