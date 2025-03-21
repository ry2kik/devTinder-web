import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';

const Login = () => {
    const [emailId, setEmailId] = useState("raktimabho112000@gmail.com");
    const [password, setPassword] = useState("Raktim2000*");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:3000/login', {
                emailId, 
                password
            }, { 
                // ? Pass back the token to the application tab of the browser
                withCredentials: true 
            });

            dispatch(addUser(res.data));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className="card card-border bg-base-200 w-96 shadow">
                <div className="card-body">
                    <h2 className="card-title flex justify-center text-2xl">Login</h2>
                    <div>
                        <p>Email ID</p>
                        <label className="input mt-2">
                            {/* <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg> */}

                            <input type="email" className="grow" placeholder="Email Address" onChange={e => setEmailId(e.target.value) } value = { emailId } />
                        </label>
                    </div>

                    <div className='mt-3'>
                        <p>Password</p>
                        <label className="input mt-2">
                            {/* <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg> */}

                            <input type="password" className="grow" placeholder="Password" value={ password } onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>

                    <div className="card-actions justify-center mt-4">
                        <button className="btn btn-primary" onClick={ handleLogin }>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
