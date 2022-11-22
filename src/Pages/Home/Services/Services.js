import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import teeth from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            img: fluoride,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            img: cavity,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            img: teeth,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <div className='text-center my-12'>
            <h2 className='text-xl'>Our services</h2>
            <h4 className='text-2xl'>Services We Provide</h4>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;