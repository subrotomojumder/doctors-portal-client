import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const PasswordResetModal = () => {
    const [show, setShow] = useState(true);
    const { passwordReset } = useContext(AuthContext);
    const handleReset = e => {
        e.preventDefault();
        passwordReset(e.target.email.value)
            .then(() => {
                toast.success('Please check your email and reset your password')
                setShow(false)
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    {show ?
                        <>
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className=" font-bold">Put here your email</h3>
                            <form onSubmit={handleReset} className="form-control flex flex-col items-center">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="your email" className="input input-bordered w-3/2" />
                                <button className='btn-sm btn-warning w-40 mt-4' type="submit">Reset</button>
                            </form>
                        </>
                        : <div className='h-32 flex justify-center items-center'>
                            <div>
                                <h5 className='text-center'>Please check your email and reset your password</h5>
                                <label htmlFor="my-modal-3" className='btn btn-success ml-32'>Ok</label>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PasswordResetModal;