import React from 'react'

const FailedTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[400px] p-5 bg-blue-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded shadow-md shadow-red-800 '>{DataTransfer.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='mt-2'>
        <button className='w-full bg-slate-500 py-1 px-2 text-xs font-medium rounded'>Failed</button>
    </div>
  </div>
  )
}

export default FailedTask
