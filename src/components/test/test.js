import { useState } from "react"

const Test=()=>{
    const [inputValue ,setInputValue]=useState("")
    
return(
    <>
    <div>
    <h1>
        heading1
    </h1>
    <h1>
        heading2
    </h1>
    <h1>
        heading3
    </h1>
    <h1>
        heading4
    </h1>
    <h1>
        heading5
    </h1>
    <h1>
        heading6
    </h1>
    <h1>
        heading7
    </h1>
    </div>
    <form>
    <label htmlFor="input">Enter First Name</label>
        <input label="Enter First Name" id="input" value={inputValue}   onChange={(e) => setInputValue(e.target.value)} />
    </form>
    </>
)
}
export default Test