import { useState } from 'react';
import { motion } from 'framer-motion';
import EditProfileModal from './EditProfileModal';

const EditProfile = ({ user }) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);
   
    return (
        <motion.div 
            initial = {{ opacity: 0, y: -20 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ duration: 1 }}
            className='flex justify-center mt-36'    
        >
            <div className='flex justify-between w-lg bg-base-200 shadow p-8 py-12'>
                <div className='w-4/5'>
                    <div className='absolute'>
                        <h2 className='relative bottom-16 font-bold text-4xl tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Profile</h2>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-400 uppercase'>First Name</label>
                        <input
                            type="text"
                            className='border-b-2 border-gray-300 focus:outline-0 mt-1 w-56'
                            value={ user.firstName }
                        />
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label className='text-gray-400 uppercase'>Last Name</label>
                        <input
                            type="text"
                            className='border-b-2 border-gray-300 focus:outline-0 mt-1 w-2/3'
                            value={ user.lastName }
                        />
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label className='text-gray-400 uppercase'>Description</label>
                        <input
                            type="text"
                            className='border-b-2 border-gray-300 focus:outline-0 mt-1 w-76'
                            value={ user.about }
                        />
                    </div>

                    <div className='flex justify-between mr-10'>
                        <div className='flex flex-col mt-5'>
                            <label className='text-gray-400 uppercase'>Age</label>
                            <input
                                type="text"
                                className='border-b-2 border-gray-300 focus:outline-0 mt-1 w-20'
                                value={ user.age }
                            />
                        </div>

                        <div className='flex flex-col mt-5'>
                            <label className='text-gray-400 uppercase'>Gender</label>
                            <input
                                type="text"
                                className='border-b-2 border-gray-300 focus:outline-0 mt-1 w-24'
                                value={ user.gender }
                            />
                        </div>
                    </div>

                    <div className='relative'>
                        <button className='absolute top-5 -right-40 font-bold text-xl bg-linear-65 from-purple-500 to-pink-500 px-10 py-3 text-white' onClick={() => setShowModal(true) }>Edit Profile</button>
                    </div>

                    {
                        showModal && <EditProfileModal  closeModal = { closeModal } user = { user } />
                    }
                </div>

                <div>
                    <img src = { user.photoUrl || "https://imgs.search.brave.com/ul1ELzJhn3eDT8eV6L6sFVf3Ca6nEr9s5DHA1JybFYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw" } alt="The image not found" className='w-24 h-24 rounded-full' />
                </div>
            </div>
        </motion.div>
    )
}

export default EditProfile
