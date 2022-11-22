import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AllUsers = () => {
    const {user} = useContext(AuthContext);
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portals-server.vercel.app/users?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleAdmin = id => {
        fetch(`https://doctors-portals-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data?.modifiedCount > 0){
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })
    }
    return (
        <div>
            <h2 className="text-4xl text-center">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{++i}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className='btn btn-xs btn-accent'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;