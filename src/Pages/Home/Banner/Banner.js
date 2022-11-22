import React from 'react';
import './Banner.css';

import chair from '../../../assets/images/chair.png'
import PrimaryButtons from '../../../components/PrimaryButtons/PrimaryButtons';

const Banner = () => {
    return (
        <div className="banner-bg hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='bg-['>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButtons>Get Started</PrimaryButtons>
                </div>
            </div>
        </div>
    );
};

export default Banner;