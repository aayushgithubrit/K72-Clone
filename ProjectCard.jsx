import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
    <div className=' relative group lg:w-1/2 hover:rounded-[60px] overflow-hidden transition-all rounded-none h-full '>
             <img className='h-full w-full object-cover' src={props.image1} alt="" />
             <div className='opacity-0 group-hover:opacity-100 transition-all absolute flex items-center justify-center h-full w-full top-0 left-0 bg-black/10 '>
              <h2 className='uppercase font-[font1] text-6xl border-2 pt-5 px-8 text-white rounded-full '>Vior le projet</h2>
             </div>
          
          </div>
      
          <div className=' relative group lg:w-1/2 hover:rounded-[60px] overflow-hidden transition-all rounded-none h-full '>
             <img className='h-full w-full object-cover' src={props.image2} alt="" />
             <div className='opacity-0 group-hover:opacity-100 transition-all absolute flex items-center justify-center h-full w-full top-0 left-0 bg-black/10 '>
              <h2 className='uppercase font-[font1] text-6xl border-2 pt-5 px-8 text-white rounded-full '>Vior le projet</h2>
             </div>
          
          </div>
    
    
    
    </>
        
  )
}

export default ProjectCard