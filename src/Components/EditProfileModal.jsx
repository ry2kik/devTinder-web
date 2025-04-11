import axios from 'axios';
import { motion } from 'framer-motion';
import { addUser } from '../utils/userSlice';
import React, { useState } from 'react'
import { BASE_URL } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { TbGenderGenderfluid } from "react-icons/tb";

const EditProfileModal = ({ closeModal, user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [skills, setSkills] = useState(user.skills);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleUpdate = async () => {
        closeModal();
        try {
            const res = await axios.patch(BASE_URL + '/profile/edit', {
                firstName,
                lastName,
                about,
                photoUrl,
                age,
                skills,
                gender
            }, {
                withCredentials: true
            });
            dispatch(addUser(res?.data?.data));
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div>
            <div className='fixed top-0 right-0 bottom-0 left-0 bg-base-100 opacity-50' onClick={closeModal}></div>
            <div className='fixed top-20 w-lg bg-base-300 rounded shadow overscroll-y-auto overflow-scroll h-10/12'>
                <div className='flex justify-center px-7 py-10'>
                    <div className='w-full'>
                        <h2 className='text-center text-2xl font-bold mb-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-widest'>Edit Profile</h2>
                        <div className='flex justify-between gap-6'>
                            <div className='flex flex-col w-3/5'>
                                <label className='uppercase mb-2'>FirstName</label>
                                <input
                                    type="text"
                                    className='p-2 border rounded'
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase mb-2'>Lastname</label>
                                <input
                                    type="text"
                                    className='p-2 border rounded'
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col mt-5'>
                            <label className='uppercase mb-2'>Description</label>
                            <textarea   
                                type="text"
                                className='p-2 border rounded'
                                value={about}
                                onChange={e => setAbout(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col mt-5'>
                            <label className='mb-2'>Photo URL</label>
                            <input
                                type="text"
                                className='p-2 border rounded'
                                value={photoUrl}
                                onChange={e => setPhotoUrl(e.target.value)}
                            />
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex flex-col mt-5'>
                                <label className='uppercase mb-2'>age</label>
                                <input
                                    type="text"
                                    className='p-2 border rounded'
                                    value={age}
                                    onChange={e => setAge(e.target.value)}
                                />
                            </div>

                            <div className='flex flex-col mt-5'>
                                <label>Skills</label>
                                <input 
                                    type="text"
                                    className='p-2 border rounded'
                                    value={ skills }
                                    onChange={e => setSkills(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className='flex flex-col mt-5'>
                            <label className='uppercase mb-2'>gender</label>
                            <div className='flex items-center gap-8 '>
                                <div className='w-24 h-20 relative'>
                                    <input
                                        type="radio"
                                        value='male'
                                        checked={gender == 'male'}
                                        onChange={handleGender}
                                        className='w-full h-full absolute opacity-0 m-0 cursor-pointer z-10'
                                    />
                                    <div className='w-full h-full flex flex-col justify-center items-center border-2 border-sky-500 rounded-md'>
                                        <FaMale size={ 24 } className='w-full text-sky-500' />
                                        <label className='text-sky-500 uppercase'>Male</label>
                                    </div>
                                </div>

                                <div className='w-24 h-20 relative'>
                                    <input
                                        type="radio"
                                        value='female'
                                        checked={gender == 'female'}
                                        onChange={handleGender}
                                        className='w-full h-full absolute opacity-0 m-0 cursor-pointer'
                                    />
                                    <div className='w-full h-full flex flex-col justify-center items-center border-2 border-sky-500 rounded-md'>
                                        <FaFemale size={ 24 } className = "w-full text-sky-500" />
                                        <label className='text-sky-500 uppercase'>Female</label>
                                    </div>
                                </div>

                                <div className='w-24 h-20 relative'>
                                    <input
                                        type="radio"
                                        value='others'
                                        checked={gender == 'others'}
                                        onChange={handleGender}
                                        className='w-full h-full absolute opacity-0 m-0 cursor-pointer'
                                    />
                                    <div className='w-full h-full flex flex-col justify-center items-center border-2 border-sky-500 rounded-md'>
                                        <TbGenderGenderfluid size={ 24 } className = "w-full text-sky-500 hover:text-black" />
                                        <label className='uppercase hover:text-black text-sky-500'>Others</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>{error}</p>

                        <div className='flex justify-center mt-10'>
                            <motion.button
                                whileTap={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                className='bg-linear-65 from-purple-500 to-pink-500 text-white px-10 py-3 text-lg cursor-pointer'
                                onClick={handleUpdate}
                            >Update
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileModal;
