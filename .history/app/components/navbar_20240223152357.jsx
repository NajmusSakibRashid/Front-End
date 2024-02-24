import Link from 'next/link'

export default function navbar({dropdownContent}) {
  return (
    <div className="navbar bg-base-300 fixed z-10">
      <div className="flex-none">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <div className="flex-1">
        <Link className="mx-10 btn btn-ghost text-xl" href="/user">MediaSynergy</Link>
      </div>
      <div className="flex-none">
        <div className="flex dropdown dropdown-end">
          <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="" />
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
          {/* <!-- <div tabindex="0" role="button" className="btn m-1">Click</div> --> */}
          <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {
              dropdownContent?.map(item=>{
                return <li><Link href={item.link}>{item.title}</Link></li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}