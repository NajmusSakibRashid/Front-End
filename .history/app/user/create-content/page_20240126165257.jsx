import React from 'react'
import ProfileCard from '@/app/components/create-content/profile-card'

export default function page() {
  return (
    <div className="card shadow-xl w-full bg-base-200 p-4 gap-4">
      <div className="card-title text4xl self-center">Build Content</div>
      <div className="flex gap-4">
        <div className="basis-1/2 flex flex-col w-full gap-2 justify-around">
          <div className="grid grid-cols-3 gap-4">
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col w-full gap-2 justify-around">

        </div>
      </div>
    </div>
  )
}
