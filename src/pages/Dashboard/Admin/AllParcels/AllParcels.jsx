import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SectionTitle from '../../../Shared/SectionTitle/SectionTile';



const AllParcels = () => {

    const axiosSecure = useAxiosSecure()
    //   Fetch users Data
    const {
        data: parcels = [],
    } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/bookings`)
            return data
        },
    })
    console.log(parcels)

    const { data: deliveryMen = [], refetch } = useQuery({
        queryKey: ['deliveryMen'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/delivery-men`);
            return res.data;
        }
    })

    const MySwal = withReactContent(Swal);


    const handleManage = (parcel) => {
        MySwal.fire({
            title: 'Manage Parcel',
            html: (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 items-center">
                        <label>Select Delivery Man:</label>

                        <select id="deliveryManSelect" className="border h-9 rounded-md text-base py-1 px-3">
                            {deliveryMen.map(man => (
                                <option key={man._id} value={man._id}>{man.name}</option>
                            ))}
                            {/* {
                                deliveryMen.map(user => user.role === 'Delivery Man' ? <option key={user._id}>{user.name}</option> : '')
                            } */}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <label>Approx. Delivery Date:</label>
                        <input
                            type="date"
                            id="deliveryDateInput"
                        />
                    </div>
                </div>
            ),
            showCancelButton: true,
            confirmButtonText: 'Assign',
            preConfirm: () => {
                const deliveryManID = document.getElementById('deliveryManSelect').value;
                const approxDeliveryDate = document.getElementById('deliveryDateInput').value;
                if (!deliveryManID || !approxDeliveryDate) {
                    MySwal.showValidationMessage('Please select a delivery man and a delivery date.');
                    return false;
                }
                return { deliveryManID, approxDeliveryDate };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const { deliveryManID, approxDeliveryDate } = result.value;
                const updatedParcel = { deliveryManID, approxDeliveryDate }
                axiosSecure.patch(`/parcels/update-admin/${parcel._id}`, updatedParcel)
                    .then(({ data }) => {
                        if (data.modifiedCount > 0) {
                            refetch();
                            MySwal.fire('Success', 'Parcel assigned successfully!', 'success');
                        } else {
                            MySwal.fire('Error', 'Failed to assign parcel.', 'error');
                        }
                    })
                    .catch(error => {
                        console.error('Error assigning parcel:', error);
                        MySwal.fire('Error', 'Failed to assign parcel.', 'error');
                    });
            }
        });
    };





    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>All Parcels - FlyPoint</title>
                </Helmet>
                <SectionTitle heading={'All Parcels'}></SectionTitle>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Phone
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Booking Date
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Req. Delivery Date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Cost
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Manage
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* User data table row */}

                                    {
                                        parcels.map((parcel) =>
                                            <tr key={parcel._id}>
                                                <td className='px-5  border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{parcel?.name}</p>
                                                </td>
                                                <td className='px-5  border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{parcel.phone}</p>
                                                </td>

                                                <td className='px-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{parcel.bookingDate}</p>
                                                </td>
                                                <td className='px-5  border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{parcel.deliveryDate}</p>
                                                </td>
                                                <td className='px-5  border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{parcel.price}</p>
                                                </td>
                                                <td className='px-5  border-b border-gray-200 bg-white text-sm'>
                                                {
                                                        parcel.status === 'Pending' && <button className='font-medium whitespace-no-wrap btn-sm bg-white rounded-full'>{parcel.status}</button>
                                                    }
                                                    {
                                                        parcel.status === 'Delivered' && <button className='font-medium whitespace-no-wrap btn-sm bg-green-700 rounded-full text-white'>{parcel.status}</button>
                                                    }
                                                    {
                                                        parcel.status === 'Cancelled' && <button className='font-medium whitespace-no-wrap btn-sm bg-red-700 rounded-full text-white'>{parcel.status}</button>
                                                    }
                                                    {
                                                        parcel.status === 'On The Way' && <button className='font-medium whitespace-no-wrap btn-sm bg-white rounded-full border'>{parcel.status}</button>
                                                    }
                                                    {/* <p className=' text-gray-900 whitespace-no-wrap btn btn-outline'>{parcel.status}</p> */}
                                                </td>
                                                <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm'>
                                                    <button className='btn btn-primary' disabled={parcel.status === "Cancelled" ? true : false} onClick={() => handleManage(parcel)}>Manage</button>
                                                </td>

                                            </tr>
                                        )
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllParcels;