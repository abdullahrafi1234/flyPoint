import useParcel from "../../../Hooks/useParcel";

const MyParcel = () => {
    const [parcel] = useParcel()
    return (
        <div>
            <h3>this is my parcel{parcel.length} </h3>
        </div>
    );
};

export default MyParcel;