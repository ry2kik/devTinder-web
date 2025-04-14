import axios from 'axios';
import { useEffect } from 'react'
import { BASE_URL } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, removeRequest } from '../utils/requestSlice';
import { Shimmer } from './Shimmer';

const Requests = () => {
    const requests = useSelector(store => store.requests);
    const dispatch = useDispatch();

    const fetchRequest = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/requests/received', {
                withCredentials: true
            });
            dispatch(addRequest(res.data.data));
        } catch (error) {
            console.log(error);
        }
    }

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + `/request/review/${ status }/${ _id }`, {}, {
                withCredentials: true
            });
            
            dispatch(removeRequest(_id));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRequest();
    }, []);

    return (requests == null) ? <Shimmer /> : (
        requests && (
            <div>
                <h1 className='flex justify-center mt-10 uppercase text-lg'>Connection Requests</h1>
                {
                    requests.map(request => {
                        const { firstName, lastName, about, photoUrl, gender, age } = request.fromUserId;
                        return (
                            <div className='flex items-center justify-center my-4' key = { request._id }>
                                <div className='w-1/2 bg-base-300 shadow-md flex p-4 rounded-md'>
                                    <div className='w-1/4'>
                                        <img src={ photoUrl || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' } alt="The image not found" className='w-24 h-24 rounded-full' />
                                    </div>
                                    <div className='w-3/4 flex items-center'>
                                        <div>
                                            <h1 className='text-primary text-xl font-bold'>{firstName + ' ' + lastName}</h1>
                                            <p className='text-gray-400 text-base'>{age && gender && age + ', ' + gender}</p>
                                            <p className='text-gray-500 text-sm'>{about}</p>
                                            
                                            <div className='flex gap-4 mt-2'>
                                                <button className='btn btn-primary py-2 px-5' onClick={() => reviewRequest('accepted', request._id) }>Confirm</button>
                                                <button className='btn btn-secondary px-6' onClick={() => reviewRequest('rejected', request._id)}>Delete</button>
                                            </div>
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

export default Requests;
