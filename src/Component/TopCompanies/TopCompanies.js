import React, { useEffect, useState } from 'react';
import Company from './Company';

const TopCompanies = () => {
     const[companies , setCompanies] = useState([]);

     useEffect(()=>{
        fetch('companies.json')
        .then(res => res.json())
        .then(data => setCompanies(data))
      },[])
    return (
        <div>
               {/* <div className='text-align-center   mt-4'>
          <h3 className='text-4xl font-bold text-center'>Top 3 IT Companies in Bangladesh</h3>
     </div> */}
     <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  text-blue-400 sm:text-4xl md:mx-auto">
          <span className="relative inline-block ">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative ">Top 3</span>
          </span>{' '}
        Software Companies in Bangladesh
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

     <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-2'>
        {
          companies.map(company => <Company key={company.id} company={company}></Company>)
        }
     </div>
     
        </div>
    );
};

export default TopCompanies;