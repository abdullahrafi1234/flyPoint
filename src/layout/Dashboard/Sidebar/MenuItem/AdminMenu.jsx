import { IoMenuSharp } from 'react-icons/io5'
import MenuItem from './MenuItem'
import { FaBoxOpen } from 'react-icons/fa'
import { IoIosStats } from 'react-icons/io'
import { GrGroup } from 'react-icons/gr'
const AdminMenu = () => {
    return (
        <>
            {/* Statistics */}
            <MenuItem label={'Statistics'} address={'statistics'} icon={IoIosStats }></MenuItem>
            
            <MenuItem label={'All Parcel'} address={'bookParcel'} icon={FaBoxOpen}></MenuItem>

            {/* My Parcels */}
            <MenuItem label={'All Users'} address={'allUsers'} icon={IoMenuSharp}></MenuItem>

            <MenuItem label={'All Delivery Men'} address={'myParcel'} icon={GrGroup }></MenuItem>

        </>
    )
}

export default AdminMenu