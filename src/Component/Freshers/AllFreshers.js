import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllJobs from './AllJobs';
import Freshers from './Freshers';

const AllFreshers = () => {
  const [jobs , setJobs] = useState([]);
  useEffect(()=>{
    fetch('freshers.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  },[])
    return (
        <div>
          <div className='text-align-center   mt-4'>
          <h3 className='text-4xl font-bold text-center'> Available Jobs for Freshers</h3>
   
     <div >
     <div className="  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {
        jobs.map(job => <Freshers key={job.id} job={job}></Freshers>)
         }
     </div>
   
     </div>
     
     <div className="text-center">
        <Link
         to="/FreshersAllJobs"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          See More
        </Link>
      </div>
        </div>
        
  </div>
    );
};


export default AllFreshers;