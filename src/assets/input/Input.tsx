import { useRef, useState } from "react"

export default function Input() {
    // const  [input , setInputed] = useState("a") 
    const refw = useRef(null)
  return (
    <div>
        <input type="text" ref={refw}/>
        {/* <button onClick={()=>{refw.current = ""}}>chench</button> */}
    </div>
  )
}
