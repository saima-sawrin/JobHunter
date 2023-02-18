import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllJobDesc from './AllJobDesc';

const AllJobs = () => {
    const [allJobs , setAllJobs] = useState([]);
    useEffect(()=>{
      fetch('freshers.json')
      .then(res => res.json())
      .then(data => setAllJobs(data))
    },[])

    return (
        <div className='mx-40'>
            <h3 className='text-4xl font-bold text-center my-10 '> Available All Jobs for Freshers</h3>
            {
                allJobs.map(alljobDesc => <AllJobDesc key={alljobDesc.id} alljobDesc={alljobDesc}></AllJobDesc>)
            }
        </div>
    );
};

export default AllJobs;