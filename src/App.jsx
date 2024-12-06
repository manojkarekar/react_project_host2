import { useState } from 'react'
import './App.css'

function App() {
 
  let [isLoggedIn,setIsLoggedIn] = useState();
  const [User,setUser] = useState();

  return (
    <>
     {isLoggedIn && <p>You are Logged In...!</p>}
     {/* if isLoggedIn is true then show the message  */}


    {User ? `User is ${User}` : "You are Logged In...!"}
    <br />
     <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggler User Login</button>
     <button onClick={()=>setUser("rohan das")}>Set User</button>
    </>
  )
}

export default App
