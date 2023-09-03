import React, { useContext} from 'react'
import { CounterContext } from '../context/counterContext'

export default function Counter() {
    // const [count , setCount] = useState(0)
    const {count, setCount} = useContext(CounterContext)
  return (
    <div className='bg-body-tertiary p-5 text-center'>
      <h1>Counter Component</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)} className=' mx-2 btn btn-success'>increase</button>
      <button onClick={()=>setCount(count-1)} className=' mx-2 btn btn-danger'>decrease</button>
    </div>
  )
}
