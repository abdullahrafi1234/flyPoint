import SectionTitle from "../../Shared/SectionTitle/SectionTile";
import { IoStar } from "react-icons/io5";
import img1 from '../../../assets/banner-1.jpg'
import { IoStarHalf } from "react-icons/io5";

const TopDeliveryMan = () => {
    return (
        <div>
            <SectionTitle heading={'The Top Delivery Man'} subHeading={'Meet our top delivery men who consistently deliver excellence and ensure your parcels reach their destination safely and on time.'}></SectionTitle>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-8 ">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-xl font-bold">Delivery Man</h2>
                        <p className="font-medium">Parcel Delivered: 100+</p>
                        <div className="card-actions items-center font-medium">
                            Ratings:
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStarHalf className="text-lg text-blue-600"></IoStarHalf>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-xl font-bold">Delivery Man</h2>
                        <p className="font-medium">Parcel Delivered: 100+</p>
                        <div className="card-actions items-center font-medium">
                            Ratings:
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStarHalf className="text-lg text-blue-600"></IoStarHalf>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-xl font-bold">Delivery Man</h2>
                        <p className="font-medium">Parcel Delivered: 100+</p>
                        <div className="card-actions items-center font-medium">
                            Ratings:
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStar className="text-lg text-blue-600"></IoStar>
                            <IoStarHalf className="text-lg text-blue-600"></IoStarHalf>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDeliveryMan;