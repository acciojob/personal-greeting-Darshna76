import React,{useState} from "react";

let Greeting = ()=>{
let [greet , setGreet] = useState("");

let textChange = (event)=>{
   setGreet(event.target.value)
}

    return (
        <div>
            <p>Enter your name:</p>
            <input type = "text" onChange={textChange}></input>
            {
                greet && 

             <p>Hello {greet}</p>

            }
            
               
            
           
        </div>
        
    )
}
export default Greeting;