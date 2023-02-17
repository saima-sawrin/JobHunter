import React from 'react';

const AllJobDesc = ({alljobDesc}) => {
        const{position,Job_Location, company , Job_Nature,img , salary}=alljobDesc;

    return (
        <div className="card card-side bg-base-100 shadow-xl my-5">
            
        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{position}</h2>
          <p>{Job_Location}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    );
};

export default AllJobDesc;