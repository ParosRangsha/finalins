import React, { useState } from 'react';
import app from '../firebase.config';
import { getDatabase, ref, get } from 'firebase/database';
import { useEffect } from 'react';

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
        <input type="number" onChange={(e)=>setMyDispo(e.target.value)}/>
        <button onClick={fetchdata}>Show</button>
        <ul className='flex w-full justify-between'>
            <li className={`w-[14.28%] text-center`}>Date</li>
            <li className={`w-[14.28%] text-center`}>Dispo</li>
            <li className={`w-[14.28%] text-center`}>Start Roll</li>
            <ul className={`w-[14.28%] text-center`}>End Roll</ul>
            <ul className={`w-[14.28%] text-center`}>Total Roll</ul>
            <ul className={`w-[14.28%] text-center`}>Quantity</ul>
            <ul className={`w-[14.28%] text-center`}>Unit</ul>
        </ul>
        <ul>
            {info.map((item, i)=>(
                <li key={i}>
                    <ul className='flex w-full justify-around'>
                        <li className='w-[14.28%] text-center'>{item.adate}</li>
                        <li className='w-[14.28%] text-center'>{item.bdispo}</li>
                        <li className='w-[14.28%] text-center'>{item.cstartRoll}</li>
                        <ul className='w-[14.28%] text-center'>{item.dendRoll}</ul>
                        <ul className='w-[14.28%] text-center'>{item.etotalRoll}</ul>
                        <ul className='w-[14.28%] text-center'>{item.fquantity}</ul>
                        <ul className='w-[14.28%] text-center'>{item.gunit}</ul>
                    </ul>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Handovershow