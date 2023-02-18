import React from 'react';
import { Link } from 'react-router-dom';

const Company = ({company}) => {
    const{img , name , detail} = company;
    return (
        <div>
        {/* <div className="max-w-screen-lg sm:mx-auto ">
                  <div className="rounded-md shadow-md flex flex-col justify-between items-start py-4   sm:px-4 lg:flex-row sm:hover:bg-blue-gray-50">
                    <div><img src={img} alt="" /></div>
                    <div className="mb-4 lg:mb-0">
                      <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                     {name}
                      </h5>
                   
                    </div>
                    <div className="flex justify-start w-56 lg:justify-end">
                   
                    <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      <a href={`${detail}`} target='_blank' title={`${detail}`} >  See Details</a>
                  </button>
                    </div>
                  </div>
               
               
                </div> */}

    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
  
      <div>
       
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
          <div>
                <img src={img} alt="" className='w-24' />
            </div>
            <h6 className="mb-2 font-semibold leading-5">{name}</h6>
            <p className="text-sm text-gray-900">
            The software has evolved into a critical component of technology. In today’s digital age, software has become an enormously important aspect of both business and daily life. 
            </p>
            <div className="flex justify-start w-56 lg:justify-end mt-5">
                   
                    <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      <a href={`${detail}`} target='_blank' title={`${detail}`} >  See Details</a>
                  </button>
                    </div>
          </div>
        </div>
      </div>
      
    </div>
 
    </div>
    );
};

export default Company;