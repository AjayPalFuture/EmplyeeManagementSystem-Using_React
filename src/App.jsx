import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AuthProvider, { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/localStorage';
const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData=useContext(AuthContext)


  useEffect(() => {
    const loggedInUser=localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)

    }  
  },[])
  
  
  const handleLogin=(email,password)=>{
    const admin=authData.admin.find((e)=>email==e.email && password==e.password)
         if(email=='admin@me.com' && password=='123'){
          setUser('admin');
          setLoggedInUserData(admin)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
        }
        else if(authData ){
          const employees=authData.employees.find((e)=>email==e.email && password==e.password)
            if(employees){

              setUser('employees')
              setLoggedInUserData(employees)
              localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employees}))
            }
          }
         
         else{
          alert("Invalid Cridentials 😭😭😭😭😭😭")
         }
  }

  const data=useContext(AuthContext)
  return (
    <>
         {!user ?<Login handleLogin={handleLogin}/>:''}
       {user =='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employees'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null) }
    </>
  )
}

export default App
9