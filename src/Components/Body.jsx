import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(store => store.user);

    const fetchData = async () => {
        try {
            const res = await axios.get(BASE_URL + '/profile/view', {
                withCredentials: true
            });

            dispatch(addUser(res.data));
        } catch (error) {
            if (error.status == 401) 
                navigate('/login');
            console.error(error);
        }
    }

    useEffect(() => {
        if (!userData) {
            fetchData();
        }
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Body
