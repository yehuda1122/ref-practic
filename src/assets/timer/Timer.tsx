import React, { useRef, useState } from 'react'

export default function Timer() {

    const [time, setTime] = useState(0)
    const id = useRef<number | null>(null)

    function StartTimer() {
        if (id.current === null) {
            id.current = setInterval(() => {
                setTime((t) => t + 1)
            }, 1000)
        }
    }
    function stopTimer() {
        if (id.current)
            clearInterval(id.current);
        id.current = null;
    }

    return (
        <div>
            <div>{time}</div>
            <button onClick={StartTimer}>start</button>
            <button onClick={stopTimer}>stop</button>
        </div>
    )
}
