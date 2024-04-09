import React from 'react'
import sideImg from '../assets/side1.jpg'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

const handleSubmit =()=>{
  alert('Submitted');
  console.log('Submitted');
  navigate('/createProfile')
}

  return (
    <div className=' font-abc relative overflow-y-hidden flex  flex-col md:flex-row'>
      <div className='lg:w-1/2'>
        <img src={sideImg} className=' lg:h-screen object-cover w-full '/>
      </div>
      <div >
      <div className=' absolute text-sm  font-medium right-0 top-0 p-4 flex  space-x-2'>
           <h5 className=''>Already a member?</h5> 
           <a className='text-blue-700 ' href='/'>Sign In</a>
        </div>
        <form className='md:pt-20 lg:mx-72   w-full  p-4 text-center lg:w-96 ' >
           <h1 className='font-extrabold text-xl lg:text-3xl'>Sign up to Dribble</h1> 
           <div className='space-y-8 sm:px-36 md:px-2'>
           <div className='flex space-x-4 pt-6  lg:pt-20'>
            <div>
            <h1 className='font-semibold lg:font-extrabold text-sm lg:text-xl text-start'>Name</h1>
            <input type='text' placeholder=' Name' className='w-full lg:px-6 text-sm lg:text-lg lg:py-2 px-4 py-1 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500' />
            </div>
            <div>
            <h1  className='font-semibold lg:font-extrabold text-sm lg:text-xl text-start'>UserName</h1>
            <input type='text' placeholder=' Username' className='w-full lg:px-6 text-sm lg:text-lg lg:py-2 px-4 py-1  text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500' />
            </div>
           </div>
           <div>
            <h1 className='font-semibold lg:font-extrabold text-sm lg:text-xl text-start'>Email</h1>
            <input type='text' placeholder=' email@.com' className='w-full lg:px-6 text-sm lg:text-lg lg:py-2 px-4 py-1  text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500' />
           </div>
           <div>
            <h1 className='font-semibold lg:font-extrabold text-sm lg:text-xl text-start'>Password</h1>
            <input type='text' placeholder='6+characters' className='w-full lg:px-6 text-sm lg:text-lg lg:py-2 px-4 py-1   text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500' />
           </div>
           <div className='flex items-start space-x-2'>
           
            <input type='checkbox'  className=' p-4 mt-1  text-gray-700 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:bg-white focus:border-gray-500' />
           
           <div className='text-gray-500 text-sm font-medium text-justify '>Creating an account means you're okay with our <a className='text-indigo-800'>Terms of Services, privacy Policy, </a>and our default <a>Notification Settings.</a></div>
           </div>
           <button className=' px-5 py-1 lg:px-10 lg:py-2 bg-pink-600 rounded-lg text-white font-medium lg:font-semibold' onClick={handleSubmit}>Create Account</button>
           </div>

           <p className='pt-4 text-xs text-gray-400 font-normal'>This site is protected by reCaptcha and Google <a>Privacy Policy </a> and <a>Terms of Services</a></p>
        </form>
        </div>
    </div>
  )
}

export default Signup
