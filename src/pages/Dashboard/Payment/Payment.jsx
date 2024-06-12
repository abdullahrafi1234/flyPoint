import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../pages/Shared/SectionTitle/SectionTile";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'PAYMENT'} subHeading={'Please Pay to Book'}></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;