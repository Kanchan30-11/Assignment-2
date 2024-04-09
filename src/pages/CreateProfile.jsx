import React from 'react'
import { MdCameraEnhance } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const CreateProfile = () => {
const handleNext=()=>{
  window.location.href="/selectOptions";
}

  return (
    <div className=' overflow-y-hidden py-8 lg:py-24 px-4   flex items-center justify-center'>
      <div className=' '>
        <h1 className='font-bold lg:text-4xl text-2xl text-center '>Welcome! Let's create your profile</h1>
        <p className='text-gray-500 lg:font-normal text-sm lg:text-base pt-4 '>Let others get to know you better! You can do these later</p>
        <div>
          <div className=''>
            <h2 className='lg:text-2xl font-bold lg:pt-10 pt-4'>Add an avatar</h2>
            <div className='flex lg:mt-6 mt-3 lg:space-x-8 flex-row space-x-4'>
            <label htmlFor="avatar-input" className="border-gray-200 border-dashed w-20 h-16 lg:w-40 lg:h-40 border-4 items-center rounded-full grid place-items-center relative">
                <MdCameraEnhance className='lg:h-6 lg:w-6 h-4 w-4 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                <input id="avatar-input" type='file' className='hidden'/>
              </label>
           
            <div>
             <button className='lg:px-4  px-2 py-1 border-[3px] border-gray-200 rounded-lg font-semibold lg:text-base text-sm' >Choose image</button>
             <div className='mt-5 space-x-2 text-gray-400 flex flex-row items-baseline '>
              <a className='flex item-center justify-center'>
              <FaChevronRight className=' text-gray-400 text-xs mt-1' />
              <p className='font-semibold lg:text-base text-sm '> Or choose one of our defaults</p>
              </a>
            </div>
            </div>
            </div>
          </div>
           <div className=''>
           <h2 className='lg:text-2xl text-xl font-bold pt-10'>Add your location</h2>
           
           <input type='text' placeholder='Enter your location' className=' w-full py-2 lg:text-lg text-base   text-gray-700 appearance-none bg-transparent border-b border-gray-400  leading-tight focus:outline-none focus:border-gray-600  ' />
           <div className='grid place-items-center lg:place-content-start '>
           <button  className='  mt-16 w-52 py-2 bg-pink-300 rounded-lg text-white font-semibold hover:bg-pink-600 ' onClick={handleNext}>Next</button>
           </div>
           </div>

        </div>
      </div>
    </div>
  )
}

export default CreateProfile
