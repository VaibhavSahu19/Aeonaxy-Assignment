import React from 'react'

function RightSignUp() {
  return (
    <section className='h-screen flex flex-col px-[40px] py-[20px] font-[roboto] text-[80%]'>
        <div className='flex w-[100%] justify-end'>Already a member?<a href='' className='text-blue-700'>&nbsp;Sign in</a>
        </div>
        <div className='flex flex-col px-[23%] pt-[30px] gap-[30px]'>
            <h3 className='text-2xl font-extrabold'>Sign up to Dribbble</h3>
            <div className='flex mt-[20px] justify-between'>
                <div className='flex flex-col w-[48%]'>
                    <label className='font-bold' >Name</label>
                    <input className='bg-[#e9e7e7] rounded-[4px] h-[30px] outline-none text-[15px] p-[17px]' type='text' placeholder='abcd'></input>
                </div>
                <div className='flex flex-col w-[48%]'>
                    <label className='font-bold' >Username</label>
                    <input className='bg-[#e9e7e7] rounded-[4px] h-[30px] outline-none text-[15px] p-[17px]' type='text' placeholder='abcd123'></input>
                </div>
            </div>
            <div className='flex flex-col'>
                <label className='font-bold'>Email</label>
                <input className='bg-[#e9e7e7] rounded-[4px] h-[30px] outline-none text-[15px] p-[17px]' type='text' placeholder='example@xyz.com'></input>
            </div>
            <div className='flex flex-col'>
                <label className='font-bold'>Password</label>
                <input className='bg-[#e9e7e7] rounded-[4px] h-[30px] outline-none text-[15px] p-[17px]' type='text' placeholder='6+ characters'></input>
            </div>
            <div className='flex items-start gap-[7px] text-justify'>
                <input type='checkbox' className='w-[15px] h-[15px] border-2'></input>
                <label>Creating an account means you're okay with our <a className='text-blue-700' href='' >Terms of Service</a>, <a className='text-blue-700' href='' >Privacy Policy</a>, and our default <a className='text-blue-700' href='' >Notification Settings</a>.</label>
            </div>
            <button className='bg-[#EA4A8A] w-[200px] h-[35px] rounded-md text-white hover:bg-pink-600 active:bg-pink-700'>
                Create Account
            </button>
            <div className='text-[10px] pr-[100px]'>This site is protected by reCAPTCHA and the Google <a className='text-blue-700'>Privacy Policy</a> and <a className='text-blue-700'>Terms of Service</a> apply.</div>
        </div>
    </section>
  )
}

export default RightSignUp