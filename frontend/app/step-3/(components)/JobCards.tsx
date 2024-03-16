'use client'
import React, { useState } from 'react'
interface JobCardProps {
    title: string;
    company: string;
    location: string;
    description: string;
    salary?:string;
    image?:string;
   }
   
   const JobCard: React.FC<JobCardProps> = ({ title, company, location, description,salary }) => {
      const [progress, setProgress] = useState(0);

      const updateProgress = () => {
          // Example: Increment progress by 10% each time
          setProgress(80);
      };
      return (
      <div className='flex w-full md:w-[600px] bg-white'>
       <div className="  m-2 flex flex-col ">
         <h4 className='text-xs '>{salary}</h4>
         <div>
          <div>

          </div>
          <div>
         <h2>{title}</h2>
         <h3>{company}</h3>
         <p>{location}</p>
         </div>
         </div>
         <p>{description}</p>
       </div>
       <div className="flex justify-center items-center h-64">
            <div className="relative w-64 h-64">
                <div className="absolute w-full h-full bg-white rounded-full"></div>
                <div className="absolute w-full h-full bg-transparent rounded-full border-t-4 border-black" style={{ transform: `rotate(${progress * 3.6}deg)` }}></div>
            </div>
           
        </div>
       </div>
    );
   };

export default JobCard
