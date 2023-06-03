import './App.css';
import DashBoard from './DashBoard';
import { useEffect, useState } from 'react';
function App() {
  const [email ,setEmail] = useState("");
  const [password ,setpaswword] = useState("");
  const [isLogin , setIsLogin] = useState(false);
  const [token , setToken ] = useState("")
  const [id , setId ] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://dummyjson.com/auth/login" , {
      method:"POST",
      headers:{ 'Content-Type': 'application/json' },
      body:JSON.stringify({
    
        username: email,
        password: password,
        // expiresInMins: 60, // optional
      })
    }).then((res)=>res.json())
    .then((data)=>{
      setToken(data.token)
      setId(data.id)
      setIsLogin(true)
    })
  }


  return (
    <>
    <h1>Simple Authentication with No User Interface </h1>
    { !isLogin && <form onSubmit={handleSubmit}  >
        <input type="text"   onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" onChange={(e)=>setpaswword(e.target.value)} />
        <input type="submit" />
      </form>}
    { isLogin && <DashBoard id={id} ></DashBoard>}
    </>
   
  );
}

export default App;
