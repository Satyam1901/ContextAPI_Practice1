import React, {useState, useContext} from 'react'
import UserContext from '../contexts/UserContext'
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";


function Login() {
    const [username, setUsername] =useState(' ');
    const [password, setPassword] =useState(' ');
   const {setUser} = useContext(UserContext);
    const handleSubmit = (e) =>{
e.preventDefault();
setUser({username, password}) /* This is the way we can send data to User present in UserContext */
    }
  return (
    <>
    <div className="flex flex-col gap-6 mt-5 w-72">
      <Input variant="static" label="Email" placeholder="Static"  value={username} onChange = {(e) => setUsername(e.target.value)} color='teal'/>
      <Input variant="standard" type="password" label="Password" value={password} onChange = {(e) => setPassword(e.target.value)}  color='teal' />
      <Button onClick={handleSubmit} className='mt-5'>Submit</Button>
      </div>
      
    </>
    
  
  )
}

export default Login