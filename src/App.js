import logo from './logo.svg';
import './App.css';
import Test from "../src/components/test/test"
import UserForm from './UserForm/UserForm';
import { useState } from 'react';
import UsersList from './UserList/UserList';

function App() {
  const [users ,setUsers]=useState([])

  const handleUsers=(newUser)=>{
    setUsers([...users,newUser])
  }
  console.log(users)
  return (
    <div className="App">
      {/* <Test /> */}
      <UserForm handleUsers={handleUsers}  />
      <UsersList users={users} />
    </div>
  );
}

export default App;
