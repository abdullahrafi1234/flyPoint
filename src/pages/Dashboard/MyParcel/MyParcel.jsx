// import Swal from "sweetalert2";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useParcel from "../../../Hooks/useParcel";
import SectionTitle from "../../Shared/SectionTitle/SectionTile";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";



const MyParcel = () => {
    const [parcel, refetch] = useParcel()
    const axiosSecure = useAxiosSecure()

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
                                <th>Delivery Men ID</th>
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
                                        <td>N/A</td>
                                        <td>{item.bookingDate}</td>
                                        <td>N/A</td>
                                        <td>{item.status}</td>
                                        <th className="flex gap-2 items-center">
                                            {
                                                item?.status === 'Pending' ?
                                                    <Link to={`/dashboard/updateParcel/${item?._id}`}>
                                                        <button onClick={() => handleUpdate(item?._id)} className="  btn-xs">
                                                            <FaEdit className="text-2xl"></FaEdit>
                                                        </button>
                                                    </Link> :
                                                    <button disabled className=" btn btn-xs">
                                                        <FaEdit className="text-2xl"></FaEdit>
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
                                                item?.status === 'Pending' &&
                                                <button onClick={() => handleCancel(item?._id)} className=" bg-red-400 text-white rounded-full  btn-xs text-sm">
                                                    Cancel
                                                </button>
                                            }
                                            {
                                                item?.status === 'Delivered' &&
                                                // <button className=" bg-green-600 rounded-full btn-xs text-sm">
                                                //     Review
                                                // </button>
                                                <div className="items-center">
                                                    <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                                        <h3 className='mt-4'>

                                                            {/* <button className='btn btn-success btn-outline'>Food Request</button> */}
                                                            <p className='btn btn-sm btn-success btn-outline'>Review</p>

                                                        </h3>
                                                    </button>
                                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                        <div className="modal-box">
                                                            {/* form part */}
                                                            <div className='space-y-3 flex flex-col items-center'>
                                                                <h1 className='text-center text-2xl font-bold mb-4'>Review</h1>
                                                            </div>
                                                            <form >
                                                                {/* name, quantity  */}
                                                                <div className=" gap-10 w-full ">
                                                                    <div className="form-control ">
                                                                        <label className="label">

                                                                            <span className="label-text">Review</span>
                                                                        </label>
                                                                        <label className="input-group">
                                                                            <input type="text"
                                                                             
                                                                                name="quantity" placeholder="Please Write Here" className="input input-bordered w-full" />
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                                {/* btn */}

                                                                <div className="mt-8">
                                                                    <input className="btn  btn-success btn-block text-white " type="submit" value="Submit Review" />

                                                                </div>
                                                            </form>
                                                            <div className="modal-action">
                                                                <form method="dialog">
                                                                    {/* if there is a button in form, it will close the modal */}
                                                                    <button className="btn btn-lg btn-circle  absolute right-2 top-2">✕</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </dialog>
                                                </div>
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