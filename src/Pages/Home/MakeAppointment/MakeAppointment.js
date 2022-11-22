import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import background from '../../../assets/images/appointment.png';
import PrimaryButtons from '../../../components/PrimaryButtons/PrimaryButtons';

const MakeAppointment = () => {
    return (
        <section
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero mt-40">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={doctor} alt='' className="hidden md:block lg:w-1/2 -mt-36 -mb-4" />
                    <div className='text-white'>
                        <h4 className="text-xl font-semibold text-green-300">Appointment</h4>
                        <h2 className='text-4xl font-bold'>Make an appointment Today</h2>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButtons>Appointment</PrimaryButtons>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;