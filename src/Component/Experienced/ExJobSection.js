import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExJobs from './ExJobs';

const ExJobSection = () => {
    const [allExJobs , setAllExJobs] = useState([]);
    useEffect(()=>{
      fetch('freshers.json')
      .then(res => res.json())
      .then(data => setAllExJobs(data))
    },[])
    return (
        <div className='mx-5 my-5'>
            <div >
        <h3 className='text-4xl font-bold text-center my-10 '> Available Jobs for Experienced</h3>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5'>
        {
            allExJobs.map(allExJob => <ExJobs key={allExJob.id} allExJob={allExJob}></ExJobs>)
        }
        </div>
      

        <div className="text-center mt-4 ">
        <Link
         to="/FreshersAllJobs"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          See More
        </Link>
      </div>
        </div>
    );
};

export default ExJobSection;