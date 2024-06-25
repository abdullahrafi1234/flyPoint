import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
import useRole from '../../../Hooks/useRole'
import MenuItem from './MenuItem/MenuItem'
import UserMenu from './MenuItem/UserMenu'
import AdminMenu from './MenuItem/AdminMenu'
import DeliveryMan from './MenuItem/DeliveryMan'


const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    const navigate = useNavigate()
    const [role, isLoading] = useRole()
    console.log(role, isLoading)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    const handleLogOut = () => {
        logOut()
            .then(
                navigate('/login')
            )
            .catch()
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to={'/'}>
                            <div className="flex uppercase items-center pl-3 gap-2">
                                <img className="w-20 pt-3 items-center" src="fly-logo-2.png" alt="" />
                                <button className="text-2xl font-extrabold">Fly<span className="font-normal">Point</span></button>
                            </div>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full  md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-200 mx-auto'>

                            <Link to={'/'}>
                                <div className="flex uppercase items-center pl-3 gap-2">
                                    <img className="w-20 pt-3 items-center" src="fly-logo-2.png" alt="" />
                                    <button className="text-2xl font-extrabold">Fly<span className="font-normal">Point</span></button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* Conditional toggle button here.. */}

                        {/*  Menu Items */}

                        <nav>


                            {role === 'User' && <UserMenu></UserMenu>}
                            {role === 'Admin' && <AdminMenu></AdminMenu>}
                            {role === 'Delivery Man' && <DeliveryMan></DeliveryMan>}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}
                    <MenuItem label={'My Profile'} address={'profile'} icon={FcSettings}></MenuItem>
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar