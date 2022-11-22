import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [signUpError, setSignUpError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [createdUser, setCreatedUser] = useState('');
    const [token] = useToken(createdUser);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }
    const handleSignup = data => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(results => {
                toast.success('Create your account')
                const user = results.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => setSignUpError(err.message))
            })
            .catch(err => {
                console.log(err.message)
                setSignUpError(err.message)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(results => {
            navigate('/');
        })
        .catch(err => {
            setSignUpError(err.message)
        })
    }

    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('https://doctors-portals-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setCreatedUser(email)
        })
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 border rounded-lg p-8'>
                <h2 className='text-4xl semibold mb-2 text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", {
                            required: "name is required"
                        })} type="text" placeholder="Name here" className=" mb-2 input input-bordered w-full" />
                        {errors.name && <small className='text-red-500 text-sm'>{errors.name?.message}</small>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", {
                            required: "email is required"
                        })} type="email" placeholder="Email here" className=" mb-2 input input-bordered w-full" />
                        {errors.email && <small className='text-red-500 text-sm'>{errors.email?.message}</small>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password", {
                            required: "password is required", minLength: { value: 6, message: "password must be 6 characters" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'password must be strong' }
                        })} type="text" placeholder="Password here" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500 text-sm'>{errors.password?.message}</p>}
                        {signUpError && <small>{signUpError}</small>}
                    </div>
                    <input className='btn w-full' value='Sign Up' type="submit" />
                </form>
                <p className='text-sm text-center mt-1'>Already have an account <Link to='/login' className='text-blue-500 hover:link'>Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;