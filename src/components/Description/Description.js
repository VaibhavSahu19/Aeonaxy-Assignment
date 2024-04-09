import React, { useState } from 'react'
import Image1 from "../../images/Description/3-1.png"
import Image2 from "../../images/Description/3-2.png"
import Image3 from "../../images/Description/3-3.png"
import { Link } from 'react-router-dom';

function Description() {
    const [isImage1Clicked, setIsImage1Clicked] = useState(false);
    const [isImage2Clicked, setIsImage2Clicked] = useState(false);
    const [isImage3Clicked, setIsImage3Clicked] = useState(false);

    function handleClick(num){
        if(num === 1){
            setIsImage1Clicked(!isImage1Clicked);
        }else if(num === 2){
            setIsImage2Clicked(!isImage2Clicked);
        }else{
            setIsImage3Clicked(!isImage3Clicked);
        }
    }

  return (
    <section className='flex flex-col m-[20px] font-[roboto] justify-center'>
        <div className='flex gap-4 justify-start items-center'>
            <div className='font-[rochester] text-2xl text-[#EB4B8B] font-semibold '>dribbble</div>
            <Link to='/profile'>
                <button className="material-symbols-outlined bg-[#e2e2e2] rounded-[5px] p-[4px] text-md">
                    chevron_left
                </button>
            </Link>
        </div>
        <div className='flex flex-col justify-center items-center text-center py-[20px]'>
            <h2 className='text-3xl font-extrabold'>What brings you to Dribbble?</h2>
            <p className='mt-[5px] text-gray-500 text-sm'>Select the options that best describes you. Don't worry, you can explore the other options later.</p>
            <div className='flex flex-col sm:flex-row mt-[80px] gap-[70px] md:gap-[20px] text-center justify-center items-top w-[70%]'>
                <div className={`relative flex flex-col justify-center items-center border-[2px] rounded-[10px] sm:gap-[10px] h-[auto] w-[100%] sm:h-[350px] sm:w-[280px] cursor-pointer ${isImage1Clicked ? 'border-[#Eb4B8B]' : ''} py-[10px]`} onClick={() => handleClick(1)}>
                    <img className={`w-[100%] h-auto ${isImage1Clicked ? 'hidden' : ''} sm:${isImage1Clicked ? 'flex absolute -top-1/4' : 'flex'} `} src={Image1} alt='Option 1' />
                    <h3 className='text-2xl font-bold px-[20px]'>I'm a designer looking to share my work</h3>
                    <p className={`text-[13px] text-gray-500 px-[20px] ${isImage1Clicked ? '' : 'hidden'}`}>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                    <div className='relative'>
                        <input className={`w-[20px] h-[20px] border-[2px] rounded-[50%] flex justify-center items-center text-[10px] ${
                        isImage1Clicked ? 'border-[#Eb4B8B] bg-[#Eb4B8B]' : ''
                        } relative`}></input>
                        <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white material-symbols-outlined ${
                        isImage1Clicked ? '' : 'hidden'
                        }`}>
                            done
                        </span>
                    </div>
                </div>
                <div className={`relative flex flex-col justify-center items-center border-[2px] rounded-[10px] sm:gap-[10px] h-[auto] w-[100%] sm:h-[350px] sm:w-[280px] cursor-pointer ${isImage2Clicked ? 'border-[#Eb4B8B]' : ''} py-[10px]`} onClick={() => handleClick(2)}>
                    <img className={`w-[100%] h-auto ${isImage2Clicked ? 'hidden' : ''} sm:${isImage2Clicked ? 'flex absolute -top-1/4' : 'flex'} `} src={Image2} alt='Option 2' />
                    <h3 className='text-2xl font-bold px-[20px]'>I'm looking to hire a designer</h3>
                    <p className={`text-[13px] text-gray-500 px-[20px] ${isImage2Clicked ? '' : 'hidden'}`}>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                    <div className='relative'>
                        <input className={`w-[20px] h-[20px] border-[2px] rounded-[50%] flex justify-center items-center text-[10px] ${
                        isImage2Clicked ? 'border-[#Eb4B8B] bg-[#Eb4B8B]' : ''
                        } relative`}></input>
                        <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white material-symbols-outlined ${
                        isImage2Clicked ? '' : 'hidden'
                        }`}>
                            done
                        </span>
                    </div>
                </div>
                <div className={`relative flex flex-col justify-center items-center border-[2px] rounded-[10px] sm:gap-[10px] h-[auto] w-[100%] sm:h-[350px] sm:w-[280px] cursor-pointer ${isImage3Clicked ? 'border-[#Eb4B8B]' : ''} py-[10px]`} onClick={() => handleClick(3)}>
                    <img className={`w-[100%] h-auto ${isImage3Clicked ? 'hidden' : ''} sm:${isImage3Clicked ? 'flex absolute -top-1/4' : 'flex'} `} src={Image3} alt='Option 3' />
                    <h3 className='text-2xl font-bold px-[20px]'>I'm looking for design inspiration</h3>
                    <p className={`text-[13px] text-gray-500 px-[20px] ${isImage3Clicked ? '' : 'hidden'}`}>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                    <div className='relative'>
                        <input className={`w-[20px] h-[20px] border-[2px] rounded-[50%] flex justify-center items-center text-[10px] ${
                        isImage3Clicked ? 'border-[#Eb4B8B] bg-[#Eb4B8B]' : ''
                        } relative`}></input>
                        <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white material-symbols-outlined ${
                        isImage3Clicked ? '' : 'hidden'
                        }`}>
                            done
                        </span>
                    </div>
                </div>
            </div>

            {(isImage1Clicked || isImage2Clicked || isImage3Clicked) && <h4 className='mt-[20px] text-md font-bold'>Anything else? You can select multiple</h4>}
            <Link to='/verify' className='w-[200%] h-[40px]'>
                <button className='bg-[#Eb4B8B] px-[16px] py-[10px] mt-[10px] text-white rounded-lg'>Finish</button>
            </Link>
        </div>
    </section>
  )
}

export default Description