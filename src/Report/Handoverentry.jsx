import React, { useEffect, useState } from 'react'
import app from '../firebase.config'
import { getDatabase, ref, set, push } from 'firebase/database'
import Container from '../Components/Container'

const Handoverentry = () => {
  let [date, setDate] = useState('')
  let [dispo, setDispo] = useState('')
  let [startRoll, setStartRoll] = useState('')
  let [endRoll, setEndRoll] = useState('')
  let [totalRoll, setTotalRoll] = useState('')
  let [qty, setQTY] = useState('')
  let [unit, setUnit] = useState('Yard')
  console.log(unit);
  
  
  let heading = ['Date', 'Dispo', 'Start Roll', 'End Roll', 'Total Roll', 'QTY', 'Unit',]
 
  
  let saveData = async ()=>{
    let db = getDatabase(app)
    let newdocref = push(ref(db, 'handover/'+ dispo)) 
    set(newdocref,{
      Date : date,
      StartRoll : startRoll,
      EndRoll : endRoll,
      TotalRoll: totalRoll,
      QTY: qty,
      Unit: unit

    }).then(()=>{
      alert('Data added successfully.')

    }).catch(()=>{
      alert('Not Success')
    })
  }
  return (
    <div className="entry">
      <Container>
        <div className="contain lg:block flex">
          <div className="heading w-[30%]  lg:w-full">
            <ul className='lg:flex w-full'>
              {
                heading.map((item, i)=>(
                  <li key={i} className={`bg-[#ddf] w-full lg:w-[14.28%] text-center py-[5px]`}>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className="boxes w-[50%] lg:w-full flex flex-col lg:flex-row gap-[10px] bg-[#ccc] py-[5px]">
            <div className="item w-full lg:w-[14.28%] flex justify-center items-center lg:gap-2">
              <input onChange={(e)=>setDate(e.target.value)} type="date" id='date' className='w-full lg:w-full lg:w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-full lg:w-[14.28%] gap-2">
              <input onChange={(e)=>setDispo(e.target.value)} type="text" id='dispo' className='w-full lg:w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-full lg:w-[14.28%] gap-2">
              <input onChange={(e)=>setStartRoll(e.target.value)} type="text" id='stRoll' className='w-full lg:w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-full lg:w-[14.28%] gap-2">
              <input onChange={(e)=>setEndRoll(e.target.value)} type="text" id='EnRoll' className='w-full lg:w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-full lg:w-[14.28%] gap-2">
              <input onChange={(e)=>setTotalRoll(e.target.value)} type="text" id='TRoll' className='w-full lg:w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-full lg:w-[14.28%] gap-2">
              <input onChange={(e)=>setQTY(e.target.value)} type="text" id='Qty' className='w-full lg:w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-full lg:w-[14.28%] gap-2">
              <select onChange={(e)=>setUnit(e.target.value)} className='w-full lg:w-[60%] text-center'>
                <option value="Yard">Yard</option>
                <option value="Meter">Meter</option>
              </select>
            </div>
          </div>
          <div className="btns w-[20%] lg:w-full flex justify-end">
            <button onClick={saveData} className='py-[10px] px-[20px] bg-[#db4444]'>Add Data</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Handoverentry