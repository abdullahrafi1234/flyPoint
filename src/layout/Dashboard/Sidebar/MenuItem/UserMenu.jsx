import MenuItem from './MenuItem'
import { FaAddressBook, FaBoxOpen } from 'react-icons/fa'
const UserMenu = () => {
    return (
        <>
            {/* Book Parcel */}
            <MenuItem label={'Book a Parcel'} address={'bookParcel'} icon={FaBoxOpen}></MenuItem>

            {/* My Parcels */}
            <MenuItem label={'My Parcels'} address={'myParcel'} icon={FaAddressBook}></MenuItem>

            {/* <MenuItem label={'My Parcels'} address={'myParcel'} icon={FaAddressBook}></MenuItem> */}

        </>
    )
}

export default UserMenu