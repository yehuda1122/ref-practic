
import type  { RefObject } from "react"

type TextBoxProps = {
  txt: RefObject<HTMLInputElement | null>;
};

export default function TextBox({txt}: TextBoxProps) {
  return (
    <div>
        <input ref={txt} type="text" />
    </div>
  )
}
