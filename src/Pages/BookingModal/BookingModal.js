import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const {user} = useContext(AuthContext);

    // treatment is just another name of appointment options just different name
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            treatment: name,
            appointmentDate: date,
            slot,
            patientName,
            email,
            phone,
            price
        }
        
        fetch('https://doctors-portals-server.vercel.app/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking),
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Booking confirmed')
                setTreatment(null)
                refetch();
            }
           else{
            toast.error(data.message)
           }
        })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered input-info w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {slots?.map((slot, inx) => <option key={inx} value={slot}>{slot}</option>)}
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered input-info w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered input-info w-full" />
                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered input-info w-full" />
                        <input type="submit" value="Submit" className='btn w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;