
import { useRef, useState } from 'react'
import './App.css'
import Input from "./assets/input/Input"
import TextBox from "./assets/TextBox/TextBox"
import Counter from "./assets/counter/Counter"
import Timer from "./assets/timer/Timer"
import ClickCount from './assets/Click count/ClickCount'

function App() {
const [inp , setInp ] = useState("")
const txted = useRef<HTMLInputElement>(null)


  return (
    <div>
      <Input />
      < TextBox txt={txted}></TextBox>
      <button onClick={()=>{setInp(txted.current!.value);txted.current!.value = ""}} > show Value</button>
      <p>{inp}</p>
      <Counter/>
      <Timer/>
      <ClickCount/>
    </div>
  )
}

export default App
