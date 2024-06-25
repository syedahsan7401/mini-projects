import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
  const [seconds, setseconds] = useState(0)
  const [minutes, setminutes] = useState(0)
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setseconds(seconds + 1);
      if (seconds === 59) {
        setminutes(minutes + 1);
        setseconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Stopwatch App</h1>
          <div className="my-5">
            <h2>{minutes<10? "0"+minutes:minutes}:{seconds<10? "0"+seconds:seconds}</h2>
            <button className='btn btn-outline-success m-3 px-4' onClick={()=> {
              setseconds(seconds + 1);
            }}>Start</button>
            <button className='btn btn-outline-danger m-3 px-4' onClick={() => clearInterval(timer)} >Stop</button>
            <button className='btn btn-outline-secondary m-3 px-4'onClick={()=> {
              setseconds(0);
              setminutes(0);
             }} >Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch