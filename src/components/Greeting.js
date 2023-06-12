import React,{useState} from "react";

let Greeting = ()=>{
let [greet , setGreet] = useState("");

let textChange = (event)=>{
   setGreet(event.target.value)
}

    return (
        <div>
            <input type = "text" onChange={textChange}></input>
            {
                greet && 

             <p>Hello {greet}</p>

            }
            
               
            
           
        </div>
        
    )
}
export default Greeting;