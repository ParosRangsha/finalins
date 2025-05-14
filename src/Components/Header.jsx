import React, { useEffect, useRef, useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { ImMenu } from "react-icons/im";


const Header = () => {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  let reportref = useRef()
  let updateref = useRef()

  let [menuShow, setMenuShow] = useState(false)
  let hanleMenu = ()=>{
    setMenuShow(!menuShow)
  }

  let [showupdate, setshowupdate] = useState(false)
  let [user, setUser] = useState('')
  let [password, setPassword] = useState('')

  let [showuser, setShowUser] = useState(false)

  let showUser= ()=>{
    setShowUser(!showuser)
  }
  let handleLogin = ()=>{
    if (user == 'Paros' && password == 421) {
      setshowupdate(!showupdate)
      setShowUser(false)
    }else{
      setshowupdate(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click', (e)=>{
      if(reportref.current.contains(e.target)){
        setIsReportOpen(!isReportOpen)
      }else{
        setIsReportOpen(false)
      }
      if(updateref.current.contains(e.target)){
        setIsUpdateOpen(!isUpdateOpen)
      }else{
        setIsUpdateOpen(false)
      }
    })
  },[])
  return (
    <div className='flex'>
      <nav className="bg-white shadow-md z-50 sticky w-full left-0">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Final Inspection</span>
            </div>
            <div className={`absolute lg:static top-[100%] left-0 lg:flex ${menuShow ? 'block': 'hidden'} lg:items-center bg-[#ddd] lg:bg-[#fff]`}>
              <Link to="/" className="block lg:inline-block text-gray-700 hover:text-blue-600 lg:px-[15px] lg:py-[20px]">Home</Link>
              <Link to="/about" className="block lg:inline-block text-gray-700 hover:text-blue-600 lg:px-[15px] lg:py-[20px]">About</Link>
              <Link to="/about" className="block lg:inline-block text-gray-700 hover:text-blue-600 lg:px-[15px] lg:py-[20px]">Contact</Link>
              {showupdate && 
              <div className="relative block lg:inline-block " ref={updateref}>
                <Link onClick={() => setIsUpdateOpen(!isUpdateOpen)} className="block text-gray-700 hover:text-blue-600 focus:outline-none lg:py-[20px] lg:px-[15px]">Update ▾</Link>
                {isUpdateOpen && (
                  <div className="absolute z-10 bg-white border border-gray-200 rounded shadow-md top-[100%] left-[100%] lg:left-0 w-40">
                    <Link to='/handover' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Handover</Link>
                    <Link to='/shadehold' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Shade Hold</Link>
                    <Link to='/excessfabric' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Excess Fabric</Link>
                  </div>
                )}
              </div>
              }
              <div className="relative block lg:inline-block " ref={reportref}>
                <Link onClick={() => setIsReportOpen(!isReportOpen)} className="block text-gray-700 hover:text-blue-600 focus:outline-none lg:py-[20px] lg:px-[15px]">Report ▾</Link>
                {isReportOpen && (
                  <div className="absolute z-10 bg-white border border-gray-200 rounded shadow-md top-[100%] left-[100%] lg:left-0 w-40">
                    <Link to='/handovershow' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Handover</Link>
                    <Link to='/shadeholdshow' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Shade Hold</Link>
                    <Link to='/excessfabricshow' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">Excess Fabric</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="user flex gap-3">
              <FaUser onClick={showUser}/>
              <ImMenu className='lg:hidden' onClick={hanleMenu}/>
            </div>
          </div>
        </Container>
      </nav>
      {
        showuser &&
        <div className="absolute w-full h-full top-0 left-0 bg-[#db4444]">
          <div className="absolute bg-[#ddd] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-[20px] flex flex-col gap-3 rounded-[10px]">
            <FaUser className='absolute bottom-[99%] left-[50%] text-[100px] translate-x-[-50%] text-[#ddd]'/>
            <input type="text" placeholder='User ID' onChange={(e)=>setUser(e.target.value)} className='py-[5px] px-[10px]'/>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className='py-[5px] px-[10px]'/>
            <button onClick={handleLogin} className='border-[1px] border-[#fff] py-[5px]'>Login</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Header