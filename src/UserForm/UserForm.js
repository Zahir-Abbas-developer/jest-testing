import { useState } from "react"

const UserForm=({handleUsers})=>{
    const [email ,setEmail]=useState()
    const [name ,setName]=useState()
    const handleSubmit=(event)=>{
        event.preventDefault();
        handleUsers({name,email})
       console.log(name,email)
    }
return(
    <form>
        <label>Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button  onClick={handleSubmit}>Add User</button>
    </form>
)
}

export default UserForm