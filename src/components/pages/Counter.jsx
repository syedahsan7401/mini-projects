import React, { useState } from 'react'

const Counter = () => {
  const [count, setcount] = useState(0)
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2>Count:  {count}</h2>
            <button className='btn btn-outline-success m-3 px-4' onClick={() => setcount(count + 1)} >Increament</button>
            <button className='btn btn-outline-danger m-3 px-4' onClick={() => setcount(count - 1)} disabled = {count===0}>Decreament</button>
            <button className='btn btn-outline-secondary m-3 px-4' onClick={() => setcount(0)} disabled = {count===0}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter