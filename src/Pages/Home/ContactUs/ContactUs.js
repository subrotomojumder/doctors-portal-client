import React, { useRef } from 'react';
import background from '../../../assets/images/appointment.png';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const ContactUs = () => {
    const [loading, setLoading] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(process.env.REACT_APP_emailServiceID, process.env.REACT_APP_emailTemplateID, form.current, process.env.REACT_APP_emailPublicKey)
            .then((result) => {
                toast.success('Your email sending success!')
                e.target.reset()
                setLoading(false)
            }, (error) => {
                toast.error('Your email sending error!')
                setLoading(false)
            });
    };
    return (
        <div className='pt-10'>
            <div
                style={{
                    background: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }}
                className='text-center py-10'>
                <h2 className='text-green-300 text-xl'>Contact Us</h2>
                <h1 className='text-3xl text-white mb-10'>Stay connected with us</h1>
                <form ref={form} onSubmit={sendEmail} className='form-control mx-auto md:w-1/2 px-4'>
                    <input name='user_name' type="text" placeholder='Your name' className='input  input-bordered mb-4' />
                    <input name='user_email' type="text" placeholder='email address' className='input  input-bordered mb-4' />
                    <input name='subject' type="text" placeholder='subjects' className='input input-bordered mb-4' />
                    <textarea name='message' type="text" placeholder='your message' className='input input-bordered mb-6 h-20' />
                    <input type="submit" value="Submit" className='btn btn-warning w-32 mx-auto' disabled={loading} />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;