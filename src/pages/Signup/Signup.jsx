import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../pages/Shared/SocialLogin/SocialLogin";

const Signup = () => {

    const axiosPublic = useAxiosPublic()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        reset()
                        // toast.success('User Created Successfully')
                        // console.log('user profile info updated')
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: data.register,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                   
                                    reset()
                                    toast.success('User Created Successfully')
                                    navigate('/')
                                }
                            })
                        navigate('/')

                    })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>

            <div className=" min-h-screen py-16 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="rounded-lg w-96 shadow-2xl bg-base-100">
                        <h3 className="px-10 text-3xl font-bold text-start mb-2 mt-8">Sign Up</h3>
                        <p className="px-10">Enter your information to create an account
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register('name', { required: true })} type="text" placeholder="Fly Point" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register('photo', { required: true })} type="text" placeholder="https://example.com/image.jpg" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Register As</span>
                                </label>
                                <select defaultValue={'default'} {...register('register', { required: true })} className="select select-bordered join-item">
                                    <option  disabled value={'default'}>Please Select</option>
                                    <option>User</option>
                                    <option>Delivery Man</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', { required: true })} type="email" placeholder="flypoint@example.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                })} type="password" placeholder="Your Password" name="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is Required</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be under 20 Character</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 Character</span>}
                            </div>
                            <button className="btn btn-primary w-full font-bold">Create an Account</button>

                        </form>
                        
                      <div className="px-10 space-y-2">
                        <SocialLogin></SocialLogin>
                      <p className='text-center text-blue-400 font-semibold pb-6'>Already have an Account? <Link className="underline" to={'/login'}>Please Login</Link></p>
                      </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Signup;