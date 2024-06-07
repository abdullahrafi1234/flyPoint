import { HiBriefcase } from "react-icons/hi";
import { FaCaravan } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";
import SectionTitle from "../../Shared/SectionTitle/SectionTile";

const Featured = () => {
    return (
        <div>
            <SectionTitle heading={'Our Featured'} subHeading={'We Provide Various Category Delivery Services'}></SectionTitle>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">

                <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
                    <p className="flex justify-center">
                        <HiBriefcase className="text-center text-7xl rounded-full bg-blue-100 text-blue-600 p-4"></HiBriefcase>
                    </p>
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-semibold">Standard Courier</h2>
                        <p>We deliver parcels with full responsibility in every corner of Bangladesh by providing 100% Safety Coverage.</p>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
                    <p className="flex justify-center">
                        <FaCaravan className="text-center text-7xl rounded-full bg-blue-100 text-blue-600 p-4"></FaCaravan>
                        <HiBriefcase ></HiBriefcase>
                    </p>
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-semibold">Express Courier</h2>
                        <p>This is a service provided to those who need urgent delivery to be sent and received on the same day.</p>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
                    <p className="flex justify-center">
                        <MdPhoneCallback className="text-center text-7xl rounded-full bg-blue-100 text-blue-600 p-5"></MdPhoneCallback>
                        <HiBriefcase ></HiBriefcase>
                    </p>
                    <div className="card-body">
                        <h2 className=" text-center text-2xl font-semibold">24/7 Call Center Support</h2>
                        <p>FlyPoint ensures 24/7 call center agent support for all sorts of queries and specific relationship managers.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;