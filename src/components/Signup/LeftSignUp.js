import React from 'react'
import homePageImage from "../../images/Signup/1-picture.jpg";

function LeftSignUp() {
  return (
    <section className='h-screen flex flex-col justify-start bg-[#F2D184]  w-[40%]'>
        <h3 className='text-2xl px-[60px] pt-[40px] mb-[20px] text-[#AB863A] font-semibold font-[rochester]'>dribbble</h3>
        <p className='font-[roboto] px-[60px] font-bold text-[25px]  text-[#835E12] mb-[40px]'>Discover the world's top Designers & Creatives.</p>
        <div className='px-[30px] w-[90%]'>
            <img className='h-[100%]' src={ homePageImage }/>
        </div>
        <div className='px-[60px] mt-[30px]'>
            Art by <a className='underline' href='https://petertarka.com/'>Peter Tarka</a>
        </div>
    </section>
  )
}

export default LeftSignUp