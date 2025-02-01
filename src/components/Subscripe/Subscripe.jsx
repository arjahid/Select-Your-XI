const Subscripe = () => {
  return (
    <div className="w-[1420px] h-[400px] ml-10 mt-4  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="text-white mt-8">
            <h2 className="text-2xl font-bold text-center pt-24">Subscribe Our NewsLater</h2>
            <h2 className="text-xl text-center pt-4">Get the letest updates and news right in your inbox!</h2>
        </div>
      <div className="join flex justify-center items-center mt-12">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full bg-gradient-to-r from-purple-400 via-pink-300 to-red-300">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscripe;
