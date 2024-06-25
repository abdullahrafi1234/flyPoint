import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTile';


const AllDeliveryMan = () => {
    const [deliveryCounts, setDeliveryCounts] = useState({});
    const [averageRatings, setAverageRatings] = useState({});

    const axiosSecure = useAxiosSecure()

    const { data: deliveryMen = []} = useQuery({
        queryKey: ['deliveryMen'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/delivery-men`);
            const men = res.data;
            men.map(man => deliveryCount(man._id));
            men.map(man => deliveryManRating(man._id));
            return res.data;
        }
    })

    const deliveryCount = (id) => {

        axiosSecure.get(`/delivery-man-delivered-count/${id}`)
            .then(({ data }) => {
                setDeliveryCounts(prevCounts => ({
                    ...prevCounts,
                    [id]: data.count,
                }));
            })
            .catch(error => console.error('Error fetching delivery count:', error));

    }

    const deliveryManRating = (id) => {

        axiosSecure.get(`/delivery-man-average-rating/${id}`)
            .then(({ data }) => {
                setAverageRatings(prevCounts => ({
                    ...prevCounts,
                    [id]: data.averageRating,
                }));
            })
            .catch(error => console.error('Error fetching delivery man average rating:', error));

    }

    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>All Delivery Man - FlyPoint</title>
                </Helmet>
                <SectionTitle heading={'All Delivery Man'}></SectionTitle>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800 text-sm uppercase font-bold'
                                        >
                                            Delivery Man Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold'
                                        >
                                            Phone
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold'
                                        >
                                            Number of Parcel Delivered
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold'
                                        >
                                            Review
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>{/* User data table row */}

                                    {
                                        deliveryMen.map(user  => user.role === 'Delivery Man' ?
                                            <tr key={user._id}>
                                                <td className='px-5 py-5 border-b border-gray-200 text-center bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 text-center bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{user?.phone || "N/A"}</p>
                                                </td>

                                                <td className='px-5 py-5 border-b border-gray-200 text-center bg-white text-sm'>
                                                    {deliveryCounts[user._id] !== undefined ? deliveryCounts[user._id] : <span className="loading loading-xs loading-spinner text-primary"></span>}
                                                </td>
                                             
                                                <td className='px-5 py-5 border-b border-gray-200 text-center bg-white text-sm'>
                                                    {averageRatings[user._id] !== undefined ? averageRatings[user._id] : <span className="loading loading-xs loading-spinner text-primary"></span>}
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