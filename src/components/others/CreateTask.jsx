import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const[userData,setUserData]=useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignTo, setAssignTo] = useState('')

  const [newTask,setNewTask]=useState({})
  const submitHandler=(e)=>{
    e.preventDefault()

    setNewTask({title,description,date,category,active:false,newTask:true,failed:false,completed:false})
  const data= userData.employees
  data.forEach(function(elem){
       if(assignTo==elem.name){
           elem.tasks.push(newTask)
           elem.taskCounts.newTask=elem.taskCounts.newTask+1
       }
  })
  setUserData(data)

  setAssignTo('')
  setCategory('')
  setDate('')
  setDescription('')
  setTitle('')
  


  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} className="flex items-start justify-between flex-wrap w-full">
      <div className="w-1/2">
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
            type="text"
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder="Make a UI Design"
          />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-0.5 ">Date</h3>
          <input
           value={date}
           onChange={(e)=>{
             setDate(e.target.value)
           }}
            type="date"
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
          />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
          <input 
           value={assignTo}
           onChange={(e)=>{
             setAssignTo(e.target.value)
           }}
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" name="" id="" placeholder="employee name" />
        </div>

        <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
        <input
         value={category}
         onChange={(e)=>{
           setCategory(e.target.value)
         }}
         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" name="" id="" placeholder="design ,dev ,etc" />
      </div>
      </div>
        <div className="w-2/5 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea
         value={description}
         onChange={(e)=>{
           setDescription(e.target.value)
         }}
         className="w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>


     
      <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded etx--sm mt-4 w-full">Create Task</button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask;
