'use client'

import { useEffect, useState } from 'react'

export default function notification() {
  const [notifications, setNotifications] = useState([{ message: 'hello'}, { message: 'world'}]);
  useEffect(() => {
    const eventSource = new EventSource(`${process.env.NEXT_PUBLIC_BACK_END}/user/notifications`);
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setNotifications([...notifications, data]);
    }
    return () => {
      eventSource.close();
    }
  }, []);
  return (<div>
    <div className='btn btn-ghost relative'>
      <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="" />
      <div className="bg-red-500 rounded-full absolute top-[10%] right-[10%] p-1"></div>
    </div>
    <div className='absolute top-full'>
    {
      notifications.map((notification, index) => {
        return (
          <div key={index} className="notification bg-base-200 shadow-xl p-4">
            {JSON.stringify(notification)}
          </div>
        )
      })
    }
    </div>
  </div>
  )
}
