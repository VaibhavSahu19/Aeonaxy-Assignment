import React from 'react'
import homePageImage from "../../images/Signup/1-picture.jpg";

function LeftSignUp() {
  return (
    <section className='flex flex-col justify-start bg-[#F2D184] sm:w-[40%] sm:h-[100%]'>
        <h3 className='text-2xl px-[60px] pt-[40px] mb-[20px] text-[#AB863A] font-semibold font-[rochester]'>dribbble</h3>
        <p className='font-[roboto] px-[60px] font-bold text-[25px]  text-[#835E12] mb-[40px]'>Discover the world's top Designers & Creatives.</p>
        <div className='px-[30px] w-[90%]'>
            <img className='h-[100%]' src={ homePageImage } alt='homepage img'/>
        </div>
        <div className='px-[60px] py-[20px]'>
            Art by <a className='underline' href='https://petertarka.com/'>Peter Tarka</a>
        </div>
    </section>
  )
}

export default LeftSignUp