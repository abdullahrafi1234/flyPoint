
import './Banner.css'



const Banner = () => {
    return (
        <div className="max-w-screen-full mb-16 banner text-start ">
            <div className="hero text-blue-500 rounded-3xl">
                        <div className="hero-content lg:h-[600px] md:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                            {/* <div className="lg:ml-36">
                                    <img width={'1050px'} src="/src/assets/hero-area-img.png" className=" rounded-lg" />
                                </div> */}
                            <div className="space-y-4 ">
                                <h1 className="text-5xl font-bold mb-8 text-white">Fast Furious <br />
                                    <span className='text-lime-500'>Transport All of
                                    </span>
                                    <br />
                                    The Logistics
                                </h1>
                                <p className='text-white'>We have been operating for over a decade, providing top-notch services <br />
                                 to our clients and building a strong track record</p>
                                <div className=' flex gap-3'>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Search" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>


        </div>
    );
};

export default Banner;