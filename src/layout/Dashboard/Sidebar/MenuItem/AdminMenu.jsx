import MenuItem from './MenuItem'
import { FaAddressBook, FaBoxOpen } from 'react-icons/fa'
const AdminMenu = () => {
    return (
        <>
            {/* Statistics */}
            <MenuItem label={'Statistics'} address={'bookParcel'} icon={FaBoxOpen}></MenuItem>
            
            <MenuItem label={'All Parcel'} address={'bookParcel'} icon={FaBoxOpen}></MenuItem>

            {/* My Parcels */}
            <MenuItem label={', All Users,'} address={'myParcel'} icon={FaAddressBook}></MenuItem>

            <MenuItem label={'All Delivery Men'} address={'myParcel'} icon={FaAddressBook}></MenuItem>

        </>
    )
}

export default AdminMenu