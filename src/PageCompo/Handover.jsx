import React, { useState } from 'react';
import app from '../firebase.config';
import { getDatabase, ref, set, push } from 'firebase/database';
const Handover = () => {
  let [date, setDate] = useState('')
  let [dispo, setDispo] = useState('')
  let [startRoll, setStartRoll] = useState('')
  let [endRoll, setEndRoll] = useState('')
  let [totalRoll, setTotalRoll] = useState('')
  let [quantity, setQuantity] = useState('')
  let [unit, setUnit] = useState('Yard')

  const handleAdd = async () => {    
    let db = getDatabase(app)
    let newDocRef = push(ref(db, 'handover/'+dispo))
    set(newDocRef,{
      adate: date,
      bdispo: dispo,
      cstartRoll: startRoll,
      dendRoll: endRoll,
      etotalRoll: totalRoll,
      fquantity: quantity,
      gunit: unit
    }).then(()=>{
      alert('Data successfuly added.')
    }).catch(()=>{
      alert('Something Error.')
    })
    
  };

  const handleDelete = () => {
    console.log('Delete Data')
  };

  const handleUpdate = () => {
    console.log('Update Data')
  };
  
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Handover Entry</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" name="date" onChange={(e)=>setDate(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Dispo No</label>
          <input
            type="number" name="dispoNo" onChange={(e)=>setDispo(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Roll</label>
          <input type="number" name="startRoll" onChange={(e)=>setStartRoll(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Roll</label>
          <input type="number" name="endRoll" onChange={(e)=>setEndRoll(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Roll</label>
          <input type="number" name="totalRoll" onChange={(e)=>setTotalRoll(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input type="number" name="quantity" onChange={(e)=>setQuantity(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className='flex items-center'>
          <label className="block text-sm font-medium text-gray-700">Unit</label>
          <select name="unit" id="unit" onChange={(e)=>setUnit(e.target.value)} className='py-[10px] ml-3 w-full border border-gray-300'>
            <option value="Yard">Yard</option>
            <option value="Meter">Meter</option>
          </select>
        </div>
      </form>

      <div className="flex justify-center gap-4 mt-6">
        <button type="button" onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded" > Add Data </button>
        <button type="button" onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded" > Delete </button>
        <button type="button" onClick={handleUpdate} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded">Update</button>
      </div>
    </div>
  )
}
export default Handover