import { Helmet } from "react-helmet-async"
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProfile = () => {
    const { user, updateUserProfile } = useAuth()
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()

    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const name = data.name
            const photo = res.data.data.display_url
            console.log(data.name, res.data.data.display_url)
            updateUserProfile(name, photo)
                .then(
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Profile Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                )
                .catch()
        }
        console.log('image url', res.data)
    }
    return (
        <div className="max-w-lg mx-auto my-36">
            <Helmet>
                <title>Update Profile - FlyPoint</title>
            </Helmet>
            <p className="text-center text-black font-bold text-3xl pb-4">Hi, <span className="text-blue-500">{user.displayName || "Sir / Ma'am"}!</span></p>
            <p className="text-center font-medium pb-12">Update Your Profile</p>
            <p className="pl-44 mx-auto pb-4">
                <img className=" w-36 rounded-full" src={user.photoURL || 'user.png'} alt="" />
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body border bg-blue-100 rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input readOnly type="email"
                        name="email"
                        value={user?.email}
                        placeholder='email'
                        className="input rounded-full input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input {...register('name', { required: true })} type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input rounded-full input-bordered" />
                </div>
                <div className="form-control w-full my-6">
                    <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn rounded-full bg-black text-white">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;