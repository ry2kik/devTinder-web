import axios from 'axios'
import { Shimmer } from './Shimmer';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector(store => store.connections);

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/connections', {
                withCredentials: true
            });
            dispatch(addConnections(res?.data?.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchConnections();
    }, []);


    return (connections == null) ? <Shimmer /> : (
        connections && (
            <div>
                <h1 className='flex justify-center mt-10 uppercase text-lg'>Connections</h1>
                {
                    connections.map(connection => {
                        const { _id, firstName, lastName, about, photoUrl, gender, age } = connection;
                        return (
                            <div className='flex justify-center my-4' key = { _id }>
                                <div className='w-1/2 bg-base-300 shadow-md flex p-4 rounded-md'>
                                    <div className='w-1/4'>
                                        <img src={ photoUrl || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' } alt="The image not found" className='w-20 h-20 rounded-full' />
                                    </div>
                                    <div className='w-3/4 flex items-center'>
                                        <div>
                                            <h1 className='text-primary text-xl font-bold'>{firstName + ' ' + lastName}</h1>
                                            <p className='text-gray-400 text-base'>{age && gender && age + ', ' + gender}</p>
                                            <p className='text-gray-500 text-sm'>{about}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    )
}

export default Connections
