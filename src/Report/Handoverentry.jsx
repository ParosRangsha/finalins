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
  let [unit, SetUnit] = useState('')
  
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
        <div className="contain">
          <div className="heading">
            <ul className='flex w-full'>
              {
                heading.map((item, i)=>(
                  <li key={i} className={`bg-[#ddf] w-[14.28%] text-center`}>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className="boxes flex gap-2 bg-[#ccc] py-[5px]">
            <div className="item flex justify-center items-center w-[14.28%] gap-2">
              <input onChange={(e)=>setDate(e.target.value)} type="date" id='date' className='w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-[14.28%] gap-2">
              <input onChange={(e)=>setDispo(e.target.value)} type="text" id='dispo' className='w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-[14.28%] gap-2">
              <input onChange={(e)=>setStartRoll(e.target.value)} type="text" id='stRoll' className='w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-[14.28%] gap-2">
              <input onChange={(e)=>setEndRoll(e.target.value)} type="text" id='EnRoll' className='w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-[14.28%] gap-2">
              <input onChange={(e)=>setTotalRoll(e.target.value)} type="text" id='TRoll' className='w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-[14.28%] gap-2">
              <input onChange={(e)=>setQTY(e.target.value)} type="text" id='Qty' className='w-[60%] text-center'/>
            </div>
            <div className="item flex justify-center items-center w-[14.28%] gap-2">
              <select onChange={(e)=>SetUnit(e.target.value)} className='w-[60%] text-center'>
                <option value="Yard">Yard</option>
                <option value="Meter">Meter</option>
              </select>
            </div>
          </div>
          <div className="btns flex justify-end">
            <button onClick={saveData} className='py-[10px] px-[20px] bg-[#db4444]'>Add Data</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Handoverentry