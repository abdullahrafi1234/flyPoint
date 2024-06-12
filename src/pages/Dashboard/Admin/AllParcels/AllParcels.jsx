import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async';



const AllParcels = () => {

    //   Fetch users Data
    const {
        data: users = [], 
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/users`)
            return data
        },
    })
        console.log(users)

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
    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>All Parcels - FlyPoint</title>
                </Helmet>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Phone
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Booking Date
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Req. Delivery Date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Cost
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Manage
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* User data table row */}

                                    {
                                        parcels.map((parcel) =>
                                            <tr key={parcel._id}>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{parcel?.name}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{parcel.phone}</p>
                                                </td>

                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{parcel.bookingDate}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{parcel.deliveryDate}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{parcel.price}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{parcel.status}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                                                    <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                                        <h3 className='mt-4'>

                                                            {/* <button className='btn btn-success btn-outline'>Food Request</button> */}
                                                            <p className='btn btn-success btn-outline'>Manage Parcel</p>

                                                        </h3>
                                                    </button>
                                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                        <div className="modal-box">
                                                            {/* form part */}
                                                            <div className='space-y-3 flex flex-col items-center'>
                                                                <h1 className='text-center text-2xl font-bold mb-4'>Manage Parcel</h1>
                                                            </div>
                                                            <form >
                                                                {/* name, quantity  */}
                                                                <div className="md:flex gap-10  ">
                                                                    <div className="form-control">
                                                                        <label className="label">
                                                                            <span className="label-text">Delivery Man</span>
                                                                        </label>
                                                                        <select defaultValue={'default'} className="select select-bordered join-item">
                                                                            <option disabled value={'default'}>Please Select</option>
                                                                            {/* {
                                                                                names.map(name => <option key={name.id}>{name.id}</option>)
                                                                            } */}
                                                                            {
                                                                                users.map( user => user.role === 'Delivery Man' ? <option key={user._id}>{user.name}</option> : '')
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-control md:w-1/2">
                                                                        <label className="label">

                                                                            <span className="label-text">Status</span>
                                                                        </label>
                                                                        <label className="input-group">
                                                                            <input type="text"
                                                                                // value={_id}
                                                                                readOnly
                                                                                name="quantity" placeholder="Pending" className="input input-bordered w-full" />
                                                                        </label>
                                                                    </div>
                                                                </div>



                                                                {/* btn */}

                                                                <div className="mt-8">
                                                                    <input className="btn  btn-success btn-block text-white " type="submit" value="Assign" />

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