'use client'

import { useState } from 'react'

export default function targetConsumer({ onChange }) {
  const [consumer, setConsumer] = useState({})
  const changeHandler = (e, preProcess) => {
    setConsumer({ ...consumer, [e.target.name]: preProcess(e.target.value) })
  }
  const validityCheck = () => {
    if(consumer.hasOwnProperty('ageFrom') && consumer.hasOwnProperty('ageTo') && consumer.hasOwnProperty('gender')){
      return true;
    }
    alert('Please fill all the fields');
    return false;
  }
  return (
    <div>
      <label htmlFor="consumers" className='label'>Consumers:</label>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor='ageFrom' className="label">Age From:</label>
          <input onChange={(e) => changeHandler(e, parseInt)} name='ageFrom' type="number" className="input input-bordered w-full" placeholder="Enter age from" />
        </div>
        <div>
          <label htmlFor='ageTo' className="label">Age To:</label>
          <input onChange={(e) => changeHandler(e, parseInt)} name='ageTo' type="number" className="input input-bordered w-full" placeholder="Enter age to" />
        </div>
        <div className='col-span-2'>
          <label htmlFor="gender" className='label'>Gender:</label>
          <div className='flex justify-between w-full'>
            <input onChange={(e) => changeHandler(e, (data => data))} className='radio radio-primary' type="radio" name="gender" value='male' />
            <label htmlFor="male">Male</label>
            <input onChange={(e) => changeHandler(e, (data => data))} className='radio radio-primary' type="radio" name="gender" value='female' />
            <label htmlFor="male">Female</label>
            <input onChange={(e) => changeHandler(e, (data => data))} className='radio radio-primary' type="radio" name="gender" value='both' />
            <label htmlFor="male">Both</label>
          </div>
        </div>
        <div className='col-span-2 flex justify-center'>
          <input onClick={() => {
            if(!validityCheck()){
              return;
            }
            onChange({
              target: {
                name: 'consumer',
                value: consumer
              }
            });
            const inputs = document.querySelectorAll('.input');
            inputs.forEach(input => {
              input.value = '';
            })
            const radios = document.querySelectorAll('.radio');
            radios.forEach(radio => {
              radio.checked = false;
            })
            setConsumer({});
          }} type="button" className="btn btn-primary" value='Add consumer' />
        </div>
      </div>
    </div>
  )
}
