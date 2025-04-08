import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const DropdownProfile = ({ closeDropdown }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        closeDropdown();
        
        try {
            await axios.post(BASE_URL + '/logout', {}, {
                withCredentials: true
            });
            dispatch(removeUser());
            navigate('/login')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className='fixed top-0 right-0 bottom-0 left-0' onClick={ closeDropdown }></div>
            <div className='absolute right-11 w-48 dropdown'>
                <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='relative top-5 bg-base-200 rounded px-3 py-2 text-xs transition -translate-3 duration-300 delay-150 ease-in-out'
                >
                    <li className='p-2 hover:bg-black/30 rounded-md' onClick = { closeDropdown }>
                        <Link to="/profile" className='flex items-center justify-between'>
                            Profile
                            <span className='px-3 py-1 flex rounded-lg items-center text-xs hover:text-white'>New</span>
                        </Link>
                    </li>

                    <li className='p-2 hover:bg-black/30 rounded' onClick = { closeDropdown }>
                        <Link to="/settings">Settings</Link>
                    </li>

                    <li className='p-2 hover:bg-black/30 rounded cursor-pointer' onClick={ handleLogout }>
                        <p>Logout</p>
                    </li>
                </motion.ul>
            </div>
        </div>
    )
}

export default DropdownProfile;
