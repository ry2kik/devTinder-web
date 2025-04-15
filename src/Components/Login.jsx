import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../utils/Constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + '/login', {
                emailId,
                password
            }, {
                // ? Pass back the token to the application tab of the browser
                withCredentials: true
            });
            dispatch(addUser(res.data));
            return navigate("/");
        } catch (error) {
            setError(error?.response?.data);
            console.log(error);
        }
    }

    const handleSignIn = async () => {
        try {
            const res = await axios.post(BASE_URL + '/signup', {
                firstName,
                lastName,
                emailId,
                password
            }, {
                withCredentials: true
            });

            console.log(res);
            dispatch(addUser(res.data.data));
            return navigate('/profile');
        } catch (error) {
            setError(error?.response?.data || "Something went wrong");
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex justify-center mt-10'
        >
            <div className="card card-border bg-base-200 w-96 shadow">
                <div className="card-body">
                    <h2 className="card-title flex justify-center text-2xl">
                        {
                            isLogin ? "SignUp" : "Login"
                        }
                    </h2>

                    {
                        isLogin && (
                            <>
                                <div>
                                    <p>First Name</p>
                                    <label className="input mt-2">
                                        <input type="text" className="grow" placeholder="FirstName" onChange={e => setFirstName(e.target.value)} value={firstName} />
                                    </label>
                                </div>

                                <div className='mt-3'>
                                    <p>Last Name</p>
                                    <label className="input mt-2">
                                        <input type="text" className="grow" placeholder="Email Address" onChange={e => setLastName(e.target.value)} value={lastName} />
                                    </label>
                                </div>
                            </>
                        )
                    }

                    <div className='mt-3'>
                        <p>Email ID</p>
                        <label className="input mt-2">
                            <input type="email" className="grow" placeholder="Email Address" onChange={e => setEmailId(e.target.value)} value={emailId} />
                        </label>
                    </div>

                    <div className='mt-3'>
                        <p>Password</p>
                        <label className="input mt-2">
                            <input type="password" className="grow" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>

                    <p className='text-red-600 text-center mt-3 tracking-widest'>{error}</p>

                    <p className='text-center'>
                        {
                            isLogin ? "Already have an account! " :  "Dont't have account?  "
                        }
                        
                        <motion.span
                            className='cursor-pointer hover:underline text-primary'
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {
                                isLogin ? "Login" : "Signup"
                            }
                        </motion.span>
                    </p>

                    <motion.div
                        whileTap={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className="card-actions justify-center">
                        <button className="btn btn-primary px-8 mt-3" onClick={ isLogin ? handleSignIn : handleLogin }>
                            {
                                isLogin ? "Signup" : "Login" 
                            }
                        </button>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default Login;
