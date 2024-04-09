import React, { useRef, useState} from 'react'
import cameraImage from "../../images/Profile/2-camera-image.png";
import { Link } from 'react-router-dom';

function Profile() {
    const [uploadImageIcon, setUploadImageIcon] = useState(cameraImage)
    const fileInputRef = useRef(null);

    const handleImageClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log('Selected file:', file);
    };
  return (
    <section className=' flex flex-col m-[10px] sm:m-[30px] gap-[30px] font-[roboto]'>
        <div className='font-[rochester] text-2xl text-pink-400 font-semibold'>dribbble</div>
        <div className='flex flex-col justify-center mx-[10%] sm:mx-[30%]'>
            <h2 className='text-3xl font-bold mb-[10px]'>Welcome! Let's create your profile</h2>
            <p className='text-[#686868] mb-[35px]'>Let others get to know you better! You can do these later</p>
            <h4 className='text-xl font-bold'>Add an avatar</h4>
            <div className='flex mb-[35px] items-center'>
                <div className=''>
                    <input
                        type="file"
                        accept="image/*"
                        id="file-input"
                        name="ImageStyle"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <img
                        className='w-[80%]'
                        src={uploadImageIcon}
                        alt="Upload Image"
                        style={{ cursor: 'pointer' }}
                    />
                    
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <label htmlFor="file-input">
                        <button className='w-[80%] text-[13px] sm:text-lg  border-[1.5px] rounded-lg h-[40px] font-medium' onClick={handleImageClick}>
                            Choose image
                        </button>
                    </label>
                    <a href='' className='flex justify-start gap-[3px] items-center text-gray-400 text-sm'>
                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                         Or choose one of our defaults
                    </a>
                </div>
            </div>
            <h4 className='text-lg font-bold mb-[10px] '>Add your location</h4>
            <input className='outline-none border-b-[2px] py-[5px] mb-[35px]' type='text' placeholder='Enter a location'></input>
            <Link to='/description'>
                <button className={`w-[42%]  text-white text-sm h-[30px] rounded-md bg-[#EB4B8B]`}>Next</button>
            </Link>
        </div>
    </section>
  )
}

export default Profile