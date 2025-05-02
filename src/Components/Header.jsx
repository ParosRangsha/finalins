import React from 'react'
import Container from './Container'
import logo from '../assets/bg-none.png'
import { Link } from 'react-router-dom'

const Header = () => {
    let menulist = ['Home', 'Post', 'About', 'Contact', 'Report']
  return (
    <div className="header bg-[#808080] text-[#fff] py-[10px] sticky w-full top-0 left-0">
        <Container>
            <div className="contain items-center justify-between block lg:flex">
                <div className="logo flex justify-center lg:justify-start items-center">
                    <img src={logo} alt="paramount logo" className='h-[40px] w-[40px]' />
                    <h1 className='text-[22px] lg:text-[32px]'>PARMOUNT TEXTILE PLC</h1>
                </div>
                <div className="menu mt-2 lg:mt-0">
                    <ul className='flex justify-center lg:justify-end'>
                        {
                            menulist.map((item, i)=>(
                                <li key={i}>
                                    <Link to={`/${item}`} className='lg:py-[15px] lg:px-[30px] py-[5px] px-[15px] hover:bg-[#a4a4a4] duration-[0.5s] hover:rounded-[5px]'>{item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header