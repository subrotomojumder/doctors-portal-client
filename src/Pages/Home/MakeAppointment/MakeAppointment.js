import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import background from '../../../assets/images/appointment.png';
import PrimaryButtons from '../../../components/PrimaryButtons/PrimaryButtons';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <div className='mt-4 lg:mt-20' id='doctors'>
            <section className='pt-12 lg:pt-24'>
                <div style={{ backgroundImage: `url(${background})`}}>
                    <div className="hero-content flex-col lg:flex-row ">
                        <img src={doctor} alt='' className="hidden md:block lg:w-1/2 -mt-36 -mb-4" />
                        <div className='text-white'>
                            <h4 className="text-xl font-semibold text-green-300">Appointment</h4>
                            <h2 className='text-4xl font-bold'>Make an appointment Today</h2>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to='/appointment'><PrimaryButtons>Appointment</PrimaryButtons></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppointment;