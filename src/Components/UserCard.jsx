import React from 'react'

const UserCard = ({ user }) => {
    const { firstName, lastName, age, gender, photoUrl, about } = user;
    return (
        <div className=''>
            <div className='w-68 pt-2 bg-accent rounded shadow-lg'>
                <div className='w-full flex justify-center mt-8'>
                    <img src="https://imgs.search.brave.com/ul1ELzJhn3eDT8eV6L6sFVf3Ca6nEr9s5DHA1JybFYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw" alt="The image not found" className='w-20 h-20 rounded-full' />
                </div>
                <div className='card-body'>
                    <h2 className='text-center'>{ firstName + ' ' + lastName }</h2>
                    <p>{ age && gender && age + ', ' + gender }</p>
                    <p>{ about  || `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,` }</p>

                    <div className='flex gap-4 mt-5'>
                        <button className='btn btn-primary'>Ignore</button>
                        <button className='btn btn-secondary'>Send Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
