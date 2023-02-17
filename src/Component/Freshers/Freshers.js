import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Freshers = ({job}) => {
 
    const{position,Job_Location, company , Job_Nature, }=job;
    console.log(job);


                return (
                  <div >
                    <div className="max-w-screen-lg sm:mx-auto ">
                      <div className="flex flex-col justify-between items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                        <div className="mb-4 lg:mb-0">
                          <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                         {position}
                          </h5>
                          <div className="flex flex-col">
                        <div>
                        <p className="text-base  text-gray-700 md:text-lg">
                              {Job_Location}
                            </p>
                        </div>
                          <div>
                          <p className="text-base text-gray-700 md:text-lg">
                              {Job_Nature}
                            </p>
                          </div>
                          </div>
                        </div>
                        <div className="flex justify-start w-56 lg:justify-end">
                       
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Apply Now
                      </button>
                        </div>
                      </div>
                   
                   
                    </div>
                  </div>
                );
              };
          
export default Freshers;