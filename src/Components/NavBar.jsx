import React from 'react'
import LOGO from "../Images/LOGO.svg"


export default function NavBar() {
  return (
    <nav className='flex justify-between mt-[3%] mx-[5%] py-[10px] text-[16px] font-[500]'>
            <div>
                <img src={LOGO} alt="" />
            </div>

                <ul className='flex justify-between w-[20%]'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                </ul>

            <div className='flex justify-between w-[15%]'>
                <button className='bg-[#336699] border-[1px] border-[#2E2E2E] text-[#FFFFFF] px-[10%] py-[5px] rounded-[5px]'>Sign Up</button>
                <button className='border-[1px] border-[#2E2E2E] text-[#2E2E2E] px-[10%] py-[5px] rounded-[5px]'>Login</button>
            </div>
        </nav>
  )
}
