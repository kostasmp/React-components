import { useState, useEffect } from "react";
import './stylecounter.css'

function Counter(){
    let [startingvalue, updatevalue] = useState(0);

    const Increment = () => {
        const increase = startingvalue + 1
        updatevalue(increase);
    }

    const Decrement = () => {
        if(startingvalue === 0)
        {
            const decrease = startingvalue
            updatevalue(decrease);
        }
        else{
            const decrease = startingvalue - 1
            updatevalue(decrease);
        }
      }

      

      useEffect(() =>{
        const a = document.getElementById("counterbox");
        a.style.color = "crimson";
        if(startingvalue >= 5)
        {
            a.style.color = "#ffa64d";
        }

        if(startingvalue >= 10)
        {
            a.style.color = "#009900";
        }
    
      })

     return(
        <>
        <body>
        <div id="counterbox">
        <h1>Counter with buttons</h1>
        <br></br>
        <span id="countervalue">{startingvalue}</span>
        <br></br>
        <button id="up"  onClick={Increment}>Increase the counter</button>
        <button id="down"  onClick={Decrement}>Decrease the counter</button>
        </div>
        </body>
        </>
    )
};

export default Counter;