import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {

    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        <li>
            <Link to={'/notification'}>
                <button className="flex items-center">
                    <IoMdNotificationsOutline className="text-2xl"></IoMdNotificationsOutline>
                    <div className="badge badge-secondary">00</div>
                </button>
            </Link>
        </li>
         {/* {
            !user ? <li><Link to={'/signup'}>SIGNUP</Link></li> : ''
        } */}

    </>

    return (
        <div className="navbar max-w-screen-2xl shadow-lg mx-auto  bg-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu font-medium  menu-sm dropdown-content text-[16px] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link>
                    <div className="flex uppercase items-center pl-3 gap-2">
                        <img className="w-20 pt-3 items-center" src="/src/assets/fly-logo-2.png" alt="" />
                        <button className="text-2xl font-extrabold">Fly<span className="font-normal">Point</span></button>
                       
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-medium menu-horizontal text-[16px] px-1">
                    {navOptions}
                </ul>
            </div>
            
            <div className="navbar-end">
            
                        <div className="flex items-center gap-4">
                            {/* <p>{user?.displayName}</p> */}
                            {/* <img className="w-12 rounded-full" src={user?.photoURL} alt="" /> */}
                            {/* <button className='btn bg-[#D1A054B3] border-none text-white font-bold' onClick={handleLogOut}>LOG OUT</button> */}
                            <h3></h3>
                        </div> 

                        <button className='btn bg-blue-600 hover:bg-blue-400 mr-2 text-white border-none font-bold'>
                            <Link to={'/login'}>Login</Link>
                        </button>

            </div>

        </div>
    );
};

export default Navbar;