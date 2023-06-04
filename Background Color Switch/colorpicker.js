import { useState, useEffect } from "react";
import "./stylepicker.css";

function Colorswitch()
{
    let i;
    let colors = ["#cc0000", "#2eb82e", " #4d4dff", "#476b6b", "#00cccc", "#cccc00", "#ff4dff", "#ac39ac", "#999900"];
    const [startingcolor, changecolor] = useState('#ffffff');


   const colorChanger = () => {
         const randomi = getrandomcolor();
         changecolor(randomi);
   };

   const getrandomcolor = () =>{
      i = Math.floor(Math.random() * colors.length)

      return colors[i];
   }

    useEffect(()=>{
    document.body.style.backgroundColor = startingcolor;
    const a = document.getElementById("textone");
    a.style.color = "white";
    
   }, [startingcolor]);

    return(
        <>
        <h1 id="textone">Background Color Switch</h1>
        <br></br>
        <button id="colorbtn" onClick= {colorChanger}>Change the color</button>
        </>
    )
};

export default Colorswitch;