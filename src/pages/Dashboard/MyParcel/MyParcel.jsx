import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useParcel from "../../../Hooks/useParcel";
import SectionTitle from "../../Shared/SectionTitle/SectionTile";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";



const MyParcel = () => {
    const [parcel, refetch] = useParcel()
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/booking/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
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
                <div className="uppercase flex justify-between mb-8">
                    <h3 className="text-xl font-medium">Total Parcels: {parcel.length}</h3>
                    {/* {
                        cart.length > 0 ?
                            <Link to={'/dashboard/payment'}>
                                <button className="btn bg-[#D1A054] text-white">PAY</button>
                            </Link> :
                            <button disabled className="btn bg-[#D1A054] text-white">PAY</button>
                    } */}
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
                                    <tr className="" key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>{item.type}</td>
                                        <td>{item.deliveryDate}</td>
                                        <td>N/A</td>
                                        <td>{item.bookingDate}</td>
                                        <td>N/A</td>
                                        <td>{item.status}</td>
                                        <th className="flex gap-2 items-center">
                                            <button disabled={item?.status !== 'Pending'} className="  btn-xs">
                                                <FaEdit className="text-2xl"></FaEdit>
                                            </button>
                                            {
                                                item?.status === 'Delivered' &&
                                                <button className="  btn-xs text-lg">
                                                    Review
                                                </button>
                                            }


                                            <button onClick={() => handleDelete(item._id)} className="  btn-xs">
                                                <FaTrashAlt className="text-xl"></FaTrashAlt>
                                            </button>

                                            {
                                                parcel.length > 0 ?
                                                    <Link to={'/dashboard/payment'}>
                                                        <button className="btn btn-xs btn-primary text-white">PAY</button>
                                                    </Link> :
                                                    <button disabled className="btn btn-primary btn-xs text-white">PAY</button>
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