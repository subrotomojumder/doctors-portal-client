import React from 'react';

const Service = ({service}) => {
    const {img, name, description} = service;
    return (
        <div className='text-center border-2 p-2 shadow-2xl rounded-xl hover:border-blue-500'>
            <img src={img} className='mx-auto' alt="" />
            <h2 className='text-xl font-semibold mt-2'>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Service;