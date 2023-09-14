const UsersList=({users})=>{
    return(
        <>
        {users?users?.map((userData)=>{
            return(<p>Name:{ userData?.name}</p>)
        }):""}
        </>
    )
}
export default UsersList