import React from 'react'
import { useState } from 'react'

function IncDecCounter() {
    const [num, setNum] = useState(1)
    let incNum =()=>{
        if(num) {
            setNum(Number(num)+1);
        }
      };
      let decNum = () => {
         if(num>0) {
            setNum(num - 1);
         }
      }
     let handleChange = (e)=>{
       setNum(e.target.value);
      }
    
  return (
    <div className="flex items-center border rounded border-black justify-center">
            <div>
                <button className="border rounded px-6 py-2 text-main text-3xl" type="button" onClick={decNum}>-</button>
            </div>
            
             <input type="text" class=" text-main border border-black text-3xl w-20 px-4 py-2" value={num} onChange={handleChange}/>
 
            
            <div>
                <button className="border rounded px-6 py-2 text-main text-3xl" type="button" onClick={incNum}>+</button>
            </div>
    </div>

  )
}

export default IncDecCounter