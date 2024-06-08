import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navOptions = <>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline border-blue-600 hover:bg-blue-400 font-semibold text-blue-700' : 'btn font-medium btn-ghost'} to={'/'}>Home</NavLink></li>
        {
            !user ? <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline border-blue-600 hover:bg-blue-400 font-semibold text-blue-700' : 'btn font-medium btn-ghost'} to={'/signup'}>Sign Up</NavLink></li> : ''
        }
        <li>
            <NavLink className={({ isActive }) => isActive ? 'btn btn-outline border-blue-600 hover:bg-blue-400 font-semibold text-blue-700' : 'btn font-medium btn-ghost'} to={'/notification'}>
                <button className="flex items-center">
                    <IoMdNotificationsOutline className="text-2xl"></IoMdNotificationsOutline>
                    <div className=" badge badge-secondary">0</div>
                </button>
            </NavLink>
        </li>
       
    </>

    return (
        <div className="navbar max-w-screen shadow-lg mx-auto  bg-white ">
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
                {/* <button className='btn bg-blue-600 hover:bg-blue-400 mr-2 text-white border-none font-bold'>
                    <Link to={'/login'}>Login</Link>
                </button> */}

                {
                    user ?
                        <div className="dropdown dropdown-end mr-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL || 'user.png'} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40 space-y-1">
                                <li className="pl-3 font-bold">{user?.displayName || 'Name Not Found'}</li>
                                <li className="font-semibold text-xl"> <Link to={'/dashboard'}>Dashboard</Link></li>
                                <li><button onClick={handleLogOut} className="hover:bg-blue-100 pl-3 text-red-400 border-none font-bold">Log Out</button></li>
                            </ul>
                        </div>
                        :
                        <div className="">
                            <Link className="btn rounded-xl bg-blue-600 text-white border-none" to={'/login'}>Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;