import React from 'react'
import JobList from './(components)/JobList';

const Step3= () => {
  return (
    <div className='flex justify-around bg-neutral-100/60'>
      <div>
        Filters</div>
      <div className='flex flex-col'>
        <h1 className='font-extrabold text-lg tracking-wider'>Jobs according to your resume</h1>
        <JobList/>
      </div>
      <div>
        Resume Strenght
        Ads
      </div>
    </div>
  )
}

export default Step3;
