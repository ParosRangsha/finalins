import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className="footer bg-[#000] text-[#fff] fixed bottom-0 left-0 w-full py-[5px] lg:py-[10px]">
      <Container>
        <div className="contain">
          <p className='text-center text-[10px] lg:text-[16px]'>All are reserved by Final Inspection @2025.</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer