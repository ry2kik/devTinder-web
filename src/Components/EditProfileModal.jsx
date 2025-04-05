import axios from 'axios';
import { addUser } from '../utils/userSlice';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/Constants';
import { useDispatch } from 'react-redux';

const EditProfileModal = ({ closeModal, user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const handleUpdate = async () => {
        closeModal();
        try {
            const res = await axios.patch(BASE_URL + '/profile/edit', {
                firstName,
                lastName,
                about,
                photoUrl,
                age,
                gender
            }, {
                withCredentials: true
            });
            // console.log(res);

            dispatch(addUser(res?.data?.data));
        } catch (error) {
            setError(error);
        }
    }

    return (
        <>
            <div className='fixed top-0 right-0 bottom-0 left-0 bg-base-100 opacity-50' onClick={closeModal}></div>
            <div className='fixed top-20 w-lg bg-base-300 rounded shadow'>
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
                            <input
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
                                <label className='uppercase mb-2'>gender</label>
                                <input
                                    type="text"
                                    className='p-2 border rounded'
                                    value={gender}
                                    onChange={e => setGender(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='flex justify-center mt-10'>
                            <button className='bg-linear-65 from-purple-500 to-pink-500 text-white px-10 py-3 text-lg' onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfileModal;
