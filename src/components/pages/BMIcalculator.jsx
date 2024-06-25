import React, { useState } from 'react'

const BMIcalculator = () => {

  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [message, setmessage] = useState('');
  const [bmi, setbmi] = useState('');

  let calcbmi = (e) =>{
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("0 is not acceptable!");
    }else{
      let meter = height / 3.28084;
      let bmi = ( weight / (meter*meter) ) ;
      setbmi(bmi.toFixed(1));

      if(bmi < 25){
        setmessage("You are underweight!");
      }else if(bmi >= 25 && bmi < 30){
        setmessage("You are healthy");
      }else{
        setmessage("You are overweight");
      }
    }
    
  }
  let reload = () =>{
    window.location.reload();
  }

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>BMI Calculator App</h1>
          <form onSubmit={calcbmi}>
            <div>
              <label>Weight (kg)</label>
              <input className='mx-sm-3 mb-3 mt-4' type="text" required placeholder='Enter Weight' value={weight} onChange={(e) => setweight(e.target.value)} />
            </div>
            <div>
              <label>Height (feet)</label>
              <input className='mx-sm-3 mb-3' type="text" required placeholder='Enter Height' value={height} onChange={(e) => setheight (e.target.value)}/>
            </div>
            <div>
            <button className='btn btn-outline-success m-3 px-4' >Submit</button>
            <button className='btn btn-outline-danger m-3 px-4' onClick={reload}>Reload</button>
            </div>
            <div className="center">
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>  
            
        </div>
      </div>
    </div>
  )
}

export default BMIcalculator