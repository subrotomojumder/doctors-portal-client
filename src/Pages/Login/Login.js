import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PasswordResetModal from '../../components/PasswordResetModal';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInFunc, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    if(token){
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('')
        signInFunc(data.email, data.password)
            .then(results => {
                setLoginUserEmail(data.email);
                // console.log(results.user)
            })
            .catch(err => {
                // console.log(err.message)
                setLoginError(err.message)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(results => {
                setLoginUserEmail(results.user?.email)
            })
            .catch(err => {
                setLoginError(err.message)
            })
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 border rounded-lg p-8'>
                <h2 className='text-4xl semibold mb-2 text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: 'This is email required!' })} type="email" placeholder="Email here" className=" mb-2 input input-bordered w-full" />
                        {errors.email && <small role='alert'>{errors.email?.message}</small>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            {...register("password", {
                                required: 'This password required!', minLength: { value: 6, message: 'password must be 6 characters' }
                            })}
                            type="text" placeholder="Password here" className="input input-bordered w-full" />

                        {errors.password && <small role='alert'>{errors.password?.message}</small>}
                        <label htmlFor="my-modal-3" className="label mb-2 hover:link "><span className="text-xs">Forgot password? </span></label>
                    </div>
                    {loginError && <p className='text-sm text-red-500'>{loginError}</p>}
                    <input className='btn w-full' value='Login' type="submit" />
                </form>
                <p className='text-sm text-center mt-1'>New to Doctors Portal <Link to='/signup' className='text-blue-500 hover:link'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
            <PasswordResetModal></PasswordResetModal>
        </div>
    );
};

export default Login;