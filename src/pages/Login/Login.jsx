import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import SocialLogin from "../../pages/Shared/SocialLogin/SocialLogin";

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Successfully Logged In')
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error)
            })
    }

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //         .then(result => {
    //             console.log(result.user)
    //             toast.success('Successfully Logged In');
    //             navigate(from, {replace: true})
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     }

    return (
        <div>

            <div className=" min-h-screen py-16 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="rounded-lg w-96 shadow-2xl bg-base-100">
                        <h3 className="px-10 text-3xl font-bold text-start mb-2 mt-8">Login</h3>
                        <p className="px-10">Enter your email & password below to login to your account</p>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="flypoint@example.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <button className="btn btn-primary hover:bg-blue-400 hover:border-none w-full font-bold">Login</button>

                        </form>
                        <div className="px-10 space-y-2">
                           <SocialLogin></SocialLogin>
                            <p className='text-center text-blue-400 font-semibold pb-6'>New Here? <Link className="underline" to={'/signup'}>Create a New Account</Link></p>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;