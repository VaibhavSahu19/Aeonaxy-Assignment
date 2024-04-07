import React from 'react'
import email from "../../images/Verify/email.png"

function Main() {
  return (
    <section className='flex flex-col justify-center items-center gap-[10px] text-[roboto] my-[40px] '>
        <h1 className='text-2xl font-bold '>Please verify your email...</h1>
        <img className='w-[10%]' src={email} alt='email icon'></img>
        <p className='text-gray-500 text-sm font-medium'>Please verify your email address. We've sent a confirmation email to:</p>
        <div className='font-bold text-md'>account@refero.design</div>
        <p className='text-gray-500 text-sm font-medium'>Click the confirmation link in that email to begin using Dribbble.</p>
        <p className='text-gray-500 text-sm font-medium px-[27%] text-center'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <a className='text-[#EB4B8B] font-bold' href=''>resent the confirmation email.</a></p>
        <div className='text-gray-500 text-sm font-medium'>Wrong email address? <a className='text-[#EB4B8B] font-bold' href=''>Change it.</a></div>
    </section>
  )
}

export default Main