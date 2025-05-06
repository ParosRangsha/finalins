import React from 'react'
import Container from './Container'
import logo from '../assets/bg-none.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header bg-[#808080] text-[#fff] sticky w-full top-0 left-0">
        <Container>
            <div className="contain items-center justify-between block lg:flex">
                <div className="logo flex justify-center lg:justify-start items-center">
                    <img src={logo} alt="paramount logo" className='h-[40px] w-[40px]' />
                    <h1 className='text-[22px] lg:text-[32px]'>PARMOUNT TEXTILE PLC</h1>
                </div>
                <div className="menu mt-2 lg:mt-0">
                    <ul className='flex justify-center lg:justify-end'>
                        <li>
                            <Link to='/' className='block lg:py-[15px] lg:px-[30px] py-[5px] px-[15px] hover:bg-[#a4a4a4] duration-[0.5s] hover:rounded-[5px]'>Home</Link>
                        </li>
                        <li>
                            <Link to='/post' className='block lg:py-[15px] lg:px-[30px] py-[5px] px-[15px] hover:bg-[#a4a4a4] duration-[0.5s] hover:rounded-[5px]'>Post</Link>
                        </li>
                        <li>
                            <Link to='/about' className='block lg:py-[15px] lg:px-[30px] py-[5px] px-[15px] hover:bg-[#a4a4a4] duration-[0.5s] hover:rounded-[5px]'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='block lg:py-[15px] lg:px-[30px] py-[5px] px-[15px] hover:bg-[#a4a4a4] duration-[0.5s] hover:rounded-[5px]'>Contact</Link>
                        </li>
                        <li className='relative group'>
                            <Link to='/report' className='block  lg:py-[15px] lg:px-[30px] py-[5px] px-[15px] hover:bg-[#a4a4a4] duration-[0.5s] hover:rounded-[5px]'>Report</Link>
                            <ul className="absolute w-[150%] top-[100%] left-0 bg-red-600 scale-x-0 group-hover:scale-x-[100%] duration-300">
                                <li>
                                    <Link to='/handoverentry' className='px-[5px] hover:px-[10px]'>Handover</Link>
                                </li>
                                <li>
                                    <Link to='/shadeentry' className='px-[5px] hover:px-[10px]'>ShadeHold</Link>
                                </li>
                                <li>
                                    <Link to='/excessentry' className='px-[5px] hover:px-[10px]'>Excess</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header