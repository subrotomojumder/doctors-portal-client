import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCart from './InfoCart';

const InfoCarts = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-[#19D3AE]'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-[#3A4256]'
        },
        {
            id: 3,
            name: 'Contact us naw',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-[#19D3AE]'
        },


    ]
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
            {
                cardData.map(card => <InfoCart
                    key={card.id}
                    card={card}
                ></InfoCart>)
            }
        </div>
    );
};

export default InfoCarts;