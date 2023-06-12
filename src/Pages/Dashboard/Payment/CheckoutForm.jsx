import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import UseAuth from '../../../hooks/UseAuth';

const CheckoutForm = ({ items,price  }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = UseAuth();

    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);



    const [axiosSecure] = UseAxiosSecure();


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
            console.log(res.data);
            setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        setProcessing(true);


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        else {

            console.log(paymentIntent);
        }

        setProcessing(true);

        if (paymentIntent.status === 'succeeded') {

            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: items.length,
                classId: items._id,
                className: items.sportName,
                instructor: items.instructorName,
                status: 'paid'


            }

            axiosSecure.post('/payment',payment)
            .then(res =>{
                console.log(res.data);
                if (res.data.result.insertedId) {
                    // display confirm
                }
            })


        }



    }
    return (
        <div className='lg:px-40 text-center'>
            <form className='px-4 py-4' onSubmit={handleSubmit}>
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
                <div className='text-center mt-8'>
                    <button className='btn btn-success btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
                        Payment
                    </button>
                </div>
            </form>
            {cardError && <p className='font-semibold text-red-600'>{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;