'use client'

import {useState} from 'react'
import PublishButton from '@/app/components/utilities/publish-button'

export default function content({children}) {
  const [show, setShow] = useState(true);
  const deletef=(e)=>{
    e.stopPropagation();
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/${children._id}`;
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        setShow(false);
        console.log(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }
  if(!show){
    return null;
  }
  return (
    <div onClick={()=>window.location.href=`/user/contents/${children._id}`} className="card w-full h-96 bg-base-200 hover:bg-base-300">
      {children.media.length>0&&<img src={children.media} className="p-4 h-40 w-full object-cover" />}
      <div className="card-title p-4">
        {children.title}
      </div>
      <div className="card-body overflow-hidden">
        {children.description}
      </div>
      <div className="card-action p-4 flex justify-center gap-8">
        <PublishButton/>
        <button onClick={deletef} className="btn btn-error">Delete</button>
      </div>
    </div>
  )
}