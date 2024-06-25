import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ReviewCard = ({ review }) => {

    return (
        <div className="flex justify-center gap-2 flex-col mt-6 border rounded-2xl p-6">
            <img src={review.userImage} alt="" className=" mx-auto rounded-full w-16 h-16" />
            <p className="text-center text-lg font-medium">{review.userName}</p>
            <p className="text-center text-sm">{review.feedback}</p>
            <div className="flex flex-col items-center gap-2 justify-center text-sm">
                <p>{review.reviewDate}</p>
                
                <Rating
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar />}
                    readonly
                    initialRating={review.rating}
                />
            </div>
        </div>
        // <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure className="px-10 pt-10">
        //         <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">Shoes!</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ReviewCard;