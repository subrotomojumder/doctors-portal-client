import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots, price } = appointmentOption;
    return (
        <div className="card shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold text-orange-300">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
                <p className='font-semibold text-gray-500'>Price: ${price}</p>
                <p className='font-semibold'>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        className='btn btn-accent text-white border-red-300'
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;