import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import background from '../../../assets/images/bg.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div style={{ background: `url(${background})`, backgroundSize: 'cover' }}
            className="hero my-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mr-6'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={(data) => {
                            if (data) {
                                setSelectedDate(data)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;