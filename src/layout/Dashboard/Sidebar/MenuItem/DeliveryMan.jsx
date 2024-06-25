import MenuItem from './MenuItem'
import { FaAddressBook, FaBoxOpen } from 'react-icons/fa'
const DeliveryMan = () => {
    return (
        <>
            {/* Book Parcel */}
            <MenuItem label={'My Delivery List'} address={'myDeliveryList'} icon={FaBoxOpen}></MenuItem>

            {/* My Parcels */}
            <MenuItem label={'My Reviews'} address={'myReviews'} icon={FaAddressBook}></MenuItem>

            {/* <MenuItem label={'My Parcels'} address={'myParcel'} icon={FaAddressBook}></MenuItem> */}

        </>
    )
}

export default DeliveryMan