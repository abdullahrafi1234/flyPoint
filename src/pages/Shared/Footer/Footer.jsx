import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=" p-10 bg-base-200 text-base-content grid ">

            <footer className="footer  bg-base-200 text-base-content grid ">
                <aside className="flex flex-col">
                    <div className="flex items-center gap-3 ">
                        <img className="w-20 pt-2" src='/src/assets/fly-logo-2.png' alt="" />
                        <div className=" workSans text-3xl font-bold gap-0">
                            <Link to={'/'} className="gap-0 items-center">
                                Fly<span className="font-normal">Point</span>
                            </Link>
                        </div>
                    </div>
                    {/* <p className="font-semibold">Simple Way of Eating Delicious</p> */}
                    <nav className=" pb-8 pt-4 pl-10 ">
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.facebook.com"><FaFacebook className="text-3xl text-blue-700"></FaFacebook></a>
                            <a href="https://twitter.com"><FaTwitter className="text-3xl text-sky-400"></FaTwitter></a>
                            <a href="https://www.instagram.com"><FaInstagram className="text-3xl text-red-400"></FaInstagram></a>
                        </div>
                    </nav>
                </aside>
                <nav>
                    <h6 className="footer-title">Our Services</h6>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Tracking</a>
                    <a className="link link-hover">Report a Bug</a>
                    <a className="link link-hover">Terms of Services</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Our Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Management</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Address</h6>
                    <a className="link link-hover">Mohammadpur, Dhaka</a>
                    <a className="link link-hover">(+88) 01722438145</a>
                    <a className="link link-hover">rafibhuiyan1234@gmail.com</a>
                </nav>
            </footer>
            <div className="font-semi-bold text-center pt-8">
                <aside className="border-t border-blue-300 pt-3">
                    <p>Copyright © 2024 - All right reserved by FlyPoint Industries Ltd</p>
                </aside>
            </div>
        </div>


    );
};

export default Footer;