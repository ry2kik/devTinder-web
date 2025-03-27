import React from 'react';
import { motion } from 'framer-motion';

const DropdownProfile = () => {
    return (
        <div className='absolute right-11 w-48 dropdown'>
            <motion.ul 
                initial = {{ opacity: 0, y: -5 }}
                animate = {{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='relative top-5 bg-base-200 rounded px-3 py-2 text-xs transition -translate-3 duration-300 delay-150 ease-in-out'>
                <li className='p-2 hover:bg-black/30 rounded-md'>
                    <a href="" className='flex items-center justify-between'>
                        Profile
                        <span className='px-3 py-1 flex rounded-lg items-center text-xs hover:text-white'>New</span>
                    </a>
                </li>
                <li className='p-2 hover:bg-black/30 rounded'>
                    <a href="">Settings</a>
                </li>
                <li className='p-2 hover:bg-black/30 rounded'>
                    <a href="">Logout</a>
                </li>
            </motion.ul>
        </div>
    )
}

export default DropdownProfile;
