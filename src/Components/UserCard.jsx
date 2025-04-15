import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({ user }) => {
    const dispatch = useDispatch();
    const feed = useSelector(store => store.feed);
    const { _id, firstName, lastName, age, gender, photoUrl, about } = user;

    const handleSendRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + `/request/send/${ status }/${ _id }`, {}, {
                withCredentials: true
            });

            dispatch(removeUserFromFeed(_id));
        } catch (error) {
            console.log(error);
        }    
    }

    return (
        <div key={ _id }>
            <div className='w-68 pt-2 bg-accent rounded shadow-lg'>
                <div className='w-full flex justify-center mt-8'>
                    <img src = { photoUrl || "https://imgs.search.brave.com/ul1ELzJhn3eDT8eV6L6sFVf3Ca6nEr9s5DHA1JybFYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw" } alt="The image not found" className='w-20 h-20 rounded-full' />
                </div>
                <div className='card-body'>
                    <h2 className='text-center'>{ firstName + ' ' + lastName }</h2>
                    <p className='text-center'>{ age && gender && age + ', ' + gender }</p>
                    <p className='text-center'>{ about  || `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,` }</p>

                    <div className='flex justify-center gap-4 mt-5'>
                        <button className='btn btn-primary' onClick={() => handleSendRequest('rejected', _id)}>Ignore</button>
                        <button className='btn btn-secondary' onClick={() => handleSendRequest('interested', _id)}>Send Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
