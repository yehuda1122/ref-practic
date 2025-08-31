import { useRef, useState } from 'react'


export default function Counter() {
    const [count, setCount] = useState(0)
    const minNum = useRef(0)
    return (
        <div>
            <div>{count}</div>
            <div>positiv{minNum.current}</div>
            <button onClick={()=>{minNum.current= count; setCount(count+1) }}>counter</button>
        </div>
    )
}
