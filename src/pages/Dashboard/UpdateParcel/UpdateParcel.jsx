import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateParcel = () => {
    const { phone, type, weight, receiversName, receiversPhone, deliveryAddress, deliveryDate, latitude,longitude, _id} = useLoaderData()

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const navigate = useNavigate()

    const { register, watch, handleSubmit, reset,
        //  formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        const bookParcel = {
            name: user.displayName,
            email: user.email,
            phone: data.phone,
            type: data.type,
            weight: data.weight,
            receiversName: data.receiversName,
            receiversPhone: data.receiversPhone,
            deliveryAddress: data.deliveryAddress,
            deliveryDate: data.deliveryDate,
            latitude: data.latitude,
            longitude: data.longitude,
            price: data.price,
            status: 'Pending',
            // bookingDate: newDate
        }
        
        axiosPublic.patch(`/booking/${_id}`, bookParcel)
            .then(res => {
                if (res.data.modifiedCount) {
                    reset()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Parcel Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/myParcel')
                }
            })
    }

    return (
        <div>
            <div className=" min-h-screen py-16 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="rounded-lg w-3/4 shadow-2xl bg-base-100">
                        <h3 className="px-10 text-xl font-bold text-start mb-2 mt-8">Update Your Parcel</h3>
                        <p className="px-10">Easily update your parcel for delivery with our user-friendly and efficient booking system
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input readOnly type="text" placeholder={user?.displayName} className="input input-bordered" required />
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input readOnly type="email" placeholder={user?.email} className="input input-bordered" required />
                            </div>
                            {/* phone number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input defaultValue={phone} {...register('phone', { required: false })} type="number" placeholder="0123456789*" className="input input-bordered"  />
                            </div>
                            {/* parcel type */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parcel Type</span>
                                </label>
                                <input defaultValue={type} {...register('type', { required: false })} type="text" placeholder="Parcel Type" className="input input-bordered"  />
                            </div>
                            {/* parcel weight */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parcel Weight (KG)</span>
                                </label>
                                <input defaultValue={weight} {...register('weight', {required : false })} type="number" placeholder="Parcel Weight" className="input input-bordered"  />
                            </div>
                            {/* receiver name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Receivers Name</span>
                                </label>
                                <input defaultValue={receiversName} {...register('receiversName', { required: false })} type="text" placeholder="Receiver’s Name" className="input input-bordered"  />
                            </div>
                            {/* Receiver’s Phone number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Receivers Phone Number</span>
                                </label>
                                <input defaultValue={receiversPhone} {...register('receiversPhone', { required: false })} type="text" placeholder="0123456789*" className="input input-bordered"  />
                            </div>
                            {/* parcel delivery address */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parcel Delivery Address</span>
                                </label>
                                <input defaultValue={deliveryAddress} {...register('deliveryAddress', { required: false })} type="text" placeholder="Parcel Delivery Address" className="input input-bordered"  />
                            </div>
                            {/* Requested delivery date */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Requested Delivery Date</span>
                                </label>
                                <input defaultValue={deliveryDate} {...register('deliveryDate', { required: false })} type="date" placeholder="date" className="input input-bordered"  />
                            </div>
                            {/* delivery address latitude */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery Address Latitude</span>
                                </label>
                                <input defaultValue={latitude} {...register('latitude', { required: false })} type="number" placeholder="Delivery Address Latitude" className="input input-bordered"  />
                            </div>
                            {/* longitude */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery Address Longitude</span>
                                </label>
                                <input defaultValue={longitude} {...register('longitude', { required: false })} type="number" placeholder="Delivery Address Longitude" className="input input-bordered"  />
                            </div>
                            {/* price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register('price', { required: false })} type="text"
                                    value={(watch("weight") <= 2 ? watch('weight') * 50 : 150)}
                                    placeholder="00" className="input input-bordered"  />
                            </div>
                            <div className='form-control'>
                                <input className='mt-3 btn btn-primary w-full font-bold' type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateParcel;