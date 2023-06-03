import React from 'react'
import { useEffect , useState } from 'react'
function DashBoard({id}) {
    const [infoObj , setInfoObj] = useState({})
    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>setInfoObj(data))
    },[])


  return (
    <pre>
        {JSON.stringify(infoObj,null,2)}
    </pre>
  
  )
}

export default DashBoard