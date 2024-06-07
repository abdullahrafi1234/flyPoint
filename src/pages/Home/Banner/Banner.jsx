import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className="lg:mt-8 mt-52 max-w-screen-full  ">
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                // loop={true}
                autoplay={
                    { delay: 5000 }
                }
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <div className="mt-12 bg-blue-900">
                        <div className="hero p-8 rounded-3xl">
                            <div className="hero-content lg:h-[400px] md:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img width={'1050px'} src="/src/assets/hero-area-img.png" className=" rounded-lg" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-8 text-white">Fast Furious <br />
                                        <span className='text-lime-500'>Transport All of
                                        </span> 
                                        <br />
                                        The Logistics
                                    </h1>
                                    <p className='text-white'>We have been operating for over a decade, providing top-notch services to our clients and building a strong track record</p>
                                    <div className=' flex gap-3'>
                                        <button className="btn btn-success text-white font-bold bg-lime-600">Explore More</button>
                                        {/* <Link to={'/add-food'}>
                                            <button className="btn btn-success btn-outline text-white font-bold ">Add Food</button>
                                        </Link> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;