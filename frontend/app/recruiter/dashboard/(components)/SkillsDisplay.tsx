import React from 'react'
import { LuDot } from 'react-icons/lu'
interface SkillsDisplayProps{
    skills:string[] 
}
const SkillsDisplay:React.FC<SkillsDisplayProps>= ({skills}) => {
  return (
    <>
        {skills.map((skill,index )=>(
            <div key={index} className='flex items-center'>
              <span>{skill}</span>
              { 
              index<skills.length -1 && <LuDot/>
              }
            </div>
        ))}
      </>
    
  )
}

export default SkillsDisplay
