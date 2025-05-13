import React, { useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <Container>
        <div className="lg:flex justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">Final Inspection</span>
          </div>
          <div className="hidden lg:flex items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 lg:px-[15px] py-[20px]">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 lg:px-[15px] py-[20px]">About</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 lg:px-[15px] py-[20px]">Contact</Link>

            <div className="relative">
              <button onClick={() => setIsUpdateOpen(!isUpdateOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none py-[20px] lg:px-[15px]">Update ▾</button>
              {isUpdateOpen && (
                <div className="absolute z-10 bg-white border border-gray-200 rounded shadow-md top-[100%] right-0 w-40">
                  <Link to='/handover' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Handover</Link>
                  <Link to='/shadehold' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Shade Hold</Link>
                  <Link to='/excessfabric' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Excess Fabric</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => setIsReportOpen(!isReportOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none py-[20px] lg:px-[15px]">Report ▾</button>
              {isReportOpen && (
                <div className="absolute z-10 bg-white border border-gray-200 rounded shadow-md top-[100%] right-0 w-40">
                  <Link to='/handovershow' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Handover</Link>
                  <Link to='/shadeholdshow' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Shade Hold</Link>
                  <Link to='/excessfabricshow' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Excess Fabric</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header