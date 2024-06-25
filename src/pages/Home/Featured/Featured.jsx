import { HiBriefcase } from "react-icons/hi";
import { FaCaravan } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";
import SectionTitle from "../../Shared/SectionTitle/SectionTile";
import CountUp from 'react-countup';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TopDeliveryMan from "../TopDeliveryMan/TopDeliveryMan";

const Featured = () => {

    const axiosPublic = useAxiosPublic();


    const { data: userCount } = useQuery({
        queryKey: ['userCount'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/userCount`);
            return res.data?.count;
        }
    })

    const { data: parcelsCount } = useQuery({
        queryKey: ['parcelsCount'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/parcelsCount`);
            return res.data?.count;
        }
    })

    const { data: deliveredParcelsCount } = useQuery({
        queryKey: ['deliveredParcelsCount'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/deliveredParcelsCount`);
            return res.data?.count;
        }
    })

    const { data: deliveryMen = [] } = useQuery({
        queryKey: ['deliveryMen'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/top-delivery-men`);
            return res.data;
        }
    })

    return (
        <div className="mb-16">
            <div className="mt-20 mb-16">
                <SectionTitle heading={'Our Features'} subHeading={'We Provide Various Category Delivery Services'}></SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">

                <div className="card card-compact w-96 bg-base-100  text-center">
                    <p className="flex justify-center">
                        <HiBriefcase className="text-center text-7xl rounded-full bg-blue-100 text-blue-600 p-4"></HiBriefcase>
                    </p>
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-bold">Standard Courier</h2>
                        <p>We deliver parcels with full responsibility in every corner of Bangladesh by providing 100% Safety Coverage.</p>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100  text-center">
                    <p className="flex justify-center">
                        <FaCaravan className="text-center text-7xl rounded-full bg-blue-100 text-blue-600 p-4"></FaCaravan>
                    </p>
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-bold">Express Courier</h2>
                        <p>This is a service provided to those who need urgent delivery to be sent and received on the same day.</p>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100  text-center">
                    <p className="flex justify-center">
                        <MdPhoneCallback className="text-center text-7xl rounded-full bg-blue-100 text-blue-600 p-5"></MdPhoneCallback>
                    </p>
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-bold">24/7 Call Center Support</h2>
                        <p>FlyPoint ensures 24/7 call center agent support for all sorts of queries and specific relationship managers.</p>

                    </div>
                </div>

            </div>
            {/* counting section */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-12">

                <div className="card card-compact w-96 bg-base-100 shadow-lg text-center">
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-bold text-blue-500">Parcel Booked</h2>

                        <CountUp start={0} end={parcelsCount}>
                            {({ countUpRef, start }) => (
                                <div className=" text-center text-2xl font-bold">
                                    <span ref={countUpRef} />
                                    <button onClick={start}></button>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-lg text-center">
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-bold text-blue-500">Parcel Delivered
                        </h2>
                        <CountUp start={0} end={deliveredParcelsCount}>
                            {({ countUpRef, start }) => (
                                <div className=" text-center text-2xl font-bold">
                                    <span ref={countUpRef} />
                                    <button onClick={start}></button>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-lg text-center">
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-bold text-blue-500">People Using Our App
                        </h2>
                        <CountUp start={0} end={userCount}>
                            {({ countUpRef, start }) => (
                                <div className=" text-center text-2xl font-bold">
                                    <span ref={countUpRef} />
                                    <button onClick={start}></button>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>

            </div>
            <div className="mt-24 mb-12">
                <SectionTitle heading={'The Top Delivery Man'} subHeading={'Meet our top delivery men who consistently deliver excellence and ensure your parcels reach their destination safely and on time.'}></SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-8 ">
                {
                    deliveryMen.map(man => <TopDeliveryMan key={man._id} man={man}></TopDeliveryMan>)
                }
            </div>
        </div>
    );
};

export default Featured;