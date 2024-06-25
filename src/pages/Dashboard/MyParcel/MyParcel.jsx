import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useParcel from "../../../Hooks/useParcel";
import SectionTitle from "../../Shared/SectionTitle/SectionTile";
import { FaEdit, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import useAuth from "../../../Hooks/useAuth";
import Rating from "react-rating";



const MyParcel = () => {
    const [parcel, refetch] = useParcel()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const MySwal = withReactContent(Swal);

    const handleUpdate = (id) => {
        // console.log(id)
        axiosSecure.patch(`/booking/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    // console.log('updated')
                }
            })
    }
    const handleCancel = (id) => {

        const updateStatus = {
            status: 'Cancelled'
        }
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/bookings/${id}`, updateStatus)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Canceled!",
                                text: "Parcel Status Updated.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleReview = (item) => {
        let ratingValue = 0;
        MySwal.fire({
            title: 'Review',
            html: (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 items-center">
                        <label>User’s Name:</label>
                        <input
                            type="text"
                            id="userName"
                            value={user.displayName}
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <label>User’s Image:</label>
                        <input
                            type="text"
                            id="userImage"
                            value={user.photoURL}
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <label>Rating:</label>
                        <Rating
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            onChange={(value) => ratingValue = value}
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <label>Feedback:</label>
                        <textarea id="feedback" />
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <label>Approx. Delivery Date:</label>
                        <input
                            type="text"
                            id="deliveryManID"
                            value={item.deliveryManID}
                        />
                    </div>
                </div>
            ),
            showCancelButton: true,
            confirmButtonText: 'Review',
            preConfirm: () => {
                const userName = document.getElementById('userName').value;
                const userImage = document.getElementById('userImage').value;
                const feedback = document.getElementById('feedback').value;
                const deliveryManID = document.getElementById('deliveryManID').value;
                const reviewDate = new Date().toISOString().slice(0, 10);


                console.log(userName, userImage, ratingValue, feedback, deliveryManID);

                if (!userName || !userImage || !ratingValue || !feedback || !deliveryManID) {
                    MySwal.showValidationMessage('Please fill up all fields');
                    return false;
                }
                return { userName, userImage, rating: ratingValue, reviewDate, feedback, deliveryManID };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const { userName, userImage, rating, reviewDate, feedback, deliveryManID } = result.value;
                const review = { userName, userImage, rating, reviewDate, feedback, deliveryManID }
                axiosSecure.post(`/delivery-man/review`, review)
                    .then(({ data }) => {
                        if (data.insertedId) {
                            MySwal.fire('Success', 'Review successfully Submitted!', 'success');
                            refetch();
                        } else {
                            MySwal.fire('Error', 'Something went wrong.', 'error');
                        }
                    })
                    .catch(error => {
                        console.error('Error reviewing:', error);
                        MySwal.fire('Error', 'Something went wrong.', 'error');
                    });
            }
        });
    };



    return (
        <div className="px-10">
            <div>
                <SectionTitle heading={'My Parcels'} subHeading={'Wanna Add More?'}></SectionTitle>
                <div className=" flex justify-between mb-8">
                    <h3 className="text-xl font-medium">Total Parcels: {parcel.length}</h3>
                </div>

                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-blue-200 ">
                                <th></th>
                                <th>Parcel Type</th>
                                <th>Req. Delivery</th>
                                <th>Approx. Delivery</th>
                                <th>Booking Date</th>
                                <th>Delivery Man ID</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                parcel.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>{item.type}</td>
                                        <td>{item.deliveryDate}</td>
                                        <td>{item?.approxDeliveryDate || 'N/A'}</td>
                                        <td>{item.bookingDate}</td>
                                        <td>{item?.
                                            deliveryManID || 'N/A'}</td>
                                        <td>{item.status}</td>
                                        <th className="flex gap-2 items-center">
                                            {
                                                item?.status !== 'Delivered' ?
                                                <Link to={`/dashboard/updateParcel/${item?._id}`}>
                                                    <button onClick={() => handleUpdate(item?._id)} className="  btn-xs">
                                                        <FaEdit className="text-2xl"></FaEdit>
                                                    </button>
                                                </Link>
                                                :
                                                <button disabled className=" btn btn-xs">
                                                    <FaEdit className="text-2xl"></FaEdit>
                                                </button>

                                            }
                                            {
                                                item?.status !== 'Delivered' ?
                                                <button onClick={() => handleCancel(item?._id)} className=" bg-red-400 text-white rounded-full  btn-xs text-sm">
                                                    Cancel
                                                </button> 
                                                :
                                                <button disabled className=" btn btn-xs">
                                                    Cancel
                                                </button>

                                            }
                                            {
                                                parcel.length > 0 ?
                                                    <Link to={'/dashboard/payment'}>
                                                        <button className="btn btn-xs btn-primary text-white">PAY</button>
                                                    </Link> :
                                                    <button disabled className="btn btn-primary btn-xs text-white">PAY</button>
                                            }
                                            {
                                                item?.status === 'Delivered' &&
                                                <button onClick={() => handleReview(item)} className=" bg-green-600 rounded-full btn-sm text-white text-sm">
                                                    Review
                                                </button>

                                            }


                                        </th>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyParcel;