import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import error from '../../assets/404.gif'


const ErrorPage = () => {
    return (


        <div className="font-poppins text-center items-center mx-auto max-w-xl mt-36 space-y-4  p-20 ">

            <h3 className="text-4xl font-extrabold text-blue-500">Page Not Found!</h3>
            <div>
                <img src={error} alt="" />
            </div>
            <p className="font-semibold ">Sorry, the page you are looking for could not be found !</p>
            <Link className="btn text-blue-500 hover:bg-blue-400 hover:border-none border-blue-600 btn-outline rounded-xl" to={'/'}>Back to Home</Link>
            <Helmet>
                <title>ErrorPage - FlyPoint</title>
            </Helmet>
        </div>

    );
};

export default ErrorPage;