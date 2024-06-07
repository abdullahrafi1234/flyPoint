import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>

            <div className=" min-h-screen py-16 bg-blue-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="rounded-lg w-96 shadow-2xl bg-base-100">
                        <h3 className="px-10 text-3xl font-bold text-start mb-2 mt-8">Login</h3>
                        <p className="px-10">Enter your email & password below to login to your account</p>
                        <form className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <button className="btn btn-primary w-full font-bold">Login</button>

                        </form>
                        <div className="px-10 space-y-2">
                            <div className="divider">or</div>
                            <div>
                                <button className="btn w-full hover:bg-blue-200 font-bold">
                                    <FaGoogle className="text-lg"></FaGoogle>
                                    Google Login
                                </button>
                            </div>
                            <div>
                                <button className="btn w-full hover:bg-blue-200 font-bold">
                                    <FaFacebook className="text-xl"></FaFacebook>
                                    Facebook Login
                                </button>
                            </div>
                            <p className='text-center text-blue-400 font-bold pb-6'>New Here? <Link to={'/signup'}>Create a New Account</Link></p>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;