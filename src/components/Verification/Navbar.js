import React from 'react'
import user from "../../images/Verify/user.png";

function Navbar() {
  return (
    <nav className='flex  justify-between gap-[5px] md:gap-[0px] px-[20px] py-[10px] border-b-[1px] border-gray-200 sticky top-0  bg-white'>
        <div className='flex justify-normal w-[50%] items-center gap-[30px]'>
            <div className='font-[rochester] text-[20px]  font-semibold'>dribbble</div>
            <ul className='hidden md:flex justify-evenly items-center gap-[30px] text-gray-600'>
                <li className='text-[13px]'>Inspiration</li>
                <li className='text-[13px]'>Find Work</li>
                <li className='text-[13px]'>Learn Design</li>
                <li className='text-[13px]'>Go Pro</li>
                <li className='text-[13px]'>Hire Designers</li>
            </ul>
        </div>
        <div className='flex justify-end items-center gap-[10px]'>
            <div className='flex items-center gap-[5px] px-[5px] text-gray-400 bg-gray-200 py-[5px] md:py-[0px] md:w-[40%] rounded-md'>
                <span className="material-symbols-outlined text-[20px]">
                    search
                </span>
                <input className='hidden md:block outline-none px-[4px] py-[6px]  text-md bg-transparent w-[100%]' type='text' placeholder='Search'></input>
            </div>
            <div className='flex justify-center items-center gap-[10px]'>
                <span className="material-symbols-outlined text-gray-400">
                business_center
                </span>
                <img src={user} alt='profile' className='w-[20px]'></img>
            </div>
            <button className='px-[10px] py-[6px]  bg-[#Eb4B8B] text-white rounded-md text-sm'>Upload</button>
        </div>
    </nav>
  )
}

export default Navbar