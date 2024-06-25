// import Swal from "sweetalert2";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle/SectionTile";
import useUser from "../../../../Hooks/useUser";
import { useQuery } from "@tanstack/react-query";


const MyDeliveryList = () => {

    // const [parcels, refetch] = useParcel()
    const axiosSecure = useAxiosSecure()
    const { userDetailsPending, ID } = useUser();


    const { data: parcels = [], refetch, } = useQuery({
        queryKey: ['parcels'],
        enabled: !userDetailsPending,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/delivery-man/${ID}`);
            return res.data;
        }
    })


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
    const handleDeliver = (id) => {
        const updateStatus = {
            status: 'Delivered'
        }
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Deliver it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/bookings/${id}`, updateStatus)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Delivered!",
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
                <SectionTitle heading={'My Delivery List'}></SectionTitle>
                <div className=" flex justify-between mb-8">
                    <h3 className="text-xl font-medium">Total Items: {parcels.length}</h3>
                </div>

                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-blue-200 ">
                                <th>Booked User’s Name</th>
                                <th>Receiver’s Name</th>
                                <th>Booked User’s Phone</th>
                                <th>Requested Delivery Date</th>
                                <th>Approximate Delivery Date</th>
                                <th>Receivers phone number</th>
                                <th>Receivers Address</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                parcels.map((item) =>
                                    <tr key={item._id}>

                                        <td>{item.name}</td>
                                        <td>{item.
                                            receiversName}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.deliveryDate}</td>
                                        <td>{item.approxDeliveryDate}</td>
                                        <td>{item.receiversPhone}</td>
                                        <td>{item.deliveryAddress
                                        }</td>
                                        <td>{item.deliveryAddress
                                        }</td>
                                        <th className="flex gap-2 items-center">

                                            {
                                                //  item?.status !=='Cancelled' &&
                                                <button disabled={item.status === "Cancelled" || item.status === "Delivered" ? true : false} onClick={() => handleCancel(item?._id)} className=" font-medium whitespace-no-wrap btn-sm bg-red-500 btn rounded-full text-white">
                                                    {item.status === 'Cancelled' ? "Cancelled" : "Cancel"}
                                                </button>
                                            }
                                            {
                                                item?.status !== 'Cancelled' &&
                                                <button disabled={item.status === "Cancelled" || item.status === "Delivered" ? true : false} onClick={() => handleDeliver(item?._id)} className=" font-medium whitespace-no-wrap btn-sm bg-green-500 btn rounded-full text-white">
                                                    {item.status === 'Delivered' ? "Delivered" : "Deliver"}
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

export default MyDeliveryList;