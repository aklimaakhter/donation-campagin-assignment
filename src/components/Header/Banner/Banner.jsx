import bannerImage from "../../../assets/images/background-image.jpg"

const Banner = () => {
    return (
        <div className=''>
            <div className="hero " >
                <div className="relative w-full ">
                    <img className="w-full h-[60vh]" src={bannerImage} alt="" />
                </div>
                <div className="hero-overlay h-[60vh] bg-opacity-80 absolute "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                        {/* <input type="text" placeholder="Search here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="button" value="Search" className="btn bg-red-500" /> */}
                                                
                        {/* <input className="w-[400px] p-3" type="text" placeholder="Search here..." />
                        <button className="btn bg-red-500"><input type="submit" value="Search" /></button> */}
                       
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;