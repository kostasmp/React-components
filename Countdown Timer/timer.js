import { useState, useEffect } from "react"
import './timer.css'

function CountdownTimer()
{
  let [minutes, setMinutes] = useState('00');
  let [seconds, setSeconds] = useState('00');
  let [controltimer, setControltimer] = useState(false);
  
 useEffect(() => {

  function stoptimer() {
    clearInterval(timer);
    setControltimer(false);
    alert("Time's up");
  }

  let timer;
  if(controltimer){
     timer = setInterval(() => {
      let secs = parseInt(seconds);
      let mins = parseInt(minutes);
      if(secs !== 0)
        {
          secs--;
          if(secs < 10)
          {
            secs = '0' + secs;
          }
        }
        if(secs === 0 && mins !== 0)
        {
          secs = 59;
          mins--;
          if(mins < 10)
          {
            mins = "0" + mins;
          }
        }
        if(secs === 0 && mins === 0)
        {
          stoptimer();
        }
        setSeconds(secs.toString());
        setMinutes(mins.toString());
    }, 1000);
  }
    return() => {
      clearInterval(timer);
    };
  
 },[controltimer, minutes, seconds]);



  function countdown()
  {
    if(!controltimer)
    {
    setControltimer(true);
    }
  }

  const handleSeconds = (e) => {
    let value = parseInt(e.currentTarget.value)
    if(value < 10)
    {
        value = "0" + value;
    }
    setSeconds(value.toString());
  };

  const handleMinutes = (ev) => {
    let value = parseInt(ev.currentTarget.value)
    if(value < 10)
    {
        value = "0" + value
    }
    setMinutes(value.toString());
  };



  return(
        <>
          <h1>Countdown Timer</h1>
          <br></br>
          <div id="timer">
           <br></br>
           <input type="number" min={0} max={60} id="mins" value={minutes.toString().padStart(2, '0')} onChange={handleMinutes}></input>
            <p id="sem">:</p>
            <input type="number" min={0} max={60} id="secs" value={seconds.toString().padStart(2, '0')} onChange={handleSeconds}></input>
           </div>
           <button id="start" onClick={countdown}>Start</button>
        </>
    )
}
export default CountdownTimer;