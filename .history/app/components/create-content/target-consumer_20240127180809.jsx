'use client'

import {useState} from 'react'

export default function targetConsumer({onChange}) {
  const [consumer,setConsumer] = useState({})
  const changeHandler = (e) => {
    setConsumer({...consumer,[e.target.name]:e.target.value})
  }
  return (
    <>
      <label htmlFor="consumers" className='label'>Consumers:</label>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor='ageFrom' className="label">Age From:</label>
          <input name='ageFrom' type="number" className="input input-bordered w-full" placeholder="Enter age from" />
        </div>
        <div>
          <label htmlFor='ageTo' className="label">Age To:</label>
          <input name='ageTo' type="number" className="input input-bordered w-full" placeholder="Enter age to" />
        </div>
        <div className='col-span-2'>
          <label htmlFor="gender" className='label'>Gender:</label>
          <div className='flex justify-between w-full'>
            <input className='radio radio-primary' type="radio" name="gender" value='male' />
            <label htmlFor="male">Male</label>
            <input className='radio radio-primary' type="radio" name="gender" value='female' />
            <label htmlFor="male">Female</label>
            <input className='radio radio-primary' type="radio" name="gender" value='both' />
            <label htmlFor="male">Both</label>
          </div>
        </div>
        <div className='col-span-2 flex justify-center'>
          <input type="button" className="btn btn-primary" value='Add consumer'/>
        </div>
      </div>
    </>
  )
}