import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import useParcel from "../../../Hooks/useParcel";



const CheckOutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [parcel] = useParcel()
    const { user } = useAuth()
    const totalPrice = parcel.reduce((total, item) => total + item.price, 0)


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure, totalPrice])
    console.log(totalPrice)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })


        if (error) {
            console.log(error)
            setError(error.message)
        }
        else {
            console.log(paymentMethod)
            setError('')
        }

        //confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('payment intentid', paymentIntent.id)
                setTransactionId(paymentIntent.id)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm text-white mt-6 hover:bg-blue-600 border-none bg-blue-400" type="submit"  >
                Pay
            </button>
            <p className="text-red-700">{error}</p>
            {transactionId && <p className="text-green-600">Your Transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;