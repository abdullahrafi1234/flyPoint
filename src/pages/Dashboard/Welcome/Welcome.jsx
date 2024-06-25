import useUserType from "../../../Hooks/useUserType";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

const Welcome = () => {
    const { user } = useAuth()
    const [userType, userTypePending] = useUserType();

    if (userTypePending) {
        return <div className="flex justify-center my-10"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }

    if (userType === "Admin") {
        return <Navigate to="statistics"></Navigate>
    }


    return (
        <div>
            <Helmet>
                <title>Dashboard - FlyPoint</title>
            </Helmet>
            <div className="max-w-lg mx-auto my-36">
                <p className="text-center text-black font-bold text-3xl pb-4">Hi, Welcome Back <span className="text-blue-600">{user?.displayName || "Sir / Ma'am"}!</span></p>

                <p className="pl-44 mx-auto pb-4">
                    <img className=" w-36 rounded-full" src={user?.photoURL || 'user.png'} alt="" />
                </p>
            </div>
        </div>
    );
};

export default Welcome;