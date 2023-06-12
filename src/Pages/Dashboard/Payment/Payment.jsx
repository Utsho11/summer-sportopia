import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import UseSelectedClass from '../../../hooks/UseSelectedClass';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
    const [selectedClasses] = UseSelectedClass();
    const total = selectedClasses.reduce((sum,item) => sum + item.price,0);
    const price = parseFloat(total.toFixed(2));
    const {id} = useParams();
    const items = selectedClasses.find((item) => item._id === id);
    console.log(items);
 


    return (
        <div className='mt-16'>
            <p className='text-center mb-16 text-3xl font-semibold'>Please Payment</p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm items={items} price={price} ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;