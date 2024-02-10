import React from 'react'

export default function showAllConsumers({ consumers }) {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {consumers?.map(consumer =>
        <div className='card bg-base-300 p-4'>
          Age From: {consumer.ageFrom} <br />
          Age To: {consumer.ageTo} <br />
          Gender : {consumer.gender} <br />
        </div>
      )}
    </div>
  )
}