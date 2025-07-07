import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const login = async (data) => {
        setError('');
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate('/');
                }
            }
        } catch (error) {
            console.log('Login :: error', error);
            setError(error.message || 'Something went wrong');
        }
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
                <div className="mb-6 text-center">
                    <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold">Sign in to your account</h2>
                    <p className="mt-2 text-base text-black/60">
                        Don&apos;t have an account?{' '}
                        <Link
                            to="/signup"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>

                {error && <p className="text-center text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit(login)} className="space-y-5">
                    <Input
                        label="Email:"
                        placeholder="Enter your email"
                        type="email"
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    'Email address must be a valid address',
                            },
                        })}
                    />

                    <Input
                        label="Password:"
                        type="password"
                        placeholder="Enter your password"
                        {...register('password', {
                            required: true,
                        })}
                    />

                    <Button type="submit" className="w-full">
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;

