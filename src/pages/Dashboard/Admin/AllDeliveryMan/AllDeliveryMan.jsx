import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async'


const AllDeliveryMan = () => {

    const axiosSecure = useAxiosSecure()
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

    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>All Delivery Man - FlyPoint</title>
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
                                            Delivery Man Name
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
                                            Number of Parcel Delivered
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Review
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>{/* User data table row */}

                                    {
                                        users.map(user  => user.role === 'Delivery Man' ?
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
                                             
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className=' text-gray-900 whitespace-no-wrap'>{4.5}</p>
                                                </td>
                                             
                                            </tr>
                                            : ''
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

export default AllDeliveryMan;