import React,{useState} from 'react'

const [count, setCount] = useState(0)

export const CounterNumber = () => {
  return(
    <div>
        <h1> {count} </h1>
        <button onClick={() => setCount( count + 1)}>+</button>
        <button onClick={() => setCount( count - 1)}>-</button>
        <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}