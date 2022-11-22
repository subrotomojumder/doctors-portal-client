import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;
    const navigation = useNavigation();

    if (navigation.status === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='ml-4'>
            <h1 className='text-3xl'>Payment for {treatment}</h1>
            <p>Please pay <strong>${price}</strong> for your payment on {appointmentDate} at {slot}.</p>
            <div className='w-96 m-10 border-2 py-3'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;