import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbbApikey;
    const navigate = useNavigate();
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portals-server.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.img[0];
        const formData =new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                fetch('https://doctors-portals-server.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('success added a doctor');
                        navigate('/dashboard/manage-doctors')
                    }
                })
            }
        })

    }
    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div className=''>
            <div className='w-96 lg:w-[600px] mx-auto'>
                <h2 className='text-2xl'>Add A Doctor</h2>
                <form onSubmit={handleSubmit(handleAddDoctor)} className='mt-4 shadow-lg border-1 p-5'>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", {
                            required: "name is required"
                        })} type="text" placeholder="Name here" className=" mb-2 input input-bordered w-full" />
                        {errors.name && <small className='text-red-500 text-sm'>{errors.name?.message}</small>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", {
                            required: "email is required"
                        })} type="email" placeholder="Email here" className=" mb-2 input input-bordered w-full" />
                        {errors.email && <small className='text-red-500 text-sm'>{errors.email?.message}</small>}
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label"><span className="label-text">Specialty</span></label>
                        <select
                            {...register("specialty", {
                                required: "specialty is required"
                            })} className="select input-bordered w-full">
                            <option disabled selected>Please select a Specialty</option>
                            {
                                specialties?.map(treatment => <option value={treatment.name} key={treatment._id}>{treatment.name}</option>)
                            }
                        </select>
                        {errors.specialty && <small className='text-red-500 text-sm'>{errors.specialty?.message}</small>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input {...register("img", {
                            required: "Photo is required"
                        })} type="file" className=" mb-2 input input-bordered w-full" accept='image/*' />
                        {errors.img && <small className='text-red-500 text-sm'>{errors.img?.message}</small>}
                    </div>
                    <input className='btn w-full' value='Add Doctor' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;