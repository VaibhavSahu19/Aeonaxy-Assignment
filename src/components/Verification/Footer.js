import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faTwitter, faFacebook, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className='flex flex-col bg-gray-100 p-[30px] text-sm'>
        <div className='flex justify-between flex-wrap items-center md:items-start gap-[10px]'>
            <div className='flex flex-col md:w-[18%] gap-[10px]'>
                <h2 className='text-2xl text-[#EB4B8B] font-[rochester] font-semibold'>dribbble</h2>
                <p className=''>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                <div className='flex gap-[15px]'>
                    <FontAwesomeIcon icon={faDribbble} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faPinterest} />
                </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='font-bold'>For Designers</div>
                <ul className='flex flex-col gap-[10px]'>
                    <li>Go Pro!</li>
                    <li>Explore design work</li>
                    <li>Design blog</li>
                    <li>Overtime podcast</li>
                    <li>Playoffs</li>
                    <li>Weekly Warm-up</li>
                    <li>Refer a Friend</li>
                    <li>Code of conduct</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='font-bold'>Hire designers</div>
                    <ul className='flex flex-col gap-[10px]'>
                        <li>Post a job opening</li>
                        <li>Post a freelance project</li>
                        <li>Search for designers</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='font-bold'>Brands</div>
                    <ul className='flex flex-col gap-[10px]'>
                        <li>Advertise with us</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='font-bold'>Company</div>
                <ul className='flex flex-col gap-[10px]'>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Media kit</li>
                    <li>Testimonials</li>
                    <li>API</li>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                    <li>Cookie policy</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='font-bold'>Directories</div>
                    <ul className='flex flex-col gap-[10px]'>
                        <li>Design jobs</li>
                        <li>Designers for hire</li>
                        <li>Freelance designers for hire</li>
                        <li>Overtime podcast</li>
                        <li>Tags</li>
                        <li>Places</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='font-bold'>Design assets</div>
                    <ul className='flex flex-col gap-[10px]'>
                        <li>Dribbble Marketplace</li>
                        <li>Creatie Market</li>
                        <li>Fontspring</li>
                        <li>Font Squirrel</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <div className='font-bold'>Design Resources</div>
                <ul className='flex flex-col gap-[10px]'>
                    <li>Freelancing</li>
                    <li>Design Hiring</li>
                    <li>Design Portfolio</li>
                    <li>Design Education</li>
                    <li>Creative Process</li>
                    <li>Design Industry Trends</li>
                </ul>
            </div>
        </div>
        <div className='my-[20px] flex justify-center items-center'>
            <hr className='w-[90%]' />
        </div>
        <footer className='flex justify-between text-[10px] text-gray-500'>
            <div className=''>
                &#169; 2023 Dribbble. All rights reserved.
            </div>
            <div className='flex gap-[5px] justify-center items-center'>
                <div className=''>
                    <span className='text-black font-bold'>20,501,853</span> shots dribbbled
                </div>
                <FontAwesomeIcon className='text-black text-[17px] rounded-[50%] bg-[#EB4B8B]' icon={faDribbble} />
            </div>
        </footer>
    </footer>
  )
}

export default Footer