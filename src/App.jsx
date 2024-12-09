import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { increment, decrement, manual } from './redux/features/CounterSlice'
import { useDispatch } from 'react-redux'

const App = () => {
  const [value, setValue]=useState(0)
  const {count}=useSelector((store)=> store.counter)
  const dispatch = useDispatch()
  console.log(count);
  
 
  
  return (
    <div className='containe mx-auto max-w-6 mt-6'>
      <h1 className='text-4xl'>Total:{count}</h1>
      <input className='border p-2 rounded-lg flex  justify-center' type="number" onChange={(e)=>setValue(e.target.value)} value={value}/>
      <div className="flex justify-center mt-4 space-x-2 mx-auto">

      <button onClick={()=> dispatch(increment())} className="px-4 py-2 rounded-lg border bg-slate-100">increment</button>
      <button onClick={()=> dispatch(decrement())} className="px-4 py-2 rounded-lg border bg-slate-100">decrement</button>
      <button onClick={()=> dispatch(manual(+value))} className="px-4 py-2 rounded-lg border bg-slate-100">manual</button>
      </div>

    </div>
  )
}

export default App
