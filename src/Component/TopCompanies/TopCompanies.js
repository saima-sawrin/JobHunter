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
               <div className='text-align-center   mt-4'>
          <h3 className='text-4xl font-bold text-center'>Top 3 IT Companies in Bangladesh</h3>
     </div>
     <div>
        {
          companies.map(company => <Company key={company.id} company={company}></Company>)
        }
     </div>
        </div>
    );
};

export default TopCompanies;