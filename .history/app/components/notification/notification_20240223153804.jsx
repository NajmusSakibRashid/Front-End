import React from 'react'

export default function notification() {
  return (
    <div className='btn btn-ghost relative'>
      <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="" />
      <div className="bg-red-700 rounded-full absolute top-[10%] right-[10%] p-1">
        1
      </div>
    </div>
  )
}