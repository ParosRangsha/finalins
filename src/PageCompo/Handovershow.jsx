import React, { useState } from 'react';
import app from '../firebase.config';
import { getDatabase, ref, get } from 'firebase/database';
import { useEffect } from 'react';
import Container from '../Components/Container';

const Handovershow = () => {
    let [mydispo, setMyDispo] = useState('')
    let [info, setInfo] = useState([])
    let [infoarray, setInfoArray] = useState([])
    let fetchdata = async ()=>{
        let db = getDatabase(app)
        let dbRef = ref(db, 'handover/' + mydispo)
        let snapshoot = await get(dbRef)
        if (snapshoot.exists()) {
            setInfo(Object.values(snapshoot.val()))
        }else{
            alert('No data found.')
        }        
    }

  return (
    <div className="handshow">
        <div className="searchbar bg-[#ddd]">
            <Container>
                <div className="py-[10px] flex gap-2 items-center">
                    <label htmlFor="dispo">Dispo</label>
                    <input type="number" onChange={(e)=>setMyDispo(e.target.value)} id='dispo' placeholder='Enter your Dispo' className='px-[10px] py-[5px]'/>
                    <button onClick={fetchdata} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">Check</button>
                </div>
            </Container>
        </div>
        <Container>
            <ul className='flex w-full justify-between bg-[#d5d5d5] overflow-y-scroll'>
                <li className={`w-[12.5%] text-center`}>Serial</li>
                <li className={`w-[12.5%] text-center`}>Date</li>
                <li className={`w-[12.5%] text-center`}>Dispo</li>
                <li className={`w-[12.5%] text-center`}>Start Roll</li>
                <ul className={`w-[12.5%] text-center`}>End Roll</ul>
                <ul className={`w-[12.5%] text-center`}>Total Roll</ul>
                <ul className={`w-[12.5%] text-center`}>Quantity</ul>
                <ul className={`w-[12.5%] text-center`}>Unit</ul>
            </ul>
            <ul className='w-full h-[72vh] overflow-y-scroll border-x-[1px]'>
                {info.map((item, i)=>(
                    <li key={i} className='showi'>
                        <ul className='flex w-full'>
                            <li className='w-[12.5%] text-center border-[1px] flex items-center justify-center'>{i < 9 ? `0${i + 1}`: i+1}</li>
                            <li className='w-[12.5%] text-center border-[1px] flex items-center justify-center'>{item.adate}</li>
                            <li className='w-[12.5%] text-center border-[1px] flex items-center justify-center'>{item.bdispo}</li>
                            <li className='w-[12.5%] text-center border-[1px] flex items-center justify-center'>{item.cstartRoll}</li>
                            <ul className='w-[12.5%] text-center border-[1px] flex items-center justify-center'>{item.dendRoll}</ul>
                            <ul className='w-[12.5%] text-center border-[1px] flex items-center justify-center'>{item.etotalRoll}</ul>
                            <ul className='w-[12.5%] text-center border-[1px] flex items-center justify-center'>{item.fquantity}</ul>
                            <ul className='w-[12.5%] text-center border-[1px] flex items-center justify-center'>{item.gunit}</ul>
                        </ul>
                    </li>
                ))}
            </ul>
        </Container>
    </div>
  )
}

export default Handovershow