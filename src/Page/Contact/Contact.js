import React ,  { useRef } from 'react';

import emailjs from "@emailjs/browser";
import { toast } from 'react-hot-toast';
import banner from '../../Assets/banner.png';
const Contact = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_8acsfat",
        "template_6czbuse",
        form.current,
        "GzQCS6LTvNMH0nOTl"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
		  toast.success('Successfully sent message!')

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
			return (
	
			  <div id='contact' className="relative">
				<img
				src={banner}
				  className="absolute inset-0 object-cover w-full h-full"
				  alt=""
				/>
				<div className="relative bg-opacity-75 bg-deep-purple-accent-700">
				  <svg
					className="absolute inset-x-0 bottom-0 text-white"
					viewBox="0 0 1160 163"
				  >
					<path
					  fill="currentColor"
					  d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
					/>
				  </svg>
				  <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="flex flex-col items-center justify-between ">
					  <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16  xl:w-7/12">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
						  Contact Here !!!
						</h2>
						<p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
					      If You need any help ,Please Contact Here
						</p>
					
					  </div>
					  <div className="w-full max-w-xl xl:px-8 2xl:w-5/12">
						<div className="bg-white rounded shadow-2xl p-7 sm:p-10">
						  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
							Send Your Message Here
						  </h3>
						  <form ref={form} onSubmit={sendEmail}>
							<div className="mb-1 sm:mb-2">
							  <label
								htmlFor="firstName"
								className="inline-block mb-1 font-medium"
							  >
							Name
							  </label>
							  <input
								placeholder="John"
								required
								type="text"
								className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"        
								id="firstName"
								name="user_name"
							  />
							</div>
						
							<div className="mb-1 sm:mb-2">
							  <label
								htmlFor="email"
								className="inline-block mb-1 font-medium"
							  >
								E-mail
							  </label>
							  <input
								placeholder="john.doe@example.org"
								required
								type="email" 
								className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
								id="email"
								name="user_email"
							  />
							</div>
							<div>
							<label
								htmlFor="email"
								className="inline-block mb-1 font-medium"
							  >
							Message
							  </label>
							  <textarea
								placeholder="Message"
								required
								type="text"
								className="flex-grow w-full h-20 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
								id="email"
								name="message"
							  />
                            
							</div>
							<div className="mt-4 mb-2 sm:mb-4">
					
							  <input id="email" type="submit" value="Submit" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" />
							
							</div>
						
						  </form>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			);
		  };

export default Contact;