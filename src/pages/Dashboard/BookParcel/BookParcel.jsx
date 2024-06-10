import useAuth from '../../../Hooks/useAuth'
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";



const BookParcel = () => {

    // const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    // const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        let totalPrice = 0;
        if (data.weight == 1) {
            totalPrice = 50 + parseInt(data.price)
        }
        if (data.weight == 2) {
            totalPrice = 100 + parseInt(data.price)
        }
        if (data.weight > 2) {
            totalPrice = 150 + parseInt(data.price)
        }
        console.log(totalPrice)
        
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
            price: totalPrice,
            status: 'Pending'
        }
        console.log(bookParcel)
        // axiosPublic.post('/users', userInfo)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             reset()
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "User Created Successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //             navigate('/')
        //         }
        //     })
    }

    return (
        <div>
            <div className=" min-h-screen py-16 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="rounded-lg w-3/4 shadow-2xl bg-base-100">
                        <h3 className="px-10 text-xl font-bold text-start mb-2 mt-8">Book a Parcel</h3>
                        <p className="px-10">Easily book your parcel for delivery with our user-friendly and efficient booking system
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
                                <input {...register('phone', { required: true })} type="number" placeholder="0123456789*" className="input input-bordered" required />
                            </div>
                            {/* parcel type */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parcel Type</span>
                                </label>
                                <input {...register('type', { required: true })} type="text" placeholder="Parcel Type" className="input input-bordered" required />
                            </div>
                            {/* parcel weight */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parcel Weight (KG)</span>
                                </label>
                                <input {...register('weight', { required: true })} type="text" placeholder="Parcel Weight" className="input input-bordered" required />
                            </div>
                            {/* receiver name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Receivers Name</span>
                                </label>
                                <input {...register('receiversName', { required: true })} type="text" placeholder="Receiver’s Name" className="input input-bordered" required />
                            </div>
                            {/* Receiver’s Phone number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Receivers Phone Number</span>
                                </label>
                                <input {...register('receiversPhone', { required: true })} type="text" placeholder="0123456789*" className="input input-bordered" required />
                            </div>
                            {/* parcel delivery address */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parcel Delivery Address</span>
                                </label>
                                <input {...register('deliveryAddress', { required: true })} type="text" placeholder="Parcel Delivery Address" className="input input-bordered" required />
                            </div>
                            {/* Requested delivery date */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Requested Delivery Date</span>
                                </label>
                                <input {...register('deliveryDate', { required: true })} type="date" placeholder="date" className="input input-bordered" required />
                            </div>
                            {/* delivery address latitude */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery Address Latitude</span>
                                </label>
                                <input {...register('latitude', { required: true })} type="text" placeholder="Delivery Address Latitude" className="input input-bordered" required />
                            </div>
                            {/* longitude */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery Address Longitude</span>
                                </label>
                                <input {...register('longitude', { required: true })} type="text" placeholder="Delivery Address Longitude" className="input input-bordered" required />
                            </div>
                            {/* price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register('price', { required: true })} type="text" placeholder="00" className="input input-bordered" required />
                            </div>
                            <div className='form-control'>
                                <input className='mt-3 btn btn-primary w-full font-bold' type="submit" value="Book" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookParcel;