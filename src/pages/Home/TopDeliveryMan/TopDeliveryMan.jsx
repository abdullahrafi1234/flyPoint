import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const TopDeliveryMan = ({ man }) => {
    const { deliveredCount, averageRating, photo, name } = man;
    return (
        <div className="mt-8">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="">
                    <img src={photo} alt="Delivery Man pic" className="rounded-full w-48 h-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="font-medium">Parcel Delivered: {deliveredCount}</p>
                    <p className="mb-4 flex gap-2 text-gray-700 mt-1 items-center justify-center">
                        <span>Rating: </span><Rating readonly className="text-primary" emptySymbol={<FaRegStar />} fullSymbol={<FaStar />} initialRating={averageRating}></Rating>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopDeliveryMan;