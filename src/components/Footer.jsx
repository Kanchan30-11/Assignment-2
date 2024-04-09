import React from 'react'
import logo from '../assets/pinkLogo.png'
import { LiaBasketballBallSolid } from "react-icons/lia";
import { FaTwitter,FaFacebook,FaInstagram,FaPinterest } from "react-icons/fa";
import {
    forDesigner,hireDesigner, Company , directories,designAssets, designResources
} from '../Data/FooterData'


const Footer = () => {
  return (
    <footer className='lg:px-24 px-4 pb-4 mt-8 lg:mt-0 bg-stone-200 bg-opacity-45'>
        <div className='container mx-auto'>
      <div className='flex lg:flex-row sm:flex-row  flex-col md:text-base text-xs md:space-x-11 space-y-6 md:pt-16 lg:justify-start'>
        <div>
            <img src={logo} alt="" className='h-28  '/>
            <p>
                Dribble is the worlds leading community for creatives to share, grow, and get hired
            </p>
            <div className='flex  space-x-4 pt-7 '>
             <a>
              <LiaBasketballBallSolid className='h-6 w-6 text-gray-700 rotate-45'/>
              </a>
              <a>
              <FaTwitter className='h-6 w-6 text-gray-700 '/>
              </a>
              <a>
              <FaFacebook className='h-6 w-6 text-gray-700 '/>
              </a>
              <a>
                <FaInstagram className='h-6 w-6 text-gray-700 '/>
              </a>
              <a>
              <FaPinterest className='h-6 w-6 text-gray-700 '/>
              </a>
              
              
           
            </div>
        </div>
      
        <div className=''>
            <div className='font-semibold'>For Desingers</div>
            {
                forDesigner.map((item,index) => {
                    return (
                        <div className='flex space-x-4 pt-3' key={index}>
                           {item.name}
                        </div>
                    )
                })
            }
        </div>
        <div>
            <div>
                <div className='font-semibold'>Hire designers</div>
                {
                    hireDesigner.map((item,index) => {
                        return (
                            <div className='flex space-x-4 pt-3' key={index}>
                               {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className='mt-4'>
                <div className='font-semibold'>Brands</div>
                 <a>
                    Advertise with us
                 </a>
            </div>
        </div>
        <div>
            <div className='font-semibold'>Company</div>
            {
                Company.map((item,index) => {
                    return (
                        <div className='flex space-x-4 pt-3' key={index}>
                           {item.name}
                        </div>
                    )
                })
            }
        </div>
        <div>
            <div>
                <div className='font-semibold'>Directories</div>
                {
                    directories.map((item,index) => {
                        return (
                            <div className='flex space-x-4 pt-3' key={index}>
                               {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div className='font-semibold mt-4'>Design Assets</div>
                {
                    designAssets.map((item,index) => {
                        return (
                            <div className='flex space-x-4 pt-3' key={index}>
                               {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div>
            <div className='font-semibold '>Design Resources</div>
            {
                designResources.map((item,index) => {
                    return (
                        <div className='flex space-x-4 pt-3' key={index}>
                           {item.name}
                        </div>
                    )
                })
            }
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
