
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div>

            <div className=" min-h-screen py-16 bg-blue-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="rounded-lg w-96 shadow-2xl bg-base-100">
                        <h3 className="px-10 text-3xl font-bold text-start mb-2 mt-8">Sign Up</h3>
                        <p className="px-10">Enter your information to create an account
                        </p>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Fly Point" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="https://example.com/image.jpg" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Register As</span>
                                </label>
                                <select className="select select-bordered join-item">
                                    <option disabled selected>Please Select</option>
                                    <option>User</option>
                                    <option>Delivery Man</option>
                                </select>
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="flypoint@example.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            <button className="btn btn-primary w-full font-bold">Create an Account</button>

                        </form>

                        <p className='text-center text-blue-400 font-semibold pb-6'>Already have an Account? <Link className="underline" to={'/login'}>Please Login</Link></p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Signup;