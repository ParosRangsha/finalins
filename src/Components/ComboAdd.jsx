import React, { useState } from 'react';
import app from '../firebase.config';
import { getDatabase, ref, set, push } from 'firebase/database';

const ComboAdd = () => {
    let mydata = []
    let addingdata = async ()=>{
        mydata.map((item)=>{
            let db = getDatabase(app)
            let newDocRef = push(ref(db, 'handover/'+ item.DS))
            set(newDocRef,{
            adate: item.DT,
            bdispo: item.DS,
            cstartRoll: item.SR,
            dendRoll: item.ER,
            etotalRoll: item.TR,
            fquantity: item.QT,
            gunit: item.RM
            }).then(()=>{
            console.log(item.DS + "Added");
            
            }).catch(()=>{
            alert('Something Error.')
            })
        })
    }
  return (
    <div>
        <button onClick={addingdata}>Add Combo</button>
    </div>
  )
}

export default ComboAdd