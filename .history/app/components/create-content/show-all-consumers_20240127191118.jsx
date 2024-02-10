import React from 'react'

export default function showAllConsumers({ consumers }) {
  return (
    <div>
      {consumers?.map(consumer =>
        <>
          Age From: {consumer.ageFrom}
          Age To: {consumer.ageTo}
          Gender : {consumer.gender}
        </>
      )}
    </div>
  )
}