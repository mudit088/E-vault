import React from 'react'

const Navbar = () => {
  return (
   

   
        <div className=' m-3 flex items-inline  flex-col  sm:flex-row bg-gradient-to-r from-blue-700 to-blue-200'>
        <div className="  ml-0 inline-flex">
          <img src="NPB_Transparent.png" className='h-16 m-3 ml-24  rounded-lg sm:ml-6 mt-4  ' />
          <p className='text-white text-xl inline-center pt-8'>NoPlayButton</p>
          </div>
          
         <div className='inline-flex inline-center justify-center items-center'>
          <h1 className='  font-semibold text-3xl text-white pl-96 '>
            Legal Record Management
          </h1>
         </div>

         
        
        </div>
      );
    }

  
export default Navbar