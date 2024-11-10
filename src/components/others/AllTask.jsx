import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
     const [userData,setUserData]=useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded  overflow-auto'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
          <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
          <h5 className='w-1/5 text-lg font-medium '>Active Task</h5>
          <h5 className='w-1/5 text-lg font-medium '>Completed Task</h5>
          <h5 className='w-1/5 text-lg font-medium '>Failed Task</h5>

        </div>
       <div className=' overflow-auto'>

     {userData.employees.map(function(elem,idx){
          return  <div key={idx} className='bg-[#1c1c1c] border-[2px] border-emerald-600 py-2 mb-2 px-4 flex justify-between'>
         <h2 className='w-1/5 text-lg font-medium text-white'>{elem.name}</h2>
         <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCounts.newTask}</h3>
         <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
         <h5 className='w-1/5 text-lg font-medium text-green-600'>{elem.taskCounts.completed}</h5>
         <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCounts.failed}</h5>
    </div>
     }
)}
</div>
    </div>
  )
}

export default AllTask
