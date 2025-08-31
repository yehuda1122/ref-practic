import { useRef, useState } from 'react'

export default function ClickCount() {
    const count = useRef(0)
    const [rend ,setRend] = useState(0)
  return (
    <div>
        <button onClick={()=> {count.current +=1;console.log(count.current)}}>click counter</button>
        <button onClick={()=> {setRend(count.current)}}>show counter</button>
        <p>{rend}</p>
    </div>
  )
}
