import React from 'react';
import background from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div
        style={{
            background: `url(${background})` ,
            backgroundSize: 'cover'
        }}
         className='text-center py-10'>
            <h2 className='text-green-300 text-xl'>Contact Us</h2>
            <h1 className='text-3xl text-white mb-10'>Stay connected with us</h1>
            <form className='form-control mx-auto md:w-1/2'>
                <input type="text" placeholder='email address' className='input  input-bordered mb-4'/>
                <input type="text" placeholder='subjects' className='input input-bordered mb-4'/>
                <textarea type="text" placeholder='your message' className='input input-bordered mb-6 h-20'/>
                <input type="submit" value="Submit" className='btn btn-warning w-32 mx-auto' />
            </form>
        </div>
    );
};

export default ContactUs;