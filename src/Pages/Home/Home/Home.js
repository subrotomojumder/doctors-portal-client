import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import InfoCarts from '../InfoCarts/InfoCarts';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCarts></InfoCarts>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;