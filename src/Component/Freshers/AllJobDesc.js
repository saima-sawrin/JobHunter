import React from 'react';

const AllJobDesc = ({alljobDesc}) => {
        const{position,Job_Location, Company , Job_Nature,img , Salary}=alljobDesc;

    return (
        <div className="card card-side bg-base-100 shadow-xl my-5 ">
            
        <figure className='ml-5'><img src={img} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{position}</h2>
          <p>{Job_Location}</p>
          <p className="text-base text-gray-400 md:text-lg ">Company Name:   {Company}</p>
          <p className="text-base text-gray-400 md:text-lg ">Job Type : {Job_Nature}</p>
          <p className="text-base text-gray-800 md:text-lg ">Salary : {Salary}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    );
};

export default AllJobDesc;