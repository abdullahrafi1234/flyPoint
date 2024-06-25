import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2'
import { useState } from 'react'
import SectionTitle from '../../../Shared/SectionTitle/SectionTile'


const AllUsers = () => {
    const [bookingCounts, setBookingCounts] = useState({});
    // const [currentPage, setCurrentPage] = useState(0);
    const axiosSecure = useAxiosSecure()
    //   Fetch users Data
    const {
        data: users = [], refetch
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/users`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            // const res = await axiosSecure.get(`/users?page=${currentPage}&size=5`);
            const res = await axiosSecure.get(`/users`);
            const men = res.data;
            men.map(man => bookingCount(man.email));
            return data
        },
    })

    const { data: count = 0, } = useQuery({
        queryKey: ['count'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userCount`);
            return res.data?.count;
        }
    })

    const numberOfPages = Math.ceil(count / 5);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)

    const bookingCount = (email) => {

        axiosSecure.get(`/user-booking-count/${email}`)
            .then(({ data }) => {
                setBookingCounts(prevCounts => ({
                    ...prevCounts,
                    [email]: data.count,
                }));
            })
            .catch(error => console.error('Error fetching user booking count:', error));

    }

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
    // console.log(users)



    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>All Users - FlyPoint</title>
                </Helmet>
                <SectionTitle heading={'All Users'}></SectionTitle>
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
                                            Number of Parcel Booked
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Make Admin
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                        >
                                            Make Delivery Man
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* User data table row */}

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
                                                    {bookingCounts[user.email] !== undefined ? bookingCounts[user.email] : <span className="loading loading-xs loading-spinner text-primary"></span>}
                                                </td>
                                                <td>
                                                    {user?.role === 'Admin' ? <div className='font-bold pl-8'>Admin</div> :
                                                        <button onClick={() => handleMakeAdmin(user)} className=" btn btn-success text-white font-medium">

                                                            Make Admin
                                                        </button>
                                                    }
                                                </td>
                                                <td>
                                                    {user?.role === 'Delivery Man' ? <div className='font-bold pl-8'>Delivery Man</div> :
                                                        <button onClick={() => handleMakeDeliveryMan(user)} className=" btn btn-primary font-bold">

                                                            Make Delivery Man
                                                        </button>
                                                    }
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
    )
}

export default AllUsers