import React from 'react';

const Header = () => {
  
        return (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
              
              <div className="flex flex-col justify-center">
              <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          We have 200,000 great job offers you deserve!
          </p>
        </div>
             
                <div className="max-w-xl mb-6">
                 
                  <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Largets Job Site 
                    <br className="hidden md:block" />
                    In The World{' '}
                    {/* <span className="inline-block text-deep-purple-accent-400">
                      will love
                    </span> */}
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae. explicabo.
                  </p>
                 
                </div>
                <div>
                  <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Select your job"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
            />
         
        
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Search
            </button>
          </form>
                  </div>
               
              </div>
              <div className="relative">
                <img src='post.svg' alt="" className=' w-full'/>
              </div>
            </div>
          </div>
        );
      };
export default Header;