import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                        email: result.user?.email,
                        name: result.user?.displayName,
                        role: 'User',
                        photo: result.user?.photoURL,
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data)
                    navigate('/')
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
        <div className="divider px-8">or</div>
        <div>
            <button onClick={handleGoogleLogin} className="btn w-full hover:bg-blue-200 font-bold bg-blue-100 ">
                <FaGoogle></FaGoogle>
                Google Login
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;