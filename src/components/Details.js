import React, {useEffect, useState } from 'react'

const Details = () => {
    const [user, setuser] = useState([])
    const data=async()=>{
        const url="http://localhost:3000/"
        const response = await fetch(url, {
            method: "GET", 
        });
          const res = await response.json()
          setuser(res[0])
    }
    useEffect(() => {
        data()
    }, [])
    
 
  return (
    <>
    <div className='container m-2'>
       <h3>{user.fName} {user.lName}</h3> 
       <h4>{user.email}</h4> 
       <h4>country: {user.country}</h4> 
       <h4>city: {user.city}, state: {user.state}</h4> 
       <h4>GENDER: {user.gender}</h4> 
       <h4>DOB: {user.dateOfBirth}</h4> 
       <h4>Age: {user.age}</h4> 
    </div>
    <a href='/' className='mx-2'><h4>&lt;-Home</h4></a>
    </>
  )
}

export default Details