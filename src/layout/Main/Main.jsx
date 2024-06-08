import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div >
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="max-w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;