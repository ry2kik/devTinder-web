import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './userCard'

const Feed = () => {
    const feed = useSelector(store => store.feed);
    const dispatch = useDispatch();

    const getFeed = async () => {
        if (feed) return;
        try {
            const res = await axios.get(BASE_URL + '/feed', {
                withCredentials: true
            });
            dispatch(addFeed(res.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFeed();
    }, []);

    if (!feed) return;

    return (feed.length == 0) ? <h1 className='flex justify-center mt-10 text-xl'>No More Users found!!</h1> : (
        feed && (
            <div className='flex flex-wrap justify-center gap-8 mx-8 mt-20'>
                <UserCard user = { feed[0] } />
            </div>
        )
    )
}

export default Feed;
