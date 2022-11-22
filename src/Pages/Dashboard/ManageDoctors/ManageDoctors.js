import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const cancelModal = () => {
        setDeletingDoctor(null)
    };
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const response = await fetch('https://doctors-portals-server.vercel.app/doctors', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                const data = await response.json();
                return data;
            } catch (err) {
                console.log(err.message)
            }
        }
    });
    const handleDeleteDoctor = doctor => {
        fetch(`https://doctors-portals-server.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                refetch();
                toast.success(`Doctor ${doctor.name} deleted success`);
            }
        })
    };
    
    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div>
            <h2 className="text-3xl ml-2">Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr>
                                <th>{++i}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={doctor.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    cancelModal={cancelModal}
                    successAction={handleDeleteDoctor}
                    modalData={deletingDoctor}
                    successBtnName="Delete"
                    title={'Are you sure you want to delete?'}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone`}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;