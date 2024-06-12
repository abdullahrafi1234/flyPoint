import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async'
import { FaUsers } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { IoBicycleSharp } from "react-icons/io5";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    //   Fetch users Data
    const {
        data: users = [], refetch
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/users`)
            return data
        },
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleMakeDeliveryMan = user => {
        axiosSecure.patch(`/userss/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is a Delivery Man Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    console.log(users)
    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>All Users - FlyPoint</title>
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
                                            Number of Parcel Booked
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Make Admin
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Make Delivery Man
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* User data table row */}

                                    {
                                        users.map((user) =>
                                            <tr key={user._id}>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{'01722438145'}</p>
                                                </td>

                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{4}</p>
                                                </td>
                                                <th>
                                                    {user?.role === 'Admin' ? 'Admin' :
                                                        <button onClick={() => handleMakeAdmin(user)} className=" btn-xs">
                                                            <FaUsers className="text-3xl text-white bg-blue-400 rounded-lg p-1.5" ></FaUsers>
                                                        </button>
                                                    }
                                                </th>
                                                <th>
                                                    {user?.role === 'Delivery Man' ? 'Delivery Man' :
                                                        <button onClick={() => handleMakeDeliveryMan(user)} className=" btn-xs">
                                                            <IoBicycleSharp className="text-3xl text-white bg-blue-500 rounded-lg p-1.5" ></IoBicycleSharp>
                                                        </button>
                                                    }
                                                </th>
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
    )
}

export default AllUsers