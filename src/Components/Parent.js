import { useState } from "react"
import Child from "./Child"
const Parent = () => {

    let [inputValue,setInputValue]=useState("")
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>
            <Child updateValue = {setInputValue}/>
        </div>

    )
}

export default Parent