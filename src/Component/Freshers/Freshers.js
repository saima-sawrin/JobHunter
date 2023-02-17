import React from 'react';

import { FaMapMarked, FaStopwatch  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Freshers = ({job}) => {
 
    const{position,Job_Location, company , Job_Nature,img }=job;
    console.log(job);


                return (
                  <div >
                    <div className="max-w-screen-lg sm:mx-auto ">
                      <div className="rounded-md shadow-md flex flex-col justify-between items-start py-4   sm:px-4 lg:flex-row sm:hover:bg-blue-gray-50">
                        <div><img src={img} alt="" /></div>
                        <div className="mb-4 lg:mb-0">
                          <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                         {position}
                          </h5>
                          <div className="grid grid-cols-2">
                        <div>
                        <p className="text-base lg:ml-2   text-gray-400 md:text-lg">
                       
                        <FaMapMarked></FaMapMarked>{Job_Location}
                            </p>
                        </div>
                          <div>
                          <p className="text-base text-gray-400 md:text-lg lg:ml-2">
                            <FaStopwatch></FaStopwatch> {Job_Nature}
                            </p>
                          </div>
                          </div>
                        </div>
                        <div className="flex justify-start w-56 lg:justify-end">
                       
                        <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                          <Link to='/signup'>   Apply Now</Link>
                      </button>
                        </div>
                      </div>
                   
                   
                    </div>
                    
                  </div>
                );
              };
          
export default Freshers;